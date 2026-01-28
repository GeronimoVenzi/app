from fastapi import APIRouter, HTTPException, BackgroundTasks
from models.contact import ContactCreate, Contact
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'cinegata')]

def send_email_notification(contact_data: dict):
    """Send email notification in background"""
    try:
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        recipient = os.environ.get('RECIPIENT_EMAIL', 'info@cinegata.com')

        # Skip email if credentials not configured
        if not smtp_user or not smtp_password:
            logger.warning("SMTP credentials not configured. Email not sent.")
            return

        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Nuevo mensaje de contacto: {contact_data['subject']}"
        msg['From'] = smtp_user
        msg['To'] = recipient

        # Email body
        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                CINEGATA - Nuevo Mensaje de Contacto
              </h2>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Nombre:</strong> {contact_data['name']}</p>
                <p><strong>Email:</strong> <a href="mailto:{contact_data['email']}">{contact_data['email']}</a></p>
                <p><strong>Asunto:</strong> {contact_data['subject']}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #333;">Mensaje:</h3>
                <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #dc2626;">
{contact_data['message']}
                </p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
                <p>Este mensaje fue enviado desde el formulario de contacto de CINEGATA</p>
                <p>{contact_data['created_at']}</p>
              </div>
            </div>
          </body>
        </html>
        """

        part = MIMEText(html, 'html')
        msg.attach(part)

        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            logger.info(f"Email sent successfully to {recipient}")

    except Exception as e:
        logger.error(f"Error sending email: {str(e)}")

@router.post("/contact", status_code=201)
async def create_contact(contact: ContactCreate, background_tasks: BackgroundTasks):
    """
    Create a new contact form submission and send email notification
    """
    try:
        # Prepare contact document
        contact_dict = contact.dict()
        contact_dict['created_at'] = datetime.utcnow()
        contact_dict['status'] = 'new'

        # Save to database
        result = await db.contacts.insert_one(contact_dict)
        
        # Send email in background
        contact_dict['created_at'] = contact_dict['created_at'].isoformat()
        background_tasks.add_task(send_email_notification, contact_dict)

        return {
            "message": "Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.",
            "contact_id": str(result.inserted_id)
        }

    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Error al procesar tu mensaje. Por favor, intenta de nuevo.")

@router.get("/contacts")
async def get_contacts():
    """
    Get all contact form submissions (for admin use)
    """
    try:
        contacts = await db.contacts.find().sort('created_at', -1).to_list(100)
        
        # Convert ObjectId to string and format response
        for contact in contacts:
            contact['id'] = str(contact.pop('_id'))
        
        return contacts

    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Error al obtener mensajes")