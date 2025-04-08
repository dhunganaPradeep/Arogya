
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HerbDetails, MedicinalUse, medicinalUsesData, regionsData } from "@/data/herbs";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  ArrowLeft, 
  Leaf, 
  MapPin, 
  HeartPulse, 
  Beaker,
  Book, 
  AlertTriangle,
  CalendarClock,
  BeakerIcon,
  BookOpen,
  Trees,
  GraduationCap,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import NepalMap from "@/components/NepalMap";

const HerbDetailContent = () => {
  const { id } = useParams<{ id: string }>();
  const [herb, setHerb] = useState<HerbDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();
  const [showFullCollectionMethod, setShowFullCollectionMethod] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/herbDetails/${id}.json`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Herb data not found');
          }
          return response.json();
        })
        .then(data => {
          setHerb(data);
          setLoading(false);
          if (data) {
            document.title = `${data.name[language]} (${data.scientificName}) - ${t("site.name")}`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
              metaDesc.setAttribute("content", data.shortDescription[language]);
            }
          }
        })
        .catch(error => {
          console.error("Failed to load herb details:", error);
          setHerb(null);
          setLoading(false);
        });
    }
  }, [id, language, t]);

  const getMedicinalUseName = (useId: MedicinalUse): string => {
    const useData = medicinalUsesData.find(use => use.id === useId);
    return useData ? useData.name[language] : useId;
  };

  const getRegionName = (regionId: string): string => {
    const region = regionsData.find(r => r.id === regionId);
    return region ? region.name[language] : regionId;
  };

  if (loading) {
    return (
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center py-12">
          <Leaf className="animate-leaf-sway h-12 w-12 text-herb-500 mb-4" />
          <p className="text-muted-foreground">
            {language === "en" ? "Loading herb information..." : "जडीबुटी जानकारी लोड हुँदैछ..."}
          </p>
        </div>
      </div>
    );
  }

  if (!herb) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === "en" ? "Herb not found" : "जडीबुटी भेटिएन"}
          </h2>
          <p className="mb-6">
            {language === "en" 
              ? "The herb you're looking for does not exist or has been removed." 
              : "तपाईंले खोज्नुभएको जडीबुटी अस्तित्वमा छैन वा हटाइएको छ।"}
          </p>
          <Button asChild>
            <Link to="/herbs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("nav.herbs")}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link to="/herbs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "en" ? "Back to herbs" : "जडीबुटीमा फर्कनुहोस्"}
          </Link>
        </Button>
      </div>

      <div className="space-y-8">
        <div className="bg-herb-50 dark:bg-herb-900/40 p-6 rounded-lg border border-herb-200 dark:border-herb-800">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="h-20 w-20 rounded-full bg-herb-100 dark:bg-herb-800 flex items-center justify-center">
              <Leaf className="h-10 w-10 text-herb-600 dark:text-herb-400" />
            </div>
            <div className="space-y-2 flex-1">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {herb.name[language]}
              </h1>
              <p className="text-lg italic text-muted-foreground">
                {herb.scientificName}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {herb.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="bg-herb-100/50 dark:bg-herb-800/50 text-herb-800 dark:text-herb-200 hover:bg-herb-200 hover:text-herb-900"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={herb.images[0]} 
                  alt={herb.name[language]} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                />
              </div>
            </Card>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full grid grid-cols-4 mb-6">
                <TabsTrigger value="overview" className="text-sm">
                  {language === "en" ? "Overview" : "अवलोकन"}
                </TabsTrigger>
                <TabsTrigger value="medicinal" className="text-sm">
                  {language === "en" ? "Medicinal" : "औषधीय"}
                </TabsTrigger>
                <TabsTrigger value="scientific" className="text-sm">
                  {language === "en" ? "Scientific" : "वैज्ञानिक"}
                </TabsTrigger>
                <TabsTrigger value="cultural" className="text-sm">
                  {language === "en" ? "Cultural" : "सांस्कृतिक"}
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-herb-600" />
                      {language === "en" ? "Description" : "विवरण"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="whitespace-pre-line">{herb.description[language]}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-herb-600" />
                      {language === "en" ? "Distribution" : "वितरण"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {language === "en"
                        ? "This herb is found in the following regions of Nepal:"
                        : "यो जडीबुटी नेपालका निम्न क्षेत्रहरूमा पाइन्छ:"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {herb.regions.map(region => (
                        <div 
                          key={region} 
                          className="flex items-center gap-2 p-2 rounded-md bg-herb-50 dark:bg-herb-900"
                        >
                          <div className="h-3 w-3 rounded-full bg-herb-600"></div>
                          <span>{getRegionName(region)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-2">
                        {language === "en" ? "Regions Highlighted on Map" : "नक्सामा हाइलाइट गरिएका क्षेत्रहरू"}
                      </h4>
                      <div className="border p-4 rounded-lg bg-background">
                        <NepalMap highlightedRegions={herb.regions} showLabels={true} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {herb.lifecycle && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trees className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Lifecycle" : "जीवन चक्र"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.lifecycle[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              {/* Medicinal Tab */}
              <TabsContent value="medicinal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HeartPulse className="h-5 w-5 text-herb-600" />
                      {language === "en" ? "Therapeutic Properties" : "चिकित्सकीय गुणहरू"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {herb.medicinalUses.map(use => (
                        <li key={use} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-herb-100 dark:bg-herb-800 flex items-center justify-center mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-herb-600"></div>
                          </div>
                          <div>
                            <h4 className="font-medium">{getMedicinalUseName(use)}</h4>
                            <p className="text-sm text-muted-foreground">
                              {language === "en"
                                ? "Used traditionally for treating various conditions related to this system."
                                : "यस प्रणालीसँग सम्बन्धित विभिन्न अवस्थाहरू उपचार गर्न परम्परागत रूपमा प्रयोग गरिन्छ।"}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {herb.traditionalUses && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Traditional Uses" : "परम्परागत प्रयोगहरू"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.traditionalUses[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.preparation && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Beaker className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Preparation Methods" : "तयारी विधिहरू"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.preparation[language]}</p>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div className="flex items-center gap-2 p-4 bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-200 rounded-md border border-amber-200 dark:border-amber-900">
                        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                        <p className="text-sm">
                          {language === "en"
                            ? "Information provided is for educational purposes only. Always consult a qualified healthcare provider before using any herbal remedies."
                            : "प्रदान गरिएको जानकारी शैक्षिक उद्देश्यका लागि मात्र हो। कुनै पनि जडीबुटी उपचारहरू प्रयोग गर्नु अघि सधैं योग्य स्वास्थ्य सेवा प्रदायकसँग परामर्श गर्नुहोस्।"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.contraindications && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-500">
                        <AlertTriangle className="h-5 w-5" />
                        {language === "en" ? "Contraindications & Precautions" : "विपरीत संकेत र सावधानीहरू"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.contraindications[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              {/* Scientific Tab */}
              <TabsContent value="scientific" className="space-y-6">
                {herb.modernResearch && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Modern Research" : "आधुनिक अनुसन्धान"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.modernResearch[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.chemistry && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BeakerIcon className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Chemistry & Active Compounds" : "रसायन र सक्रिय यौगिकहरू"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.chemistry[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.nutritionalValue && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Nutritional Value" : "पोषण मूल्य"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.nutritionalValue[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.references && herb.references.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "References" : "सन्दर्भहरू"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-decimal pl-5">
                        {herb.references.map((ref, index) => (
                          <li key={index} className="text-sm">
                            {ref[language]}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              {/* Cultural Tab */}
              <TabsContent value="cultural" className="space-y-6">
                {herb.culturalSignificance && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Cultural Significance" : "सांस्कृतिक महत्त्व"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.culturalSignificance[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.ecologicalStatus && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trees className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Ecological Status" : "पारिस्थितिक स्थिति"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.ecologicalStatus[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.sustainabilityPractices && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Sustainability Practices" : "दिगोपन अभ्यासहरू"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.sustainabilityPractices[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {herb.globalMarket && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-herb-600" />
                        {language === "en" ? "Global Market" : "विश्वव्यापी बजार"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{herb.globalMarket[language]}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-herb-100 dark:bg-herb-800">
                <CardTitle className="text-center">
                  {language === "en" ? "Quick Facts" : "छिटो तथ्यहरू"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <dl className="divide-y">
                  <div className="p-4 flex flex-col">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">
                      {language === "en" ? "Scientific Name" : "वैज्ञानिक नाम"}
                    </dt>
                    <dd className="font-medium italic">{herb.scientificName}</dd>
                  </div>
                  
                  {herb.family && (
                    <div className="p-4 flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground mb-1">
                        {language === "en" ? "Family" : "परिवार"}
                      </dt>
                      <dd className="font-medium">
                        {herb.family[language]}
                      </dd>
                    </div>
                  )}
                  
                  <div className="p-4 flex flex-col">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">
                      {language === "en" ? "Native Regions" : "स्थानीय क्षेत्रहरू"}
                    </dt>
                    <dd>
                      <div className="flex flex-wrap gap-1">
                        {herb.regions.map(region => (
                          <Badge key={region} variant="secondary">{getRegionName(region)}</Badge>
                        ))}
                      </div>
                    </dd>
                  </div>
                  
                  <div className="p-4 flex flex-col">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">
                      {language === "en" ? "Primary Uses" : "प्राथमिक प्रयोगहरू"}
                    </dt>
                    <dd>
                      <div className="flex flex-wrap gap-1">
                        {herb.medicinalUses.slice(0, 3).map(use => (
                          <Badge key={use} variant="outline" className="bg-herb-50 dark:bg-herb-900">
                            {getMedicinalUseName(use)}
                          </Badge>
                        ))}
                        {herb.medicinalUses.length > 3 && (
                          <Badge variant="outline" className="bg-herb-50 dark:bg-herb-900">
                            +{herb.medicinalUses.length - 3}
                          </Badge>
                        )}
                      </div>
                    </dd>
                  </div>
                  
                  {herb.localNames && herb.localNames.length > 0 && (
                    <div className="p-4 flex flex-col">
                      <dt className="text-sm font-medium text-muted-foreground mb-1">
                        {language === "en" ? "Local Names" : "स्थानीय नामहरू"}
                      </dt>
                      <dd>
                        <ul className="space-y-1">
                          {herb.localNames.map((localName, index) => (
                            <li key={index} className="text-sm flex flex-col">
                              <span className="font-medium">{localName.language}: {localName.name}</span>
                              <span className="text-muted-foreground text-xs">{localName.translation[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                  
                  <div className="p-4 flex flex-col">
                    <dt className="text-sm font-medium text-muted-foreground mb-1">
                      {language === "en" ? "Elevation Range" : "उचाइ सीमा"}
                    </dt>
                    <dd className="font-medium">
                      {getElevationForRegions(herb.regions, language)}
                    </dd>
                  </div>
                  
                  {herb.collectionMethod ? (
  <div className="p-4 flex flex-col">
    <dt className="text-sm font-medium text-muted-foreground mb-1">
      {language === "en" ? "Collection Method" : "संकलन विधि"}
    </dt>
    <dd className="text-sm">
      {showFullCollectionMethod 
        ? herb.collectionMethod[language]
        : `${herb.collectionMethod[language].substring(0, 120)}...`
      }
      <button 
        className="text-herb-600 hover:text-herb-700 dark:text-herb-400 dark:hover:text-herb-300 text-xs font-medium ml-1"
        onClick={() => setShowFullCollectionMethod(!showFullCollectionMethod)}
      >
        {showFullCollectionMethod 
          ? (language === "en" ? "Show less" : "कम देखाउनुहोस्")
          : (language === "en" ? "Read more" : "थप पढ्नुहोस्")
        }
      </button>
    </dd>
  </div>
) : (
  <div className="p-4 flex flex-col">
    <dt className="text-sm font-medium text-muted-foreground mb-1">
      {language === "en" ? "Harvesting Season" : "कटानी मौसम"}
    </dt>
    <dd className="font-medium">
      {language === "en" ? "Spring to Summer" : "वसन्तदेखि ग्रीष्म"}
    </dd>
  </div>
)}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const getElevationForRegions = (regions: string[], language: "en" | "ne"): string => {
  if (regions.includes("himalayas")) {
    return language === "en" ? "Above 4,000 meters" : "४,००० मिटर माथि";
  } else if (regions.includes("high-mountains")) {
    return language === "en" ? "2,500 - 4,000 meters" : "२,५०० - ४,००० मिटर";
  } else if (regions.includes("mid-hills")) {
    return language === "en" ? "1,000 - 2,500 meters" : "१,००० - २,५०० मिटर";
  } else if (regions.includes("siwaliks")) {
    return language === "en" ? "500 - 1,000 meters" : "५०० - १,००० मिटर";
  } else if (regions.includes("terai")) {
    return language === "en" ? "Below 500 meters" : "५०० मिटर भन्दा कम";
  }
  return language === "en" ? "Varied elevation" : "विविध उचाइ";
};

export default HerbDetailContent;
