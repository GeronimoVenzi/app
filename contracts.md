# API Contracts - CINEGATA Landing Page

## Backend Endpoints

### 1. POST /api/contact
**Purpose:** Receive contact form submissions and send email notifications

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response (Success - 201):**
```json
{
  "message": "Mensaje enviado exitosamente",
  "contact_id": "string (MongoDB ObjectId)"
}
```

**Response (Error - 400):**
```json
{
  "detail": "Error message"
}
```

### 2. GET /api/contacts (Optional - Admin)
**Purpose:** Retrieve all contact form submissions

**Response (Success - 200):**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "subject": "string",
    "message": "string",
    "created_at": "datetime"
  }
]
```

## MongoDB Schema

### Collection: contacts
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  created_at: DateTime,
  status: String (default: "new") // new, read, responded
}
```

## Frontend Integration

### Mock Data to Remove:
- Form submission currently shows toast with mock success

### Real Implementation:
1. Remove mock toast response in Home.jsx handleSubmit
2. Add axios POST request to /api/contact
3. Handle loading state during submission
4. Show success/error messages based on API response
5. Clear form only on successful submission

## Environment Variables Needed

```
# Backend .env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=info@cinegata.com
```
