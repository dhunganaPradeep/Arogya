
import { useLanguage } from "@/components/LanguageProvider";
import { Link } from "react-router-dom";
import { medicinalUsesData } from "@/data/herbs";
import { Card } from "@/components/ui/card";

const HerbCategoriesSection = () => {
  const { language } = useLanguage();

  
  const mainCategories = medicinalUsesData.slice(0, 6);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          {language === "en" ? "Browse By Medicinal Properties" : "औषधीय गुणहरू अनुसार ब्राउज गर्नुहोस्"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "en"
            ? "Discover herbs based on their therapeutic applications and healing properties"
            : "तिनीहरूको चिकित्सकीय अनुप्रयोगहरू र उपचार गुणहरूको आधारमा जडीबुटीहरू पत्ता लगाउनुहोस्"}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {mainCategories.map(category => (
          <Link 
            key={category.id} 
            to={`/herbs?use=${category.id}`} 
            className="group"
          >
            <Card className="overflow-hidden h-full flex flex-col items-center justify-center p-6 text-center hover:border-herb-500 transition-all">
              <div className="w-16 h-16 bg-herb-100 dark:bg-herb-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-herb-200 dark:group-hover:bg-herb-700 transition-all">
                <span className="text-2xl">{getCategoryEmoji(category.id)}</span>
              </div>
              <h3 className="font-medium text-sm">{category.name[language]}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};


const getCategoryEmoji = (categoryId: string): string => {
  const emojiMap: Record<string, string> = {
    'respiratory': '🫁',
    'digestive': '�胃',
    'skin': '🧴',
    'nervous-system': '🧠',
    'cardiovascular': '❤️',
    'immune': '🛡️',
    'pain-relief': '💊',
    'anti-inflammatory': '🔥',
    'urinary': '🚽',
    'reproductive': '🔄'
  };
  
  return emojiMap[categoryId] || '🌿';
};

export default HerbCategoriesSection;
