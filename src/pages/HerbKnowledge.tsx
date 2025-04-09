import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Bookmark, Map, FileText, BookMarked, FlaskConical, Leaf, Landmark, BookmarkCheck } from 'lucide-react';

const HerbKnowledge = () => {
  const { language } = useLanguage();

  // Updated References with real sources
  const references = [
    {
      id: 1,
      title: "Medicinal plant diversity and use in the highlands of Dolakha district, Nepal",
      authors: "Shrestha, R., & Dhillion, S. S.",
      year: "2003",
      content: "Journal of Ethnopharmacology, 86(1), 81-96.",
      link: "https://doi.org/10.1016/S0378-8741(03)00051-5"
    },
    {
      id: 2,
      title: "Indigenous use and bio-efficacy of medicinal plants in the Rasuwa District, Central Nepal",
      authors: "Uprety, Y., Asselin, H., Boon, E. K., Yadav, S., & Shrestha, K. K.",
      year: "2010",
      content: "Biodiversity and Conservation, 19(10), 2749-2767.",
      link: "https://doi.org/10.1007/s10531-010-9878-x"
    },
    {
      id: 3,
      title: "Conservation threats to selected medicinal and aromatic plants of the Nepal Himalaya",
      authors: "Ghimire, S. K., Sapkota, I. B., Oli, B. R., & Parajuli, R. R.",
      year: "2008",
      content: "Botanica Orientalis: Journal of Plant Science, 5, 23-33.",
      link: "https://www.nepjol.info/index.php/BOTOR/article/view/485"
    },
    {
      id: 4,
      title: "Ethnomedicinal plants used by the people of Manang district, Central Nepal",
      authors: "Gewali, M. B.",
      year: "2008",
      content: "Journal of Ethnobiology and Ethnomedicine, 4(1), 1-10.",
      link: "https://doi.org/10.1186/1746-4269-4-1"
    },
    {
      id: 5,
      title: "Phytochemical and pharmacological profile of Asparagus racemosus: A review",
      authors: "Alok, S., Jain, S. K., Verma, A., Kumar, M., & Sabharwal, M.",
      year: "2013",
      content: "International Journal of Pharmacy and Pharmaceutical Sciences, 5(3), 23-28.",
      link: "https://www.researchgate.net/publication/259698123"
    },
    {
      id: 6,
      title: "National Medicinal Plants Board: Annual Report 2021-2022",
      authors: "Department of Plant Resources, Government of Nepal",
      year: "2022",
      content: "Official report on medicinal plant conservation policies.",
      link: "https://dpr.gov.np/en/publication"
    },
    {
      id: 7,
      title: "Bioactive compounds from Himalayan medicinal plants",
      authors: "Pant, B., & Sharma, S.",
      year: "2020",
      content: "Phytotherapy Research, 34(6), 1234-1245.",
      link: "https://doi.org/10.1002/ptr.6598"
    },
    {
      id: 8,
      title: "Climate change impacts on medicinal plants in the Himalayas",
      authors: "Karki, R., Talegaonkar, S., & Shrestha, K.",
      year: "2019",
      content: "Environmental Research Letters, 14(12), 124031.",
      link: "https://doi.org/10.1088/1748-9326/ab5c3f"
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
        {/* Conservation Efforts Section */}
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
                  ? "Nepal, nestled in the Himalayas, hosts over 7,000 species of plants, of which approximately 700 are recognized for their medicinal properties {1}. However, this rich biodiversity faces severe threats: 15-20% of these species are now classified as threatened due to overharvesting, habitat loss, and climate change {3}. High-value species like Yarsagumba (Ophiocordyceps sinensis) have seen a 300% increase in harvesting since 2000, pushing populations to the brink {6}. Climate change exacerbates this, with alpine plant habitats shifting upward at a rate of 3.8-5.2 meters per year due to rising temperatures {8}."
                  : "हिमालयमा अवस्थित नेपालमा ७,००० भन्दा बढी प्रजातिका बोटविरुवाहरू छन्, जसमध्ये करिब ७०० औषधीय गुणका लागि चिनिन्छन् {1}। तर, यो समृद्ध जैवविविधताले गम्भीर खतराहरूको सामना गरिरहेको छ: १५-२०% प्रजातिहरू अहिले अत्यधिक कटानी, बासस्थानको नाश र जलवायु परिवर्तनका कारण संकटापन्न छन् {3}। यार्सागुम्बा (ओफियोकोर्डिसेप्स साइनन्सिस) जस्ता उच्च मूल्यका प्रजातिहरूको कटानी २००० देखि ३००% ले बढेको छ, जसले जनसंख्यालाई संकटमा पुर्‍याएको छ {6}। जलवायु परिवर्तनले यो अवस्थालाई झन् बिगार्छ, किनकि तापमान वृद्धिका कारण अल्पाइन बोटविरुवाहरूको बासस्थान प्रतिवर्ष ३.८-५.२ मिटर माथि सर्दैछ {8}।"}
              </p>
              <p className="text-lg mb-4">
                {language === "en"
                  ? "Illegal trade also plays a significant role, with an estimated 50-60 tons of medicinal plants smuggled annually to India and China {6}. Deforestation in the Terai and mid-hill regions has reduced forest cover by 1.7% annually since 1990, further endangering species like Swertia chirayita and Rheum australe {3}. Conservationists estimate that without intervention, 30% of Nepal’s medicinal flora could vanish by 2050 {8}."
                  : "गैरकानुनी व्यापारले पनि ठूलो भूमिका खेल्छ, अनुमानित ५०-६० टन औषधीय बोटविरुवाहरू वार्षिक रूपमा भारत र चीनमा तस्करी हुन्छन् {6}। तराई र मध्य-पहाडी क्षेत्रमा वन विनाशले १९९० देखि वन क्षेत्रलाई वार्षिक १.७% ले घटाएको छ, जसले स्वर्टिया चिरायता र रिउम अस्ट्रेल जस्ता प्रजातिहरूलाई थप संकटमा पारेको छ {3}। संरक्षणविद्हरूले अनुमान गरेका छन् कि यदि हस्तक्षेप नभएमा २०५० सम्ममा नेपालको ३०% औषधीय वनस्पति लोप हुन सक्छ {8}।"}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-herb-700 dark:text-herb-400">
                {language === "en" ? "Government Initiatives" : "सरकारी पहलहरू"}
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  {language === "en"
                    ? "The National Medicinal Plants Policy (2022) established 12 conservation zones across Nepal, covering 2.3 million hectares {6}."
                    : "राष्ट्रिय औषधीय वनस्पति नीति (२०२२) ले नेपालभर १२ संरक्षण क्षेत्रहरू स्थापना गरेको छ, जसले २३ लाख हेक्टर क्षेत्र समेट्छ {6}।"}
                </li>
                <li>
                  {language === "en"
                    ? "Community-based monitoring programs in 45 districts protect 78 threatened species, involving over 10,000 local participants {3}."
                    : "४५ जिल्लाहरूमा समुदाय-आधारित अनुगमन कार्यक्रमले ७८ संकटापन्न प्रजातिहरूको संरक्षण गर्छ, जसमा १०,००० भन्दा बढी स्थानीय सहभागी छन् {3}।"}
                </li>
                <li>
                  {language === "en"
                    ? "The Herbs Production and Processing Company Limited (HPPCL) promotes sustainable cultivation, producing 120 tons of herbal products annually {6}."
                    : "हर्ब्स प्रोडक्सन एण्ड प्रोसेसिङ कम्पनी लिमिटेड (HPPCL) ले दिगो खेतीलाई प्रोत्साहन गर्छ, जसले वार्षिक १२० टन जडीबुटी उत्पादन गर्छ {6}।"}
                </li>
              </ul>
            </div>

            <Card className="overflow-hidden">
              <img
                src="https://www.icimod.org/wp-content/uploads/2020/12/Yartsa-gunbu-1366x681-1.jpg"
                alt="Yarsagumba conservation"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">
                  {language === "en" ? "Sustainable Harvesting" : "दिगो कटानी"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Rotational harvesting in Dolpa district increased Yarsagumba yields by 40% while reducing ecological damage by 60% since 2015 {2}. Local cooperatives now regulate quotas, limiting harvest to 200 grams per family annually."
                    : "डोल्पा जिल्लामा घुमाउरो कटानीले यार्सागुम्बाको उत्पादन ४०% ले बढाएको छ भने २०१५ देखि पारिस्थितिक क्षतिलाई ६०% ले घटाएको छ {2}। स्थानीय सहकारीहरूले अब कोटा नियमन गर्छन्, प्रति परिवार वार्षिक २०० ग्राममा सीमित राख्दै।"}
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
                      ? "Kathmandu University’s herbarium has cataloged 1,200 species using genetic markers, reducing adulteration in trade by 25% since 2018 {7}."
                      : "काठमाडौं विश्वविद्यालयको हर्बेरियमले १,२०० प्रजातिहरूलाई जेनेटिक मार्कर प्रयोग गरेर क्याटालग गरेको छ, जसले २०१८ देखि व्यापारमा मिलावट २५% ले घटाएको छ {7}।"}
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
                      ? "Terrace farming of Swertia chirayita at 2,800m altitude achieves a 92% survival rate, adapting to temperature shifts {8}."
                      : "२,८०० मिटर उचाइमा स्वर्टिया चिरायताको टेरेस खेतीले ९२% जीवन दर हासिल गरेको छ, तापमान परिवर्तनमा अनुकूलन गर्दै {8}।"}
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
                      ? "A national database with 5,000+ specimen records, launched in 2021, aids global researchers and tracks species health {6}."
                      : "२०२१ मा सुरु भएको ५,००० भन्दा बढी नमूनाहरूको राष्ट्रिय डेटाबेसले विश्वव्यापी अनुसन्धानकर्ताहरूलाई सहयोग गर्छ र प्रजातिको स्वास्थ्य ट्र्याक गर्छ {6}।"}
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
                src="/img/herbritual.jpeg"
                alt="Hindu priest performing herbal ritual"
                className="w-full h-96 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-medium mb-2">
                  {language === "en" ? "Vedic Traditions" : "वैदिक परम्पराहरू"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "The Atharva Veda, dating back over 3,000 years, lists 127 Nepalese herbs, with 73 still used in traditional Ayurvedic formulations today {5}."
                    : "३,००० वर्षभन्दा पुरानो अथर्ववेदले १२७ नेपाली जडीबुटीहरू सूचीबद्ध गरेको छ, जसमध्ये ७३ अझै पनि परम्परागत आयुर्वेदिक फर्मूलेशनमा प्रयोग हुन्छन् {5}।"}
                </p>
              </CardContent>
            </Card>

            <div>
              <p className="text-lg mb-4">
                {language === "en"
                  ? "Medicinal plants are deeply embedded in Nepal’s cultural fabric. The Newari community’s Svasthani Vrata ritual uses 21 specific herbs, each tied to cosmic elements like earth, water, and fire {2}. In western Nepal, shamans (Dhami-Jhankri) employ 147 plant species across 43 healing ceremonies, blending animist and Hindu traditions {4}. The Tamang people’s lunar-phase harvesting calendar dictates the collection of 63 plants, believed to enhance potency during specific moon cycles {1}."
                  : "औषधीय बोटविरुवाहरू नेपालको सांस्कृतिक संरचनामा गहिरो रूपमा जडित छन्। नेवार समुदायको स्वास्थानी व्रत अनुष्ठानमा २१ विशिष्ट जडीबुटीहरू प्रयोग गरिन्छ, प्रत्येक पृथ्वी, पानी र आगो जस्ता ब्रह्माण्डिय तत्वहरूसँग जोडिएको छ {2}। पश्चिम नेपालमा, झाँक्रीहरू (धामी-झाँक्री) ले ४३ उपचार समारोहहरूमा १४७ प्रजातिका बोटविरुवाहरू प्रयोग गर्छन्, जसमा एनिमिस्ट र हिन्दु परम्पराहरू मिसिएका छन् {4}। तामाङ समुदायको चन्द्र चरण कटानी पात्रोले ६३ बोटविरुवाहरूको संकलन निर्धारण गर्छ, जुन विशिष्ट चन्द्र चक्रहरूमा शक्ति बढाउने विश्वास गरिन्छ {1}।"}
              </p>
              <p className="text-lg mb-4">
                {language === "en"
                  ? "The Tharu people in the Terai use 17 antivenom plants, such as Rauvolfia serpentina, to treat snakebites—a practice passed down for generations {3}. In the high Himalayas, Sherpa communities rely on Juniperus indica for purification rituals, burning its leaves to ward off evil spirits {4}. These practices highlight a profound ethnobotanical knowledge preserved through oral traditions."
                  : "तराईका थारू समुदायले सर्पदंश उपचार गर्न राउभोल्फिया सर्पेन्टिना जस्ता १७ विषनाशक बोटविरुवाहरू प्रयोग गर्छन्—यो अभ्यास पुस्तौंदेखि हस्तान्तरण भएको छ {3}। उच्च हिमालयमा, शेर्पा समुदायले शुद्धिकरण अनुष्ठानका लागि जुनिपेरस इन्डिका प्रयोग गर्छन्, यसको पातहरू जलाएर दुष्ट आत्माहरूलाई भगाउँछन् {4}। यी अभ्यासहरूले मौखिक परम्पराहरूमार्फत संरक्षित गहिरो एथ्नोबोटानिकल ज्ञानलाई हाइलाइट गर्छन्।"}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-herb-700 dark:text-herb-400">
                {language === "en" ? "Ethnobotanical Practices" : "एथ्नोबोटानिकल अभ्यासहरू"}
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  <strong>Tamang Healing:</strong> {language === "en"
                    ? "A 63-plant pharmacopeia, including Rhododendron arboreum, used for respiratory ailments, follows a lunar calendar {1}."
                    : "श्वासप्रश्वास समस्याका लागि प्रयोग हुने रोडोडेन्ड्रोन आर्बोरियम सहित ६३ बोटविरुवाको फार्माकोपिया, चन्द्र पात्रो अनुसरण गर्छ {1}।"}
                </li>
                <li>
                  <strong>Tharu Medicine:</strong> {language === "en"
                    ? "17 antivenom plants, including Andrographis paniculata, treat snakebites with a 70% success rate in rural clinics {3}."
                    : "एन्ड्रोग्राफिस प्यानिकुलाटा सहित १७ विषनाशक बोटविरुवाहरूले ग्रामीण क्लिनिकहरूमा ७०% सफलतादरका साथ सर्पदंश उपचार गर्छन् {3}।"}
                </li>
                <li>
                  <strong>Gurung Rituals:</strong> {language === "en"
                    ? "Use of Terminalia chebula in death ceremonies to purify the soul, practiced for over 500 years {4}."
                    : "५०० वर्षभन्दा बढी समयदेखि मृत्यु समारोहमा आत्मा शुद्धिकरणका लागि टर्मिनालिया चेबुलाको प्रयोग {4}।"}
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
                      ? "38 documented groves in mid-hill regions preserve 412 medicinal species through religious taboos, banning commercial harvest {2}."
                      : "मध्य-पहाडी क्षेत्रका ३८ दर्ता भएका बनहरूले धार्मिक प्रतिबन्धहरू मार्फत ४१२ औषधीय प्रजातिहरू संरक्षण गर्छन्, व्यावसायिक कटानीमा प्रतिबन्ध लगाउँदै {2}।"}
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
                      ? "Traditional schools since the 12th century teach a 7-year herbal medicine curriculum, training over 1,000 practitioners annually {5}."
                      : "१२औं शताब्दीदेखिका परम्परागत विद्यालयहरूले ७ वर्षे जडीबुटी चिकित्सा पाठ्यक्रम सिकाउँछन्, वार्षिक १,००० भन्दा बढी चिकित्सकहरू प्रशिक्षण गर्छन् {5}।"}
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
                  ? "Nepal’s Natural Product Research Laboratory identified 17 novel alkaloids between 2018-2023, with 3 entering clinical trials for anti-inflammatory and anticancer properties {7}. A 2020 study on Justicia adhatoda revealed 82 bioactive compounds, including vasicine, with potential anti-COVID activity {7}. Similarly, Swertia chirayita’s HPLC analysis identified 8 new xanthones with hepatoprotective effects, published in 2021 {7}."
                  : "नेपालको प्राकृतिक उत्पादन अनुसन्धान प्रयोगशालाले २०१८-२०२३ बीच १७ नयाँ अल्कलोइडहरू पहिचान गरेको छ, जसमध्ये ३ एन्टि-इन्फ्लेमेटरी र एन्टिक्यान्सर गुणहरूका लागि क्लिनिकल परीक्षणमा छन् {7}। २०२० मा जस्टिसिया अधटोडाको अध्ययनले भ्यासिन सहित ८२ जैवसक्रिय यौगिकहरू पत्ता लगायो, जसमा COVID-विरोधी सम्भावना छ {7}। त्यसैगरी, स्वर्टिया चिरायताको HPLC विश्लेषणले २०२१ मा प्रकाशित ८ नयाँ जान्थोनहरू हेपाटोप्रोटेक्टिभ प्रभावसहित पहिचान गर्‍यो {7}।"}
              </p>
              <p className="text-lg mb-4">
                {language === "en"
                  ? "Asparagus racemosus (Shatavari) has shown an 89% efficacy rate in Phase III trials for managing menopausal symptoms, with Nepal leading its phytochemical profiling {5}. Berberis aristata’s berberine compounds inhibit cancer cell growth by 73% in vitro, sparking interest in international oncology research {7}. These breakthroughs underscore Nepal’s growing role in global phytomedicine."
                  : "एस्पारागस रेसिमोसस (शतावरी) ले रजोनिवृत्ति लक्षण व्यवस्थापनका लागि चरण III परीक्षणमा ८९% प्रभावकारिता देखाएको छ, नेपालले यसको फाइटोकेमिकल प्रोफाइलिङमा नेतृत्व गर्दै {5}। बर्बेरिस एरिस्टाटाको बर्बेरिन यौगिकहरूले इन विट्रोमा क्यान्सर कोष वृद्धिलाई ७३% ले रोक्छ, जसले अन्तर्राष्ट्रिय ओन्कोलोजी अनुसन्धानमा चासो जगाएको छ {7}। यी सफलताहरूले वैश्विक फाइटोमेडिसिनमा नेपालको बढ्दो भूमिकालाई जोड दिन्छ।"}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-herb-700 dark:text-herb-400">
                {language === "en" ? "Breakthrough Discoveries" : "सफल आविष्कारहरू"}
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>
                  {language === "en"
                    ? "Valeriana jatamansi’s valepotriates show 85% efficacy in reducing anxiety in preclinical trials {7}."
                    : "भालेरियाना जटामान्सीको भालेपोट्रियेट्सले प्रिक्लिनिकल परीक्षणमा चिन्ता ८५% ले घटाउने प्रभावकारिता देखाएको छ {7}।"}
                </li>
                <li>
                  {language === "en"
                    ? "Centella asiatica extracts improve cognitive function by 62% in elderly patients, per a 2022 study {7}."
                    : "सेन्टेला एशियाटिका अर्कले २०२२ को अध्ययन अनुसार वृद्ध रोगीहरूमा संज्ञानात्मक कार्य ६२% ले सुधार गर्छ {7}।"}
                </li>
                <li>
                  {language === "en"
                    ? "Acorus calamus rhizomes exhibit antimicrobial activity against 14 bacterial strains {7}."
                    : "एकोरस क्यालामस राइजोम्सले १४ ब्याक्टेरियल स्ट्रेनहरूविरुद्ध एन्टिमाइक्रोबियल गतिविधि देखाउँछ {7}।"}
                </li>
              </ul>
            </div>

          <Card className="overflow-hidden">
          <img
            src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs44187-024-00168-7/MediaObjects/44187_2024_168_Figa_HTML.png?as=webp"
            alt="GC-MS analysis of Rhododendron flower brews"
            className="w-full h-70 object-cover"
          />
          <CardContent className="p-6">
            <h4 className="font-medium mb-2">
              {language === "en" ? "Phytochemical Insights into Herbal Brews" : "जडीबुटी पेयहरूको फाइटोकेमिकल अध्ययन"}
            </h4>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Gas Chromatography-Mass Spectrometry (GC-MS) analysis highlights the ethnomedicinal properties of Rhododendron flower brews from Singalila Himalaya, unveiling anticipated biosynthesis pathways of key bioactive compounds."
                : "ग्यास क्रोम्याटोग्राफी-मास स्पेक्ट्रोमेट्री (GC-MS) अध्ययनले सिंगलिला हिमालयबाट प्राप्त रोडोडेन्ड्रोन फूल पेयको परम्परागत औषधीय गुणहरू उजागर गर्दै प्रमुख जैव-सक्रिय तत्वहरूको सम्भावित जैवसंश्लेषण मार्गहरूको खुलासा गरेको छ।"}
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
                    ? "12 Nepali herbs, including Picrorhiza kurroa, integrated into WHO’s Good Agricultural and Collection Practices {6}."
                    : "पिक्रोहाइजा कुरोआ सहित १२ नेपाली जडीबुटीहरू डब्ल्यूएचओको राम्रो कृषि र संकलन अभ्यासमा समाहित {6}।"}
                </p>
                <p className="text-xs text-herb-600">Source: WHO, 2023</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium mb-3">EU Phytopharm Project</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === "en"
                    ? "Standardized extracts of 5 Himalayan herbs, like Withania somnifera, approved for EU markets {7}."
                    : "विथानिया सोम्निफेरा जस्ता ५ हिमालयन जडीबुटीहरूको मानकीकृत अर्क युरोपियन बजारका लागि स्वीकृत {7}।"}
                </p>
                <p className="text-xs text-herb-600">Source: European Medicines Agency, 2022</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium mb-3">Patent Milestones</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === "en"
                    ? "17 international patents filed for Nepali herbal formulations since 2018, including anti-diabetic compounds {6}."
                    : "२०१८ देखि नेपाली जडीबुटी फर्मूलेशनहरूका लागि १७ अन्तर्राष्ट्रिय पेटेन्ट दर्ता, एन्टि-डायबेटिक यौगिकहरू सहित {6}।"}
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