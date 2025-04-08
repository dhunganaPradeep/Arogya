
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "./LanguageProvider";
import { Region, MedicinalUse, regionsData, medicinalUsesData } from "@/data/herbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";
import { debounce } from "lodash";

interface HerbFilterProps {
  onFilterChange: (searchQuery: string, regions: Region[], uses: MedicinalUse[]) => void;
}

const HerbFilter = ({ onFilterChange }: HerbFilterProps) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedUses, setSelectedUses] = useState<MedicinalUse[]>([]);

  
  
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onFilterChange(query, selectedRegions, selectedUses);
    }, 300),
    [selectedRegions, selectedUses, onFilterChange]
  );

  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  
  const handleRegionChange = (region: Region, isChecked: boolean) => {
    let updatedRegions: Region[];
    
    if (isChecked) {
      updatedRegions = [...selectedRegions, region];
    } else {
      updatedRegions = selectedRegions.filter(r => r !== region);
    }
    
    setSelectedRegions(updatedRegions);
    onFilterChange(searchQuery, updatedRegions, selectedUses);
  };

  
  const handleUseChange = (use: MedicinalUse, isChecked: boolean) => {
    let updatedUses: MedicinalUse[];
    
    if (isChecked) {
      updatedUses = [...selectedUses, use];
    } else {
      updatedUses = selectedUses.filter(u => u !== use);
    }
    
    setSelectedUses(updatedUses);
    onFilterChange(searchQuery, selectedRegions, updatedUses);
  };

  
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegions([]);
    setSelectedUses([]);
    onFilterChange("", [], []);
  };

  useEffect(() => {
    onFilterChange(searchQuery, selectedRegions, selectedUses);
  }, []);

  return (
    <div className="bg-card rounded-lg border p-4 shadow-sm">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t("search.placeholder")}
            className="pl-8"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        
        {/* Filter Sections */}
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-sm font-medium">{t("filter.regions")}</h4>
            <div className="space-y-2">
              {regionsData.map(region => (
                <div key={region.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`region-${region.id}`} 
                    checked={selectedRegions.includes(region.id as Region)}
                    onCheckedChange={(checked) => 
                      handleRegionChange(region.id as Region, checked === true)
                    }
                  />
                  <label 
                    htmlFor={`region-${region.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {region.name[language]}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Medicinal Uses Filter */}
          <div>
            <h4 className="mb-2 text-sm font-medium">{t("filter.uses")}</h4>
            <div className="space-y-2">
              {medicinalUsesData.map(use => (
                <div key={use.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`use-${use.id}`} 
                    checked={selectedUses.includes(use.id as MedicinalUse)}
                    onCheckedChange={(checked) => 
                      handleUseChange(use.id as MedicinalUse, checked === true)
                    }
                  />
                  <label 
                    htmlFor={`use-${use.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {use.name[language]}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Clear Filters Button */}
          {(searchQuery || selectedRegions.length > 0 || selectedUses.length > 0) && (
            <Button 
              variant="outline" 
              onClick={clearFilters} 
              className="w-full"
            >
              <X className="mr-2 h-4 w-4" />
              {t("filter.clear")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HerbFilter;
