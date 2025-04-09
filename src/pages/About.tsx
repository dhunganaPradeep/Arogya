import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { Leaf, Info, BookOpen, FileText, User } from "lucide-react";

const About = () => {
  const { language, t } = useLanguage();

  // SEO improvements
  useEffect(() => {
    document.title = `${t("nav.about")} - ${t("site.name")}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn more about Arogya, our mission to document Nepal's medicinal herbs, and the team behind the project.");
    }
  }, [t]);

  const renderSectionIcon = (icon) => {
    const IconComponent = icon;
    return <IconComponent className="h-6 w-6 text-herb-500 mr-2" />;
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-herb-50 to-white dark:from-green-900 dark:to-green-900">
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 rounded-full bg-herb-100 dark:bg-herb-900 mb-4">
                <Leaf className="h-12 w-12 text-herb-500" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 text-herb-800 dark:text-herb-200">
                {t("about.title")}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("about.description")}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 prose dark:prose-invert max-w-none">
              {language === "en" ? (
                <>
                  <div className="space-y-8">
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(Info)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">Our Mission</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        At Arogya, we are dedicated to documenting, preserving, and sharing knowledge about Nepal's incredibly diverse medicinal herb heritage. 
                        With more than 500 medicinal plants that grow across Nepal's varied ecological zones, from the tropical Terai to the alpine Himalayas, 
                        our aim is to create the most comprehensive and accessible resource on these valuable natural treasures.
                      </p>
                    </section>
                    
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(BookOpen)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">About Nepal's Herbal Heritage</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Nepal's geographical diversity creates unique microclimates that foster a remarkable variety of medicinal plants. 
                        These herbs have been used for centuries in traditional medicine systems like Ayurveda, and contain valuable compounds 
                        with proven therapeutic effects. Our documentation helps preserve this traditional knowledge while making it accessible 
                        to researchers, practitioners, and the general public.
                      </p>
                    </section>
                    
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(FileText)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">How We Document</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Each herb in our collection is carefully researched and documented with accurate scientific information, 
                        traditional knowledge, and practical applications. We work with botanists, traditional medicine practitioners, 
                        and local communities to ensure our information is both scientifically sound and culturally relevant.
                      </p>
                    </section>
                    
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(User)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">Credit and Attribution</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        This project was created and is maintained by <a href="https://dhunganapradip.com.np" target="_blank" rel="noopener noreferrer" className="font-medium text-herb-600 dark:text-herb-400 hover:text-herb-800 dark:hover:text-herb-300 transition-colors underline underline-offset-4">Pradip Dhungana</a>, 
                        who has dedicated significant time to researching and documenting Nepal's medicinal herbs.
                      </p>
                    </section>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-8">
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(Info)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">हाम्रो उद्देश्य</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        आरोग्यमा, हामी नेपालको अत्यन्तै विविधतापूर्ण औषधीय जडीबुटी सम्पदाको बारेमा ज्ञानको अभिलेखन, संरक्षण र साझेदारी गर्न समर्पित छौं।
                        नेपालको विविध पारिस्थितिक क्षेत्रहरूमा, उष्ण तराईदेखि अल्पाइन हिमालयसम्म बढ्ने ५०० भन्दा बढी औषधीय बिरुवाहरूसँग,
                        हाम्रो लक्ष्य यी मूल्यवान प्राकृतिक खजानाहरूमा सबैभन्दा व्यापक र पहुँचयोग्य स्रोत सिर्जना गर्नु हो।
                      </p>
                    </section>
                    
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(BookOpen)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">नेपालको जडीबुटी सम्पदाको बारेमा</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        नेपालको भौगोलिक विविधताले अद्वितीय सूक्ष्म जलवायु सिर्जना गर्दछ जसले औषधीय बिरुवाहरूको उल्लेखनीय विविधतालाई बढावा दिन्छ।
                        यी जडीबुटीहरू आयुर्वेद जस्ता परम्परागत औषधि प्रणालीहरूमा शताब्दीयौं देखि प्रयोग हुँदै आएका छन्, र प्रमाणित औषधीय प्रभावहरू भएका
                        मूल्यवान यौगिकहरू समावेश गर्दछन्। हाम्रो दस्तावेजीकरणले यस परम्परागत ज्ञानलाई संरक्षण गर्न मद्दत गर्दछ जबकि यसलाई
                        अनुसन्धानकर्ता, अभ्यासकर्ता, र सामान्य जनताको लागि पहुँचयोग्य बनाउँछ।
                      </p>
                    </section>
                    
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(FileText)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">हामी कसरी अभिलेखन गर्छौं</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        हाम्रो संग्रहमा प्रत्येक जडीबुटी सावधानीपूर्वक अनुसन्धान र सटीक वैज्ञानिक जानकारी, परम्परागत ज्ञान, र व्यावहारिक अनुप्रयोगहरूसँग
                        अभिलेखन गरिएको छ। हामी हाम्रो जानकारी वैज्ञानिक रूपमा ध्वनि र सांस्कृतिक रूपमा सान्दर्भिक दुवै छ भन्ने सुनिश्चित गर्न
                        वनस्पतिशास्त्री, परम्परागत औषधि अभ्यासकर्ता, र स्थानीय समुदायहरूसँग काम गर्छौं।
                      </p>
                    </section>
                    
                    <section className="border-l-4 border-herb-500 pl-6 py-2">
                      <div className="flex items-center mb-3">
                        {renderSectionIcon(User)}
                        <h2 className="text-2xl font-semibold text-herb-700 dark:text-herb-300 m-0">श्रेय</h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        यो परियोजना <a href="https://dhunganapradip.com.np" target="_blank" rel="noopener noreferrer" className="font-medium text-herb-600 dark:text-herb-400 hover:text-herb-800 dark:hover:text-herb-300 transition-colors underline underline-offset-4">प्रदीप ढुंगाना</a> द्वारा सिर्जना गरिएको थियो र कायम राखिएको छ,
                        जसले नेपालका औषधीय जडीबुटीहरूको अनुसन्धान र दस्तावेजीकरणमा महत्त्वपूर्ण समय समर्पित गरेका छन्।
                      </p>
                    </section>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;