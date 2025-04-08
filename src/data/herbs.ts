export interface Herb {
  id: string;
  name: {
    en: string;
    ne: string;
  };
  scientificName: string;
  description: {
    en: string;
    ne: string;
  };
  shortDescription: {
    en: string;
    ne: string;
  };
  images: string[];
  regions: Region[];
  medicinalUses: MedicinalUse[];
  tags: string[];
  featured?: boolean;
}

export type Region = 
  | "himalayas"
  | "high-mountains"
  | "mid-hills"
  | "siwaliks"
  | "terai";

export type MedicinalUse = 
  | "respiratory"
  | "digestive"
  | "skin"
  | "nervous-system"
  | "cardiovascular"
  | "immune"
  | "pain-relief"
  | "anti-inflammatory"
  | "urinary"
  | "reproductive";

export interface HerbDetails extends Herb {
  traditionalUses?: {
    en: string;
    ne: string;
  };
  modernResearch?: {
    en: string;
    ne: string;
  };
  ecologicalStatus?: {
    en: string;
    ne: string;
  };
  culturalSignificance?: {
    en: string;
    ne: string;
  };
  collectionMethod?: {
    en: string;
    ne: string;
  };
  preparation?: {
    en: string;
    ne: string;
  };
  contraindications?: {
    en: string;
    ne: string;
  };
  chemistry?: {
    en: string;
    ne: string;
  };
  sustainabilityPractices?: {
    en: string;
    ne: string;
  };
  globalMarket?: {
    en: string;
    ne: string;
  };
  references?: {
    en: string;
    ne: string;
  }[];
  family?: {
    en: string;
    ne: string;
  };
  lifecycle?: {
    en: string;
    ne: string;
  };
  localNames?: {
    language: string;
    name: string;
    translation: {
      en: string;
      ne: string;
    };
  }[];
  haverstingGuidelines?: {
    en: string;
    ne: string;
  };
  nutritionalValue?: {
    en: string;
    ne: string;
  };
}

export const regionsData = [
  { id: "himalayas", name: { en: "Himalayas", ne: "हिमालय" }, description: { en: "The highest mountain range with alpine climate.", ne: "अल्पाइन जलवायु सहितको सबैभन्दा उच्च पर्वत श्रृंखला।" } },
  { id: "high-mountains", name: { en: "High Mountains", ne: "उच्च पहाड" }, description: { en: "Elevated mountainous regions with cool temperate climate.", ne: "शीतोष्ण जलवायु भएको उच्च पहाडी क्षेत्रहरू।" } },
  { id: "mid-hills", name: { en: "Mid-Hills", ne: "मध्य पहाड" }, description: { en: "Middle altitude hills with temperate climate.", ne: "समशीतोष्ण जलवायु भएको मध्य उचाइको पहाडहरू।" } },
  { id: "siwaliks", name: { en: "Siwaliks", ne: "शिवालिक" }, description: { en: "Foothills of the Himalayan range with subtropical climate.", ne: "उपोष्ण जलवायु भएको हिमालय श्रृंखलाको फुटहिल्स।" } },
  { id: "terai", name: { en: "Terai", ne: "तराई" }, description: { en: "Low-lying plains with tropical climate.", ne: "उष्ण जलवायु भएको निम्न भूमि।" } }
];

export const medicinalUsesData = [
  { id: "respiratory", name: { en: "Respiratory System", ne: "श्वासप्रश्वास प्रणाली" } },
  { id: "digestive", name: { en: "Digestive System", ne: "पाचन प्रणाली" } },
  { id: "skin", name: { en: "Skin Conditions", ne: "छालाका अवस्थाहरू" } },
  { id: "nervous-system", name: { en: "Nervous System", ne: "स्नायु प्रणाली" } },
  { id: "cardiovascular", name: { en: "Cardiovascular System", ne: "हृदय प्रणाली" } },
  { id: "immune", name: { en: "Immune System", ne: "प्रतिरक्षा प्रणाली" } },
  { id: "pain-relief", name: { en: "Pain Relief", ne: "दुखाई राहत" } },
  { id: "anti-inflammatory", name: { en: "Anti-inflammatory", ne: "सूजन विरोधी" } },
  { id: "urinary", name: { en: "Urinary System", ne: "मूत्र प्रणाली" } },
  { id: "reproductive", name: { en: "Reproductive System", ne: "प्रजनन प्रणाली" } }
];