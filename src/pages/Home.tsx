import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";
import Layout from "@/components/Layout";
import HerbCard from "@/components/HerbCard";
import { Button } from "@/components/ui/button";
import { getFeaturedHerbs } from "@/utils/herbUtils";
import { Leaf, BookOpen, MapPin, HeartPulse, ArrowRight, Users, Award, Globe, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import HomeInfoSection from "@/components/HomeInfoSection";
import HerbCategoriesSection from "@/components/HerbCategoriesSection";
import { homePageData } from "@/data/homePageData";
import { Herb } from "@/data/herbs";

const Home = () => {
  const { t, language } = useLanguage();
  const [featuredHerbs, setFeaturedHerbs] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Arogya - Nepal's Medicinal Herb Treasury";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover Nepal's rich botanical heritage with extensive collection of medicinal herbs. Each plant carefully documented with traditional and medicinal uses.");
    }

    getFeaturedHerbs(3).then(herbs => {
      setFeaturedHerbs(herbs);
      setLoading(false);
    }).catch(error => {
      console.error("Failed to load featured herbs:", error);
      setLoading(false);
    });
  }, []);

  return (
    <Layout showVideo={true}>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-herb-950/60 z-10"></div>
          <video 
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/herbs-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          {/* <div className="mb-4">
            <img 
              src="/img/arogya-logo.png" 
              alt="Arogya Logo" 
              className="h-24 mx-auto animate-fade-in"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/api/placeholder/120/120";
              }}
            />
          </div> */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-gradient animate-fade-in">
            {language === "en" ? "Arogya" : "आरोग्य"}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-slide-in opacity-90">
            {language === "en" 
              ? "Discover the healing power of Nepal's ancient medicinal herbs"
              : "नेपालका प्राचीन औषधीय जडीबुटीहरूको उपचार शक्ति पत्ता लगाउनुहोस्"}
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-herb-500 hover:bg-herb-600 animate-fade-in delay-300 shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/herbs" className="group">
              {language === "en" ? "Explore Herbs" : "जडीबुटी अन्वेषण गर्नुहोस्"}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer">
          <ChevronDown className="text-white h-8 w-8" />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-herb-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-24 bg-herb-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("home.intro")}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {language === "en" ? homePageData.introduction.en : homePageData.introduction.ne}
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-herb-300 dark:bg-herb-700"></div>
                <h3 className="text-2xl font-bold tracking-tight text-center">
                  {t("home.featured")}
                </h3>
                <div className="h-px w-12 bg-herb-300 dark:bg-herb-700"></div>
              </div>
              
              {loading ? (
                <div className="text-center">
                  <p className="text-muted-foreground">Loading featured herbs...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {featuredHerbs.map(herb => (
                    <HerbCard key={herb.id} herb={herb} />
                  ))}
                </div>
              )}
              
              <div className="flex justify-center">
                <Button asChild variant="outline" className="group border-herb-400 hover:border-herb-500 hover:bg-herb-50 dark:border-herb-700 dark:hover:border-herb-600 dark:hover:bg-herb-900/50">
                  <Link to="/herbs" className="flex items-center gap-2">
                    {t("home.browse")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-fixed opacity-20 dark:opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1540224769541-7a5ebe6d3594?auto=format&fit=crop&q=80&w=1920"
            alt="Herbs background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/api/placeholder/120/120";
            }}
          />
        </div>
        <div className="absolute inset-0 bg-white/80 dark:bg-herb-950/90"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 bg-white dark:bg-herb-900/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-herb-600">50+</div>
              <div className="h-1 w-12 mx-auto bg-herb-500/50 rounded-full mb-2"></div>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Medicinal Herbs" : "औषधीय जडीबुटी"}
              </p>
            </div>
            <div className="space-y-2 bg-white dark:bg-herb-900/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-herb-600">7</div>
              <div className="h-1 w-12 mx-auto bg-herb-500/50 rounded-full mb-2"></div>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Ecological Regions" : "पारिस्थितिक क्षेत्रहरू"}
              </p>
            </div>
            <div className="space-y-2 bg-white dark:bg-herb-900/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-herb-600">100+</div>
              <div className="h-1 w-12 mx-auto bg-herb-500/50 rounded-full mb-2"></div>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Medicinal Applications" : "औषधीय अनुप्रयोगहरू"}
              </p>
            </div>
            <div className="space-y-2 bg-white dark:bg-herb-900/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-herb-600">5000+</div>
              <div className="h-1 w-12 mx-auto bg-herb-500/50 rounded-full mb-2"></div>
              <p className="text-sm text-muted-foreground">
                {language === "en" ? "Years of Knowledge" : "ज्ञानका वर्षहरू"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center">
              <Leaf className="text-herb-500 h-6 w-6 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {language === "en" ? "Herb Categories" : "जडीबुटी श्रेणीहरू"}
              </h2>
            </div>
            <div className="h-1 w-24 bg-herb-400 mx-auto rounded-full mt-2 mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "Explore our collection organized by medicinal properties and traditional uses"
                : "औषधीय गुणहरू र परम्परागत प्रयोगहरू अनुसार व्यवस्थित हाम्रो संग्रह अन्वेषण गर्नुहोस्"}
            </p>
          </div>
          <HerbCategoriesSection />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-herb-50/30 dark:from-herb-950 dark:to-herb-900/30">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <div className="flex justify-center">
              <BookOpen className="h-8 w-8 text-herb-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {language === "en" ? "Discover Nepal's Herbal Treasures" : "नेपालको जडीबुटी खजाना पत्ता लगाउनुहोस्"}
            </h2>
            <div className="h-1 w-24 bg-herb-400 mx-auto rounded-full mt-2 mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "Explore the rich diversity of medicinal plants that have been part of Nepal's traditional healing practices for centuries."
                : "शताब्दीयौंदेखि नेपालको परम्परागत उपचार प्रथाको अंश रहेका औषधीय वनस्पतिहरूको समृद्ध विविधता अन्वेषण गर्नुहोस्।"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePageData.infoCards.map((card, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-herb-500 transition-all duration-300 group">
                <div className="h-2 bg-herb-500 group-hover:h-3 transition-all"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {card.icon === "book" && (
                      <div className="h-12 w-12 bg-herb-100 dark:bg-herb-800/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <BookOpen className="h-6 w-6 text-herb-500" />
                      </div>
                    )}
                    {card.icon === "map" && (
                      <div className="h-12 w-12 bg-herb-100 dark:bg-herb-800/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <MapPin className="h-6 w-6 text-herb-500" />
                      </div>
                    )}
                    {card.icon === "health" && (
                      <div className="h-12 w-12 bg-herb-100 dark:bg-herb-800/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                        <HeartPulse className="h-6 w-6 text-herb-500" />
                      </div>
                    )}
                    <h3 className="font-bold text-xl">{card.title[language]}</h3>
                  </div>
                  <p className="text-muted-foreground">{card.description[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-herb-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Globe className="h-8 w-8 text-herb-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {language === "en" ? "Nepal's Herbal Diversity Map" : "नेपालको जडीबुटी विविधता नक्शा"}
            </h2>
            <div className="h-1 w-24 bg-herb-400 mx-auto rounded-full mt-2 mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "From lush tropical forests to alpine meadows, explore how Nepal's varied landscape creates perfect environments for unique medicinal plants"
                : "उष्ण उष्णकटिबंधीय वनहरू देखि अल्पाइन घाँसे मैदानहरूसम्म, नेपालको विविध परिदृश्यले अद्वितीय औषधीय बोटविरुवाहरूका लागि कसरी wildfires उत्कृष्ट वातावरण सिर्जना गर्दछ भन्ने अन्वेषण गर्नुहोस्"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 lg:col-span-2 relative bg-herb-50 dark:bg-herb-900/40 rounded-lg overflow-hidden p-4">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-herb-100 to-white dark:from-herb-800/30 dark:to-herb-950 rounded-lg overflow-hidden shadow-lg border border-herb-200 dark:border-herb-800">
                <img 
                  src="/img/mapp.png" 
                  alt="Nepal's ecological regions" 
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/api/placeholder/120/120";
                  }}
                />
                
                <div className="absolute top-1/4 left-1/4 w-12 h-12 animate-pulse">
                  <div className="absolute inset-0 bg-herb-500/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-3 bg-herb-500 rounded-full"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap bg-herb-600 text-white px-2 py-1 rounded text-xs font-medium shadow-md">
                    {language === "en" ? "Himalayan" : "हिमालयन"}
                  </div>
                </div>
                
                <div className="absolute bottom-1/3 left-2/3 w-12 h-12 animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <div className="absolute inset-0 bg-herb-500/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-3 bg-herb-500 rounded-full"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap bg-herb-600 text-white px-2 py-1 rounded text-xs font-medium shadow-md">
                    {language === "en" ? "Mid Hills" : "मध्य पहाड"}
                  </div>
                </div>
                
                <div className="absolute bottom-1/3 left-1/2 w-12 h-12 animate-pulse" style={{ animationDelay: "1s" }}>
                  <div className="absolute inset-0 bg-herb-500/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-3 bg-herb-500 rounded-full"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap bg-herb-600 text-white px-2 py-1 rounded text-xs font-medium shadow-md">
                    {language === "en" ? "Terai" : "तराई"}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow border-herb-200 dark:border-herb-800 hover:border-herb-400">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-herb-600 mb-2">
                    <div className="h-8 w-8 bg-herb-100 dark:bg-herb-800/60 rounded-full flex items-center justify-center">
                      <Globe className="h-4 w-4" />
                    </div>
                    <h4 className="font-semibold">{language === "en" ? "Himalayan Region" : "हिमालयन क्षेत्र"}</h4>
                  </div>
                  <img 
                    src="/img/himalayan.jpg" 
                    alt="Himalayan Region" 
                    className="w-full h-64 object-cover rounded-md mb-2" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/api/placeholder/120/120";
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? "Home to rare alpine medicinal herbs like Yarsagumba and Jatamansi that thrive in high-altitude environments."
                      : "यार्सागुम्बा र जटामानसी जस्ता उच्च उचाइको वातावरणमा फस्टाउने दुर्लभ अल्पाइन औषधीय जडीबुटीहरूको घर।"}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-herb-200 dark:border-herb-800 hover:border-herb-400">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-herb-600 mb-2">
                    <div className="h-8 w-8 bg-herb-100 dark:bg-herb-800/60 rounded-full flex items-center justify-center">
                      <Globe className="h-4 w-4" />
                    </div>
                    <h4 className="font-semibold">{language === "en" ? "Mid Hills" : "मध्य पहाड"}</h4>
                  </div>
                  <img 
                    src="/img/mid-hills.jpeg" 
                    alt="Mid Hills Region" 
                    className="w-full h-64 object-cover rounded-md mb-2" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/api/placeholder/120/120";
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? "Rich in diverse herbs like Tejpat and Timur found in temperate forests at moderate elevations."
                      : "मध्यम उचाइमा रहेका शीतोष्ण वनहरूमा पाइने तेजपात र टिमुर जस्ता विविध जडीबुटीहरूमा समृद्ध।"}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-herb-200 dark:border-herb-800 hover:border-herb-400">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-herb-600 mb-2">
                    <div className="h-8 w-8 bg-herb-100 dark:bg-herb-800/60 rounded-full flex items-center justify-center">
                      <Globe className="h-4 w-4" />
                    </div>
                    <h4 className="font-semibold">{language === "en" ? "Terai Region" : "तराई क्षेत्र"}</h4>
                  </div>
                  <img 
                    src="/img/terai.jpg" 
                    alt="Terai Region" 
                    className="w-full h-64 object-cover rounded-md mb-2" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/api/placeholder/120/120";
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? "Features tropical herbs like Sarpagandha and Kurilo that flourish in the warm, humid lowland climate."
                      : "न्यानो, आर्द्र तल्लो भूमिको जलवायुमा फल्ने-फुल्ने सर्पगन्धा र कुरिलो जस्ता उष्णकटिबंधीय जडीबुटीहरू।"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-herb-50 dark:bg-herb-900/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {language === "en" ? "What Experts Say" : "विशेषज्ञहरू के भन्छन्"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "Insights from leading botanists and traditional medicine practitioners"
                : "अग्रणी वनस्पतिशास्त्री र परम्परागत चिकित्सा अभ्यासकर्ताहरूका अन्तर्दृष्टिहरू"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="45" 
                  height="40" 
                  viewBox="0 0 45 40" 
                  fill="none" 
                  className="mb-4 text-herb-300"
                >
                  <path d="M13.0547 24.7656C13.0547 28.2812 11.5547 31.25 8.55469 33.6719C6.01562 35.5469 3.04688 36.4844 -0.351562 36.4844L-0.351562 30.0469C1.25781 30.0781 2.47656 29.5781 3.30469 28.5469C3.89844 27.7969 4.19531 27.0312 4.19531 26.25C4.19531 25.4375 3.92969 24.7656 3.39844 24.2344C2.89844 23.7031 2.23438 23.4375 1.39844 23.4375C0.148438 23.4375 -0.820312 23.9531 -1.51562 24.9844C-2.17969 25.9844 -2.51172 27.3125 -2.51172 28.9688C-2.51172 32.0625 -1.78125 34.5156 -0.320312 36.3281C1.10938 38.1406 3.25781 39.0156 6.12891 38.9531L6.12891 39.9688C2.34766 40 -0.632812 38.6406 -2.82422 35.8906C-5.01562 33.1094 -6.11328 29.625 -6.11328 25.4375C-6.11328 21.0625 -5.13281 17.5469 -3.17188 14.8906C-1.17188 12.2656 1.91406 10.9531 6.08203 10.9531C8.4082 10.9531 10.3613 11.8125 11.9414 13.5312C12.6832 14.3438 13.2363 15.3281 13.6008 16.4844C13.9033 17.6094 14.0547 18.8125 14.0547 20.0938C14.0547 22.1094 13.7207 23.625 13.0547 24.7656ZM38.0547 24.7656C38.0547 28.2812 36.5547 31.25 33.5547 33.6719C31.0156 35.5469 28.0469 36.4844 24.6484 36.4844L24.6484 30.0469C26.2578 30.0781 27.4766 29.5781 28.3047 28.5469C28.8984 27.7969 29.1953 27.0312 29.1953 26.25C29.1953 25.4375 28.9297 24.7656 28.3984 24.2344C27.8984 23.7031 27.2344 23.4375 26.3984 23.4375C25.1484 23.4375 24.1797 23.9531 23.4844 24.9844C22.8203 25.9844 22.4883 27.3125 22.4883 28.9688C22.4883 32.0625 23.2188 34.5156 24.6797 36.3281C26.1094 38.1406 28.2578 39.0156 31.1289 38.9531L31.1289 39.9688C27.3477 40 24.3672 38.6406 22.1758 35.8906C19.9844 33.1094 18.8867 29.625 18.8867 25.4375C18.8867 21.0625 19.8672 17.5469 21.8281 14.8906C23.8281 12.2656 26.9141 10.9531 31.082 10.9531C33.4082 10.9531 35.3613 11.8125 36.9414 13.5312C37.6832 14.3438 38.2363 15.3281 38.6008 16.4844C38.9033 17.6094 39.0547 18.8125 39.0547 20.0938C39.0547 22.1094 38.7207 23.625 38.0547 24.7656Z" fill="currentColor"/>
                </svg>
                <blockquote className="flex-1 mb-4">
                  <p className="text-muted-foreground">
                    {language === "en" 
                      ? "The detailed documentation of Nepal's medicinal herbs in this project is an invaluable resource for researchers and practitioners alike."
                      : "यस परियोजनामा नेपालका औषधीय जडीबुटीहरूको विस्तृत प्रलेखन अनुसन्धानकर्ता र अभ्यासकर्ता दुवैका लागि अमूल्य संसाधन हो।"}
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-herb-200 dark:bg-herb-800 flex items-center justify-center">
                    <Users className="h-5 w-5 text-herb-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Dr. Ramesh Sharma</p>
                    <p className="text-xs text-muted-foreground">
                      {language === "en" ? "Ethnobotanist, Tribhuvan University" : "वनस्पतिशास्त्री, त्रिभुवन विश्वविद्यालय"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="45" 
                  height="40" 
                  viewBox="0 0 45 40" 
                  fill="none" 
                  className="mb-4 text-herb-300"
                >
                  <path d="M13.0547 24.7656C13.0547 28.2812 11.5547 31.25 8.55469 33.6719C6.01562 35.5469 3.04688 36.4844 -0.351562 36.4844L-0.351562 30.0469C1.25781 30.0781 2.47656 29.5781 3.30469 28.5469C3.89844 27.7969 4.19531 27.0312 4.19531 26.25C4.19531 25.4375 3.92969 24.7656 3.39844 24.2344C2.89844 23.7031 2.23438 23.4375 1.39844 23.4375C0.148438 23.4375 -0.820312 23.9531 -1.51562 24.9844C-2.17969 25.9844 -2.51172 27.3125 -2.51172 28.9688C-2.51172 32.0625 -1.78125 34.5156 -0.320312 36.3281C1.10938 38.1406 3.25781 39.0156 6.12891 38.9531L6.12891 39.9688C2.34766 40 -0.632812 38.6406 -2.82422 35.8906C-5.01562 33.1094 -6.11328 29.625 -6.11328 25.4375C-6.11328 21.0625 -5.13281 17.5469 -3.17188 14.8906C-1.17188 12.2656 1.91406 10.9531 6.08203 10.9531C8.4082 10.9531 10.3613 11.8125 11.9414 13.5312C12.6832 14.3438 13.2363 15.3281 13.6008 16.4844C13.9033 17.6094 14.0547 18.8125 14.0547 20.0938C14.0547 22.1094 13.7207 23.625 13.0547 24.7656ZM38.0547 24.7656C38.0547 28.2812 36.5547 31.25 33.5547 33.6719C31.0156 35.5469 28.0469 36.4844 24.6484 36.4844L24.6484 30.0469C26.2578 30.0781 27.4766 29.5781 28.3047 28.5469C28.8984 27.7969 29.1953 27.0312 29.1953 26.25C29.1953 25.4375 28.9297 24.7656 28.3984 24.2344C27.8984 23.7031 27.2344 23.4375 26.3984 23.4375C25.1484 23.4375 24.1797 23.9531 23.4844 24.9844C22.8203 25.9844 22.4883 27.3125 22.4883 28.9688C22.4883 32.0625 23.2188 34.5156 24.6797 36.3281C26.1094 38.1406 28.2578 39.0156 31.1289 38.9531L31.1289 39.9688C27.3477 40 24.3672 38.6406 22.1758 35.8906C19.9844 33.1094 18.8867 29.625 18.8867 25.4375C18.8867 21.0625 19.8672 17.5469 21.8281 14.8906C23.8281 12.2656 26.9141 10.9531 31.082 10.9531C33.4082 10.9531 35.3613 11.8125 36.9414 13.5312C37.6832 14.3438 38.2363 15.3281 38.6008 16.4844C38.9033 17.6094 39.0547 18.8125 39.0547 20.0938C39.0547 22.1094 38.7207 23.625 38.0547 24.7656Z" fill="currentColor"/>
                </svg>
                <blockquote className="flex-1 mb-4">
                  <p className="text-muted-foreground">
                    {language === "en" 
                      ? "This digital collection preserves vital knowledge that could otherwise be lost. It's a bridge between traditional wisdom and modern botanical science."
                      : "यो डिजिटल संग्रहले महत्त्वपूर्ण ज्ञान संरक्षण गर्दछ जुन अन्यथा हराउन सक्छ। यो परम्परागत ज्ञान र आधुनिक वनस्पति विज्ञान बीचको पुल हो।"}
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-herb-200 dark:bg-herb-800 flex items-center justify-center">
                    <Users className="h-5 w-5 text-herb-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Maya Gurung</p>
                    <p className="text-xs text-muted-foreground">
                      {language === "en" ? "Traditional Medicine Practitioner" : "परम्परागत औषधि अभ्यासकर्ता"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="45" 
                  height="40" 
                  viewBox="0 0 45 40" 
                  fill="none" 
                  className="mb-4 text-herb-300"
                >
                  <path d="M13.0547 24.7656C13.0547 28.2812 11.5547 31.25 8.55469 33.6719C6.01562 35.5469 3.04688 36.4844 -0.351562 36.4844L-0.351562 30.0469C1.25781 30.0781 2.47656 29.5781 3.30469 28.5469C3.89844 27.7969 4.19531 27.0312 4.19531 26.25C4.19531 25.4375 3.92969 24.7656 3.39844 24.2344C2.89844 23.7031 2.23438 23.4375 1.39844 23.4375C0.148438 23.4375 -0.820312 23.9531 -1.51562 24.9844C-2.17969 25.9844 -2.51172 27.3125 -2.51172 28.9688C-2.51172 32.0625 -1.78125 34.5156 -0.320312 36.3281C1.10938 38.1406 3.25781 39.0156 6.12891 38.9531L6.12891 39.9688C2.34766 40 -0.632812 38.6406 -2.82422 35.8906C-5.01562 33.1094 -6.11328 29.625 -6.11328 25.4375C-6.11328 21.0625 -5.13281 17.5469 -3.17188 14.8906C-1.17188 12.2656 1.91406 10.9531 6.08203 10.9531C8.4082 10.9531 10.3613 11.8125 11.9414 13.5312C12.6832 14.3438 13.2363 15.3281 13.6008 16.4844C13.9033 17.6094 14.0547 18.8125 14.0547 20.0938C14.0547 22.1094 13.7207 23.625 13.0547 24.7656ZM38.0547 24.7656C38.0547 28.2812 36.5547 31.25 33.5547 33.6719C31.0156 35.5469 28.0469 36.4844 24.6484 36.4844L24.6484 30.0469C26.2578 30.0781 27.4766 29.5781 28.3047 28.5469C28.8984 27.7969 29.1953 27.0312 29.1953 26.25C29.1953 25.4375 28.9297 24.7656 28.3984 24.2344C27.8984 23.7031 27.2344 23.4375 26.3984 23.4375C25.1484 23.4375 24.1797 23.9531 23.4844 24.9844C22.8203 25.9844 22.4883 27.3125 22.4883 28.9688C22.4883 32.0625 23.2188 34.5156 24.6797 36.3281C26.1094 38.1406 28.2578 39.0156 31.1289 38.9531L31.1289 39.9688C27.3477 40 24.3672 38.6406 22.1758 35.8906C19.9844 33.1094 18.8867 29.625 18.8867 25.4375C18.8867 21.0625 19.8672 17.5469 21.8281 14.8906C23.8281 12.2656 26.9141 10.9531 31.082 10.9531C33.4082 10.9531 35.3613 11.8125 36.9414 13.5312C37.6832 14.3438 38.2363 15.3281 38.6008 16.4844C38.9033 17.6094 39.0547 18.8125 39.0547 20.0938C39.0547 22.1094 38.7207 23.625 38.0547 24.7656Z" fill="currentColor"/>
                </svg>
                <blockquote className="flex-1 mb-4">
                  <p className="text-muted-foreground">
                    {language === "en" 
                      ? "The bilingual approach ensures this knowledge remains accessible to both international researchers and local communities who are the true custodians of this heritage."
                      : "द्विभाषी दृष्टिकोणले यो ज्ञान अन्तर्राष्ट्रिय अनुसन्धानकर्ताहरू र स्थानीय समुदायहरू जो यस सम्पदाका साँचो संरक्षक हुन् दुबैका लागि पहुँचयोग्य रहन्छ भन्ने सुनिश्चित गर्दछ।"}
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-herb-200 dark:bg-herb-800 flex items-center justify-center">
                    <Award className="h-5 w-5 text-herb-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Dr. Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">
                      {language === "en" ? "Medicinal Plant Researcher, WHO" : "औषधीय वनस्पति अनुसन्धानकर्ता, WHO"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-herb-950">
        <div className="container px-4 md:px-6">
          <HomeInfoSection />
        </div>
      </section>
    </Layout>
  );
};

export default Home;