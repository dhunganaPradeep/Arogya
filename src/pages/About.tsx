
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/components/LanguageProvider";
import { Leaf } from "lucide-react";

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

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-herb-500" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{t("about.title")}</h1>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p>{t("about.description")}</p>

            {language === "en" ? (
              <>
                <h2>Our Mission</h2>
                <p>
                  At Arogya, we are dedicated to documenting, preserving, and sharing knowledge about Nepal's incredibly diverse medicinal herb heritage. 
                  With more than 500 medicinal plants that grow across Nepal's varied ecological zones, from the tropical Terai to the alpine Himalayas, 
                  our aim is to create the most comprehensive and accessible resource on these valuable natural treasures.
                </p>
                
                <h2>About Nepal's Herbal Heritage</h2>
                <p>
                  Nepal's geographical diversity creates unique microclimates that foster a remarkable variety of medicinal plants. 
                  These herbs have been used for centuries in traditional medicine systems like Ayurveda, and contain valuable compounds 
                  with proven therapeutic effects. Our documentation helps preserve this traditional knowledge while making it accessible 
                  to researchers, practitioners, and the general public.
                </p>
                
                <h2>How We Document</h2>
                <p>
                  Each herb in our collection is carefully researched and documented with accurate scientific information, 
                  traditional knowledge, and practical applications. We work with botanists, traditional medicine practitioners, 
                  and local communities to ensure our information is both scientifically sound and culturally relevant.
                </p>
                
                <h2>Credit and Attribution</h2>
                <p>
                  This project was created and is maintained by <a href="https://dhunganapradip.com.np" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-primary">Pradip Dhungana</a>, 
                  who has dedicated significant time to researching and documenting Nepal's medicinal herbs.
                </p>
              </>
            ) : (
              <>
                <h2>हाम्रो उद्देश्य</h2>
                <p>
                  आरोग्यमा, हामी नेपालको अत्यन्तै विविधतापूर्ण औषधीय जडीबुटी सम्पदाको बारेमा ज्ञानको अभिलेखन, संरक्षण र साझेदारी गर्न समर्पित छौं।
                  नेपालको विविध पारिस्थितिक क्षेत्रहरूमा, उष्ण तराईदेखि अल्पाइन हिमालयसम्म बढ्ने ५०० भन्दा बढी औषधीय बिरुवाहरूसँग,
                  हाम्रो लक्ष्य यी मूल्यवान प्राकृतिक खजानाहरूमा सबैभन्दा व्यापक र पहुँचयोग्य स्रोत सिर्जना गर्नु हो।
                </p>
                
                <h2>नेपालको जडीबुटी सम्पदाको बारेमा</h2>
                <p>
                  नेपालको भौगोलिक विविधताले अद्वितीय सूक्ष्म जलवायु सिर्जना गर्दछ जसले औषधीय बिरुवाहरूको उल्लेखनीय विविधतालाई बढावा दिन्छ।
                  यी जडीबुटीहरू आयुर्वेद जस्ता परम्परागत औषधि प्रणालीहरूमा शताब्दीयौं देखि प्रयोग हुँदै आएका छन्, र प्रमाणित औषधीय प्रभावहरू भएका
                  मूल्यवान यौगिकहरू समावेश गर्दछन्। हाम्रो दस्तावेजीकरणले यस परम्परागत ज्ञानलाई संरक्षण गर्न मद्दत गर्दछ जबकि यसलाई
                  अनुसन्धानकर्ता, अभ्यासकर्ता, र सामान्य जनताको लागि पहुँचयोग्य बनाउँछ।
                </p>
                
                <h2>हामी कसरी अभिलेखन गर्छौं</h2>
                <p>
                  हाम्रो संग्रहमा प्रत्येक जडीबुटी सावधानीपूर्वक अनुसन्धान र सटीक वैज्ञानिक जानकारी, परम्परागत ज्ञान, र व्यावहारिक अनुप्रयोगहरूसँग
                  अभिलेखन गरिएको छ। हामी हाम्रो जानकारी वैज्ञानिक रूपमा ध्वनि र सांस्कृतिक रूपमा सान्दर्भिक दुवै छ भन्ने सुनिश्चित गर्न
                  वनस्पतिशास्त्री, परम्परागत औषधि अभ्यासकर्ता, र स्थानीय समुदायहरूसँग काम गर्छौं।
                </p>
                
                <h2>श्रेय र श्रद्धाञ्जली</h2>
                <p>
                  यो परियोजना <a href="https://dhunganapradip.com.np" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:text-primary">प्रदीप ढुंगाना</a> द्वारा सिर्जना गरिएको थियो र कायम राखिएको छ,
                  जसले नेपालका औषधीय जडीबुटीहरूको अनुसन्धान र दस्तावेजीकरणमा महत्त्वपूर्ण समय समर्पित गरेका छन्।
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
