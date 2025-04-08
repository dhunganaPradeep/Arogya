import React from 'react';
import { useLanguage } from './LanguageProvider';
import { homePageData } from '@/data/homePageData';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Leaf, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomeInfoSection = () => {
  const { language } = useLanguage();
  
  return (
    <div className="space-y-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="h-px w-8 bg-herb-400"></div>
          <span className="mx-4 text-herb-500">
            <BookOpen className="h-6 w-6" />
          </span>
          <div className="h-px w-8 bg-herb-400"></div>
        </div>
        <h2 className="text-3xl font-bold mb-4 relative inline-block">
          {language === "en" ? "Learn More About Nepali Herbs" : "नेपाली जडीबुटीको बारेमा थप जान्नुहोस्"}
          <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-herb-500 rounded-full"></div>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          {language === "en" 
            ? "Delve deeper into the world of traditional Nepali herbal medicine and discover the rich heritage of botanical knowledge."
            : "परम्परागत नेपाली जडीबुटी औषधिको संसारमा गहिरो रूपमा डुबुल्की मार्नुहोस् र वनस्पतिक ज्ञानको समृद्ध सम्पदा पत्ता लगाउनुहोस्।"}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {homePageData.detailedInfo.map((section, index) => (
          <div key={index} className="flex flex-col h-full group">
            <div className="relative mb-6 overflow-hidden rounded-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-herb-500/20 to-herb-800/40 opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-herb-300 dark:border-herb-600 rounded-tl-lg z-20"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-herb-300 dark:border-herb-600 rounded-br-lg z-20"></div>
              
              <div className="absolute top-4 right-4 h-10 w-10 bg-herb-600/80 rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                {index === 0 && <Leaf className="h-5 w-5 text-white" />}
                {index === 1 && <BookOpen className="h-5 w-5 text-white" />}
                {index === 2 && <Globe className="h-5 w-5 text-white" />}
              </div>
              
              <img 
                src={`/herb-${index + 1}.jpg`} 
                alt={section.imageAlt[language]} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/api/placeholder/400/300";
                }}
              />
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-herb-800 dark:text-herb-200 mb-3 group-hover:text-herb-600 dark:group-hover:text-herb-400 transition-colors">
                {section.title[language]}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-1">
                {section.content[language]}
              </p>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="self-start text-herb-600 hover:text-herb-700 hover:bg-herb-50 dark:text-herb-400 dark:hover:text-herb-300 dark:hover:bg-herb-900/50 group/btn -ml-2"
                asChild
              >
                <Link to="/herb-knowledge" className="flex items-center">
                  <span>
                    {language === "en" ? "Learn more" : "थप जान्नुहोस्"}
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 overflow-hidden relative rounded-xl bg-gradient-to-br from-herb-100 via-herb-200 to-herb-300 dark:from-herb-900 dark:via-herb-800 dark:to-herb-900">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-herb-400/20 dark:bg-herb-600/20 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-herb-500/10 dark:bg-herb-700/10 rounded-full"></div>
        
        <div className="relative p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <Leaf className="h-10 w-10 text-herb-600 dark:text-herb-400" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {language === "en" ? "Ready to Explore Nepal's Herbal Treasures?" : "नेपालको जडीबुटी खजाना अन्वेषण गर्न तयार हुनुहुन्छ?"}
          </h3>
          
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            {language === "en" 
              ? "Browse our comprehensive database of over 500 medicinal herbs native to Nepal."
              : "नेपालका ५०० भन्दा बढी औषधीय जडीबुटीहरूको हाम्रो विस्तृत डाटाबेस ब्राउज गर्नुहोस्।"}
          </p>
          
          <Button 
            size="lg" 
            className="bg-herb-600 hover:bg-herb-700 text-white shadow-lg hover:shadow-xl transition-all group"
            asChild
          >
            <Link to="/herbs" className="flex items-center">
              {language === "en" ? "Explore All Herbs" : "सबै जडीबुटीहरू अन्वेषण गर्नुहोस्"}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeInfoSection;