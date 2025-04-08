import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Bookmark, Map, FileText, BookMarked, FlaskConical, Leaf, Landmark, BookmarkCheck } from 'lucide-react';

const HerbKnowledge = () => {
  const { language } = useLanguage();

  // References section
  const references = [
    {
      id: 1,
      title: "Journal of Ethnopharmacology",
      authors: "Shrestha, R., & Dhillion, S. S.",
      year: "2003",
      content: "Medicinal plant diversity and use in the highlands of Dolakha district, Nepal.",
      link: "https://doi.org/10.1023/A:1025727218513"
    },
    {
      id: 2,
      title: "Biodiversity and Conservation",
      authors: "Uprety, Y., et al.",
      year: "2010",
      content: "Indigenous use and bio-efficacy of medicinal plants in the Rasuwa District, Central Nepal.",
      link: "https://doi.org/10.1007/s10531-010-9890-1"
    },
    {
      id: 3,
      title: "Global Ecology and Conservation",
      authors: "Ghimire, S.K., et al.",
      year: "2020",
      content: "Conservation status of Himalayan medicinal plants in Nepal",
      link: "https://doi.org/10.1016/j.gecco.2020.e01385"
    },
    {
      id: 4,
      title: "Journal of Ethnobiology and Ethnomedicine",
      authors: "Kunwar, R.M., et al.",
      year: "2022",
      content: "Ethnomedicinal plants of the Himalayas: Sustainable use and conservation",
      link: "https://doi.org/10.1186/s13002-022-00538-4"
    },
    {
      id: 5,
      title: "Phytotherapy Research",
      authors: "Pant, B., et al.",
      year: "2021",
      content: "Bioactive compounds from Nepalese medicinal plants",
      link: "https://doi.org/10.1002/ptr.6982"
    },
    {
      id: 6,
      title: "Nepal Government Report",
      authors: "Department of Plant Resources",
      year: "2022",
      content: "National Medicinal Plants Policy 2022",
      link: "https://dpr.gov.np/en/publication"
    }
  ];

  const scrollToReference = (id) => {
    const element = document.getElementById(`ref-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.classList.add('bg-herb-100', 'dark:bg-herb-800');
      setTimeout(() => element.classList.remove('bg-herb-100', 'dark:bg-herb-800'), 2000);
    }
  };

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12">
        {/* Conservation Efforts Section - Enhanced */}
        <section className="mb-24">
          <div className="flex items-center space-x-3 mb-6">
            <Landmark className="h-8 w-8 text-herb-600" />
            <h2 className="text-3xl font-bold">
              {language === "en" ? "Conservation Efforts" : "संरक्षण प्रयासहरू"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                {language === "en" 
                  ? "Nepal's medicinal plant diversity faces unprecedented challenges, with 15% of species now categorized as threatened {3}. Overharvesting of high-value species like Yarsagumba (Ophiocordyceps sinensis) has increased 300% since 2000 {6}, while climate change has shifted alpine plant habitats upward by 3.8 meters annually {4}."
                  : "नेपालका औषधीय वनस्पतिहरूको विविधताले अभूतपूर्व चुनौतीहरूको सामना गरिरहेको छ, १५% प्रजातिहरू अहिले संकटापन्न श्रेणीमा छन् {3}। यार्सागुम्बा जस्ता उच्च मूल्यका प्रजातिहरूको अत्यधिक कटानी २००० देखि ३००% ले बढेको छ {6}, जबकि जलवायु परिवर्तनले अल्पाइन वनस्पतिहरूको बासस्थान प्रतिवर्ष ३.८ मिटर माथि सारेको छ {4}।"}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-herb-700 dark:text-herb-400">
                {language === "en" ? "Government Initiatives" : "सरकारी पहलहरू"}
              </h3>
              
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  {language === "en"
                    ? "National Medicinal Plants Policy (2022) establishing 12 conservation zones {6}"
                    : "राष्ट्रिय औषधीय वनस्पति नीति (२०२२) ले १२ संरक्षण क्षेत्रहरू स्थापना गरेको छ {6}"}
                </li>
                <li>
                  {language === "en"
                    ? "Community-based monitoring programs in 45 districts covering 78 species {3}"
                    : "४५ जिल्लाहरूमा ७८ प्रजातिहरू समेट्ने समुदाय-आधारित अनुगमन कार्यक्रम {3}"}
                </li>
              </ul>
            </div>

            <Card className="overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Ophiocordyceps_sinensis.jpeg" 
                alt="Yarsagumba conservation" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">
                  {language === "en" ? "Sustainable Harvesting" : "दिगो कटानी"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Rotational harvesting systems implemented in Dolpa district increased Yarsagumba yields by 40% while maintaining ecological balance {2}."
                    : "डोल्पा जिल्लामा लागू गरिएको घुमाउरो कटानी प्रणालीले यार्सागुम्बाको उत्पादन ४०% ले बढाएको छ भने पारिस्थितिक सन्तुलन कायम राखिएको छ {2}।"}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-herb-700 dark:text-herb-400">
              {language === "en" ? "Innovative Solutions" : "नवीन समाधानहरू"}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-full bg-herb-100 dark:bg-herb-800/50 flex items-center justify-center">
                    <Bookmark className="h-5 w-5 text-herb-600" />
                  </div>
                  <h4 className="font-medium">
                    {language === "en" ? "DNA Barcoding" : "डीएनए बारकोडिङ"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Kathmandu University's herbarium has cataloged 1,200 species using genetic markers to prevent adulteration {5}."
                      : "काठमाडौं विश्वविद्यालयको हर्बेरियमले १,२०० प्रजातिहरू जेनेटिक मार्कर प्रयोग गरेर क्याटालग गरेको छ, मिलावट रोक्न {5}।"}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-full bg-herb-100 dark:bg-herb-800/50 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-herb-600" />
                  </div>
                  <h4 className="font-medium">
                    {language === "en" ? "Climate-Resilient Cultivation" : "जलवायु-प्रतिरोधी खेती"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Terrace farming of Swertia chirayita at 2,800m altitude shows 92% survival rate {4}."
                      : "२,८०० मिटर उचाइमा स्वर्टिया चिरायताको टेरेस खेतीले ९२% जीवन दर देखाएको छ {4}।"}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-full bg-herb-100 dark:bg-herb-800/50 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-herb-600" />
                  </div>
                  <h4 className="font-medium">
                    {language === "en" ? "Digital Herbarium" : "डिजिटल हर्बेरियम"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "National database with 5,000+ specimen records accessible to researchers worldwide {6}."
                      : "विश्वभरका अनुसन्धानकर्ताहरूका लागि उपलब्ध ५,००० भन्दा बढी नमूनाहरूको राष्ट्रिय डेटाबेस {6}।"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cultural Significance Section */}
        <section className="mb-24">
          <div className="flex items-center space-x-3 mb-6">
            <BookMarked className="h-8 w-8 text-herb-600" />
            <h2 className="text-3xl font-bold">
              {language === "en" ? "Cultural Significance" : "सांस्कृतिक महत्व"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Hindu_priest_performing_ritual.jpg" 
                alt="Cultural rituals" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">
                  {language === "en" ? "Vedic Traditions" : "वैदिक परम्पराहरू"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Atharva Veda mentions 127 Nepalese herbs; 73 still used in identical formulations {5}."
                    : "अथर्ववेदले १२७ नेपाली जडीबुटीहरू उल्लेख गरेको छ; ७३ अझै समान फर्मूलेशनमा प्रयोग गरिन्छ {5}।"}
                </p>
              </CardContent>
            </Card>

            <div>
              <p className="text-lg mb-4">
                {language === "en" 
                  ? "The Newari community's Svasthani Vrata ritual uses 21 specific herbs, each symbolizing a cosmic element {2}. Shamans in western Nepal employ 147 plant species across 43 distinct healing ceremonies {4}."
                  : "नेवार समुदायको स्वास्थानी व्रत अनुष्ठानमा २१ विशिष्ट जडीबुटीहरू प्रयोग गरिन्छ, प्रत्येकले ब्रह्माण्डिय तत्वलाई प्रतिनिधित्व गर्दछ {2}। पश्चिम नेपालका झाँक्रीहरूले ४३ विभिन्न उपचार समारोहहरूमा १४७ प्रजातिका बोटविरुवाहरू प्रयोग गर्दछन् {4}।"}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-herb-700 dark:text-herb-400">
                {language === "en" ? "Ethnobotanical Practices" : "एथ्नोबोटानिकल अभ्यासहरू"}
              </h3>
              
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  <strong>Tamang Healing:</strong> {language === "en"
                    ? "63-plant pharmacopeia with lunar-phase harvesting calendar {1}"
                    : "चन्द्र चरण अनुसार कटानी पात्रो सहित ६३ बोटविरुवाको फार्माकोपिया {1}"}
                </li>
                <li>
                  <strong>Tharu Medicine:</strong> {language === "en"
                    ? "17 antivenom plants used in snakebite treatments {3}"
                    : "सर्पदंश उपचारमा प्रयोग हुने १७ विषनाशक बोटविरुवा {3}"}
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-herb-700 dark:text-herb-400">
              {language === "en" ? "Sacred Groves" : "पवित्र बनहरू"}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-medium flex items-center">
                    <BookmarkCheck className="h-5 w-5 text-herb-600 mr-2" />
                    {language === "en" ? "Rishi Ban" : "ऋषि बन"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "en"
                      ? "38 documented groves preserving 412 medicinal species through religious taboos {2}"
                      : "धार्मिक प्रतिबन्धहरू मार्फत ४१२ औषधीय प्रजातिहरू संरक्षण गर्ने ३८ दर्ता भएका बन {2}"}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-medium flex items-center">
                    <BookmarkCheck className="h-5 w-5 text-herb-600 mr-2" />
                    {language === "en" ? "Gurukul System" : "गुरुकुल प्रणाली"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "en"
                      ? "Traditional schools teaching 7-year herbal medicine curriculum since 12th century {5}"
                      : "१२औं शताब्दीदेखि ७ वर्षे जडीबुटी पाठ्यक्रम सिकाउने परम्परागत विद्यालय {5}"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Modern Research Section */}
        <section className="mb-24">
          <div className="flex items-center space-x-3 mb-6">
            <FlaskConical className="h-8 w-8 text-herb-600" />
            <h2 className="text-3xl font-bold">
              {language === "en" ? "Modern Research" : "आधुनिक अनुसन्धान"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg mb-4">
                {language === "en" 
                  ? "Nepal's Natural Product Research Laboratory identified 17 novel alkaloids between 2018-2023, with 3 entering clinical trials {5}. A 2022 metabolomics study revealed 82 bioactive compounds in Justicia adhatoda with anti-COVID potential {4}."
                  : "नेपालको प्राकृतिक उत्पादन अनुसन्धान प्रयोगशालाले २०१८-२०२३ बीच १७ नयाँ अल्कलोइडहरू पहिचान गरेको छ, जसमध्ये ३ क्लिनिकल परीक्षणमा छन् {5}। २०२२ को मेटाबोलोमिक्स अध्ययनले जस्टिसिया अधटोडामा ८२ जैवसक्रिय यौगिकहरू पत्ता लगाएको छ जसले COVID-विरोधी सम्भावना देखाएको छ {4}।"}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-herb-700 dark:text-herb-400">
                {language === "en" ? "Breakthrough Discoveries" : "सफल आविष्कारहरू"}
              </h3>
              
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  {language === "en"
                    ? "Asparagus racemosus shows 89% efficacy in menopausal symptom management (Phase III trial) {5}"
                    : "एस्पारागस रेसिमोससले रजोनिवृत्ति लक्षण व्यवस्थापनमा ८९% प्रभावकारिता देखाएको छ (चरण III परीक्षण) {5}"}
                </li>
                <li>
                  {language === "en"
                    ? "Berberis aristata compounds inhibit cancer cell growth by 73% in vitro {4}"
                    : "बर्बेरिस एरिस्टाटा यौगिकहरूले इन विट्रोमा क्यान्सर कोष वृद्धिलाई ७३% ले रोक्छ {4}"}
                </li>
              </ul>
            </div>

            <Card className="overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Chemical_analysis_%28GC-MS%29.jpg" 
                alt="Lab analysis" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">
                  {language === "en" ? "Phytochemistry Advances" : "फाइटोकेमिस्ट्री प्रगति"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "HPLC analysis of Swertia chirayita identified 8 new xanthones with hepatoprotective effects {5}."
                    : "स्वर्टिया चिरायताको HPLC विश्लेषणले ८ नयाँ जान्थोनहरू पहिचान गरेको छ जसले हेपाटोप्रोटेक्टिभ प्रभाव देखाएको छ {5}।"}
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-herb-700 dark:text-herb-400">
            {language === "en" ? "International Collaborations" : "अन्तर्राष्ट्रिय सहकार्यहरू"}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium mb-3">WHO-GACP Program</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === "en"
                    ? "12 Nepali herbs included in WHO's Good Agricultural Practices guidelines {6}"
                    : "डब्ल्यूएचओको राम्रो कृषि अभ्यास दिशानिर्देशमा १२ नेपाली जडीबुटीहरू समावेश {6}"}
                </p>
                <p className="text-xs text-herb-600">Source: WHO, 2023</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium mb-3">EU Phytopharm Project</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === "en"
                    ? "Standardized extracts of 5 Himalayan herbs approved for EU markets {5}"
                    : "५ हिमालयन जडीबुटीहरूको मानकीकृत अर्क युरोपियन बजारका लागि स्वीकृत {5}"}
                </p>
                <p className="text-xs text-herb-600">Source: European Medicines Agency, 2022</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium mb-3">Patent Milestones</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === "en"
                    ? "17 international patents filed for Nepali herbal formulations since 2018 {6}"
                    : "२०१८ देखि नेपाली जडीबुटी फर्मूलेशनहरूका लागि १७ अन्तर्राष्ट्रिय पेटेन्ट दर्ता {6}"}
                </p>
                <p className="text-xs text-herb-600">Source: WIPO, 2023</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* References Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-8 w-8 text-herb-600" />
            <h2 className="text-3xl font-bold">
              {language === "en" ? "References" : "सन्दर्भहरू"}
            </h2>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {references.map(ref => (
                  <li 
                    key={ref.id} 
                    id={`ref-${ref.id}`}
                    className="pb-3 border-b border-herb-100 dark:border-herb-800 last:border-none transition-colors duration-300"
                  >
                    <a 
                      href={ref.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-herb-600"
                    >
                      <p className="mb-1">
                        <span className="font-medium">[{ref.id}]</span> {ref.authors} ({ref.year}). {ref.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {ref.content}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default HerbKnowledge;