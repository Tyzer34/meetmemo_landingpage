export type Locale = 'en' | 'nl' | 'fr';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
      appStore: string;
    };
  };
  socialProof: {
    meetingsCaptured: string;
    hoursTranscribed: string;
    trustedProfessionals: string;
  };
  nav: {
    useCases: string;
    pricing: string;
    about: string;
    scheduleDemo: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    hero: {
      title: 'Goodbye to Manual Note Taking, Let AI Take Over',
      subtitle:
        "Transform your team's meetings with MeetMemo.ai. Get automated notes, AI-generated summaries, seamless task management, and a centralized knowledge hub that ensures every conversation drives results.",
      cta: {
        primary: 'Start Capturing Every Detail — Free',
        secondary: 'See How It Works',
        appStore: 'Get the iOS App — Free',
      },
    },
    socialProof: {
      meetingsCaptured: '10,000+ meetings captured',
      hoursTranscribed: '25,000+ hours transcribed',
      trustedProfessionals: 'Trusted by 500+ professionals',
    },
    nav: {
      useCases: 'Use Cases',
      pricing: 'Pricing',
      about: 'About',
      scheduleDemo: 'Schedule a Demo',
    },
  },
  nl: {
    hero: {
      title: 'Stop met Handmatig Notities Maken, Laat AI het Overnemen',
      subtitle:
        'Transformeer de vergaderingen van je team met MeetMemo.ai. Krijg automatische notities, AI-gegenereerde samenvattingen, naadloos taakbeheer en een gecentraliseerde kennisbank die ervoor zorgt dat elk gesprek resultaat oplevert.',
      cta: {
        primary: 'Begin Elk Detail Vast te Leggen — Gratis',
        secondary: 'Bekijk Hoe Het Werkt',
        appStore: 'Download de iOS App — Gratis',
      },
    },
    socialProof: {
      meetingsCaptured: '10.000+ vergaderingen vastgelegd',
      hoursTranscribed: '25.000+ uur getranscribeerd',
      trustedProfessionals: 'Vertrouwd door 500+ professionals',
    },
    nav: {
      useCases: 'Toepassingen',
      pricing: 'Prijzen',
      about: 'Over Ons',
      scheduleDemo: 'Demo Plannen',
    },
  },
  fr: {
    hero: {
      title: "Fini les Prises de Notes Manuelles, Laissez l'IA Prendre le Relais",
      subtitle:
        "Transformez les réunions de votre équipe avec MeetMemo.ai. Obtenez des notes automatiques, des résumés générés par l'IA, une gestion fluide des tâches et un hub de connaissances centralisé qui garantit que chaque conversation génère des résultats.",
      cta: {
        primary: 'Commencez à Capturer Chaque Détail — Gratuit',
        secondary: 'Découvrez Comment Ça Marche',
        appStore: "Téléchargez l'App iOS — Gratuit",
      },
    },
    socialProof: {
      meetingsCaptured: '10 000+ réunions capturées',
      hoursTranscribed: '25 000+ heures transcrites',
      trustedProfessionals: 'Approuvé par 500+ professionnels',
    },
    nav: {
      useCases: "Cas d'Usage",
      pricing: 'Tarifs',
      about: 'À Propos',
      scheduleDemo: 'Planifier une Démo',
    },
  },
};

export const getTranslations = (locale: Locale = 'en'): Translations => {
  return translations[locale] || translations.en;
};
