import { Herb, MedicinalUse, Region } from "@/data/herbs";
import { loadHerbs, loadHerbById } from "@/data/herbDataLoader";

export async function getHerbById(id: string): Promise<Herb | undefined> {
  return loadHerbById(id);
}

export async function getFeaturedHerbs(limit: number = 3): Promise<Herb[]> {
  const herbs = await loadHerbs();
  return herbs.filter(herb => herb.featured).slice(0, limit);
}

export async function filterHerbs(
  searchQuery: string,
  selectedRegions: Region[],
  selectedUses: MedicinalUse[],
  language: "en" | "ne" = "en"
): Promise<Herb[]> {
  const herbs = await loadHerbs();
  return herbs.filter(herb => {
    if (searchQuery && searchQuery.length > 0) {
      const normalizedQuery = searchQuery.toLowerCase();
      const nameMatch = herb.name[language]?.toLowerCase().includes(normalizedQuery) ?? false;
      const scientificMatch = herb.scientificName?.toLowerCase().includes(normalizedQuery) ?? false;
      const descMatch = herb.description[language]?.toLowerCase().includes(normalizedQuery) ?? false;
      const tagMatch = herb.tags?.some(tag => tag.toLowerCase().includes(normalizedQuery)) ?? false;
      
      if (!(nameMatch || scientificMatch || descMatch || tagMatch)) {
        return false;
      }
    }
    if (selectedRegions.length > 0) {
      if (!herb.regions.some(region => selectedRegions.includes(region))) {
        return false;
      }
    }
    if (selectedUses.length > 0) {
      if (!herb.medicinalUses.some(use => selectedUses.includes(use))) {
        return false;
      }
    }
    return true;
  });
}