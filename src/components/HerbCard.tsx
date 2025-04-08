
import { Link } from "react-router-dom";
import { Herb } from "@/data/herbs";
import { useLanguage } from "./LanguageProvider";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HerbCardProps {
  herb: Herb;
}

const HerbCard = ({ herb }: HerbCardProps) => {
  const { language, t } = useLanguage();
  
  return (
    <div className="herb-card group">
      <div className="overflow-hidden rounded-md">
        <img 
          src={herb.images[0]} 
          alt={herb.name[language]} 
          className="herb-card-image transition-all group-hover:scale-105" 
        />
      </div>
      
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {herb.name[language]}
        </h3>
        <p className="text-sm italic text-muted-foreground">
          {herb.scientificName}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {herb.tags.slice(0, 3).map(tag => (
            <span key={tag} className="herb-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {herb.shortDescription[language]}
        </p>
        
        <div className="flex items-center text-xs text-muted-foreground mt-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>
            {herb.regions.length} {t("herb.found-in")}
          </span>
        </div>
        
        <div className="pt-3">
          <Button asChild className="w-full bg-herb-500 hover:bg-herb-600">
            <Link to={`/herb/${herb.id}`}>
              {t("herb.details")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HerbCard;
