import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "AL" | "DE";

type TranslationDict = {
  // Navbar
  home: string;
  services: string;
  land: string;
  news: string;
  about: string;
  contact: string;
  login: string;
  register: string;
  dashboard: string;
  logout: string;
  // Toka page
  mapTitle: string;
  searchPlaceholder: string;
  filters: string;
  hectares: string;
  monthlyPrice: string;
  interactiveMap: string;
  propertyFound: string;
  invest: string;
  price: string;
  area: string;
  location: string;
  viewDetails: string;
  closeSheet: string;
  propertyTitle: string;
};

const translations: Record<Language, TranslationDict> = {
  AL: {
    home: "Ballina",
    services: "Shërbimet",
    land: "Toka",
    news: "Lajme",
    about: "Rreth Nesh",
    contact: "Kontakt",
    login: "Kyçu",
    register: "Regjistrohu",
    dashboard: "Pulti",
    logout: "Çkyçu",
    mapTitle: "Harta e Pronave",
    searchPlaceholder: "Kërko sipas komunës...",
    filters: "Filtrat",
    hectares: "Hektarë",
    monthlyPrice: "Çmimi Mujor",
    interactiveMap: "Harta Interaktive",
    propertyFound: "prona të gjetura",
    invest: "Investo",
    price: "Çmimi",
    area: "Sipërfaqja",
    location: "Lokacioni",
    viewDetails: "Shiko Detajet",
    closeSheet: "Mbyll",
    propertyTitle: "Prona",
  },
  DE: {
    home: "Startseite",
    services: "Dienstleistungen",
    land: "Immobilien",
    news: "Nachrichten",
    about: "Über uns",
    contact: "Kontakt",
    login: "Anmelden",
    register: "Registrieren",
    dashboard: "Dashboard",
    logout: "Abmelden",
    mapTitle: "Immobilienkarte",
    searchPlaceholder: "Nach Gemeinde suchen...",
    filters: "Filter",
    hectares: "Hektar",
    monthlyPrice: "Monatspreis",
    interactiveMap: "Interaktive Karte",
    propertyFound: "Immobilien gefunden",
    invest: "Investieren",
    price: "Preis",
    area: "Fläche",
    location: "Standort",
    viewDetails: "Details anzeigen",
    closeSheet: "Schließen",
    propertyTitle: "Immobilie",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("kk-lang");
    return (stored === "AL" || stored === "DE") ? stored : "AL";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("kk-lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
