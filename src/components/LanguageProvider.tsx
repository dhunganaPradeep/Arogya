
import { createContext, useContext, useState } from "react";

type Language = "en" | "ne";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: Record<string, Record<Language, string>> = {
  "site.name": {
    en: "Arogya",
    ne: "आरोग्य",
  },
  "site.tagline": {
    en: "Nepal's Medicinal Herb Treasury",
    ne: "नेपालको औषधीय जडीबुटी भण्डार",
  },
  "nav.home": {
    en: "Home",
    ne: "गृहपृष्ठ",
  },
  "nav.herbs": {
    en: "Herbs",
    ne: "जडीबुटी",
  },
  "nav.knowledge": {
    en: "Knowledge Base",
    ne: "ज्ञानकोष",
  },
  "nav.about": {
    en: "About",
    ne: "हाम्रो बारेमा",
  },
  "search.placeholder": {
    en: "Search herbs...",
    ne: "जडीबुटी खोज्नुहोस्...",
  },
  "filter.regions": {
    en: "Regions",
    ne: "क्षेत्रहरू",
  },
  "filter.uses": {
    en: "Medicinal Uses",
    ne: "औषधीय प्रयोगहरू",
  },
  "filter.clear": {
    en: "Clear Filters",
    ne: "फिल्टरहरू हटाउनुहोस्",
  },
  "herb.details": {
    en: "View Details",
    ne: "विवरण हेर्नुहोस्",
  },
  "herb.found-in": {
    en: "Found in",
    ne: "पाइने ठाउँ",
  },
  "herb.medicinal-uses": {
    en: "Medicinal Uses",
    ne: "औषधीय प्रयोगहरू",
  },
  "about.title": {
    en: "About Arogya",
    ne: "आरोग्यको बारेमा",
  },
  "about.description": {
    en: "Arogya is a comprehensive collection of medicinal herbs found in Nepal. Our mission is to document and preserve knowledge about these valuable natural resources.",
    ne: "आरोग्य नेपालमा पाइने औषधीय जडीबुटीहरूको व्यापक संग्रह हो। हाम्रो उद्देश्य यी मूल्यवान प्राकृतिक संसाधनहरूको बारेमा ज्ञानलाई संलेख र संरक्षण गर्नु हो।",
  },
  "about.credit": {
    en: "Created by",
    ne: "द्वारा निर्मित",
  },
  "home.featured": {
    en: "Featured Herbs",
    ne: "विशेष जडीबुटीहरू",
  },
  "home.browse": {
    en: "Browse All Herbs",
    ne: "सबै जडीबुटीहरू हेर्नुहोस्",
  },
  "home.intro": {
    en: "Discover Nepal's rich botanical heritage with our extensive collection of medicinal herbs. Each plant has been carefully documented with its traditional and medicinal uses.",
    ne: "हाम्रो विस्तृत औषधीय जडीबुटी संग्रहको साथ नेपालको समृद्ध वनस्पति सम्पदा पत्ता लगाउनुहोस्। प्रत्येक बोटविरुवालाई यसको परम्परागत र औषधीय प्रयोगहरूको साथ होशियारीपूर्वक दस्तावेज गरिएको छ।",
  },
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  t: (key: string) => key,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || defaultLanguage
  );

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return translations[key]?.en || key;
  };

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem("language", language);
      setLanguage(language);
    },
    t,
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);
  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
