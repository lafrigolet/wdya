
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          learn_react: 'Learn React',
          connect: 'Connect',
          get_in_touch: 'Get in Touch',
          get_in_touch_description: 'We’re here to help you with your inquiries.',
          email_title: 'Email',
          email_description: 'Reach us anytime at our support email address.',
          phone_title: 'Phone',
          phone_description: 'Call us for immediate assistance or inquiries.',
          office_title: 'Office',
          office_description: 'Visit us at our headquarters for personalized support.'
        }
      },
      es: {
        translation: {
          learn_react: 'Aprende React',
          connect: 'Conectar',
          get_in_touch: 'Ponte en contacto',
          get_in_touch_description: 'Estamos aquí para ayudarte con tus consultas.',
          email_title: 'Correo electrónico',
          email_description: 'Contáctanos en cualquier momento a nuestro correo electrónico de soporte.',
          phone_title: 'Teléfono',
          phone_description: 'Llámanos para asistencia inmediata o consultas.',
          office_title: 'Oficina',
          office_description: 'Visítanos en nuestra sede para obtener asistencia personalizada.'
        }
      }
    }
  });

export default i18n;
