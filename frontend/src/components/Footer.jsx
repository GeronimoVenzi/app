import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: Instagram, href: contactInfo.social.instagram, label: 'Instagram' },
    { Icon: Facebook, href: contactInfo.social.facebook, label: 'Facebook' },
    { Icon: Youtube, href: contactInfo.social.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-red-600 mb-4 tracking-wider">
              CINEGATA
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creando experiencias audiovisuales únicas que trascienden la pantalla.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center text-gray-400 hover:text-red-500 transition-colors group"
              >
                <Mail size={18} className="mr-3 group-hover:scale-110 transition-transform" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center text-gray-400 hover:text-red-500 transition-colors group"
              >
                <Phone size={18} className="mr-3 group-hover:scale-110 transition-transform" />
                {contactInfo.phone}
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-950/30 transition-all border border-zinc-800 hover:border-red-900"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-zinc-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} CINEGATA. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;