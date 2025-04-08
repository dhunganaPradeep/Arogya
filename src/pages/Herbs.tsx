import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import HerbCard from "@/components/HerbCard";
import HerbFilter from "@/components/HerbFilter";
import { filterHerbs } from "@/utils/herbUtils";
import { Herb, MedicinalUse, Region } from "@/data/herbs";
import { useLanguage } from "@/components/LanguageProvider";
import { Leaf } from "lucide-react";

const Herbs = () => {
  const { language, t } = useLanguage();
  const [filteredHerbs, setFilteredHerbs] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedUses, setSelectedUses] = useState<MedicinalUse[]>([]);

  
  const handleFilterChange = async (query: string, regions: Region[], uses: MedicinalUse[]) => {
    setSearchQuery(query);
    setSelectedRegions(regions);
    setSelectedUses(uses);
    setLoading(true);
    try {
      const herbs = await filterHerbs(query, regions, uses, language);
      setFilteredHerbs(herbs);
    } catch (error) {
      console.error("Error filtering herbs:", error);
      setFilteredHerbs([]);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    const loadInitialHerbs = async () => {
      setLoading(true);
      try {
        const herbs = await filterHerbs("", [], [], language);
        setFilteredHerbs(herbs);
      } catch (error) {
        console.error("Error loading initial herbs:", error);
        setFilteredHerbs([]);
      } finally {
        setLoading(false);
      }
    };
    loadInitialHerbs();
  }, [language]);

  
  useEffect(() => {
    document.title = `${t("nav.herbs")} - ${t("site.name")}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Browse and search Nepal's extensive collection of medicinal herbs. Filter by region, medicinal use, and more.");
    }
  }, [t]);

  return (
    <Layout>
      <div className="container py-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{t("nav.herbs")}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
            <aside>
              <div className="sticky top-20">
                <HerbFilter onFilterChange={handleFilterChange} />
              </div>
            </aside>
            
            <div className="space-y-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Leaf className="animate-leaf-sway h-12 w-12 text-herb-500 mb-4" />
                  <p className="text-muted-foreground">
                    {language === "en" ? "Loading herbs..." : "जडीबुटीहरू लोड हुँदैछ..."}
                  </p>
                </div>
              ) : filteredHerbs.length === 0 ? (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-muted-foreground mb-2">
                    {language === "en" 
                      ? "No herbs found matching your criteria" 
                      : "तपाईंको मापदण्ड मेल खाने कुनै जडीबुटी फेला परेन"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? "Try adjusting your filters or search query" 
                      : "तपाईंको फिल्टरहरू वा खोज क्वेरी समायोजन गर्ने प्रयास गर्नुहोस्"}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? `Showing ${filteredHerbs.length} herb${filteredHerbs.length !== 1 ? 's' : ''}` 
                      : `${filteredHerbs.length} जडीबुटी देखाउँदै`}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredHerbs.map(herb => (
                      <HerbCard key={herb.id} herb={herb} />
                    ))}
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

export default Herbs;