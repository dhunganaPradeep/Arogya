
import React from "react";
import { useLanguage } from "./LanguageProvider";
import { Region, regionsData } from "@/data/herbs";

interface NepalMapProps {
  highlightedRegions?: Region[];
  showLabels?: boolean;
  interactive?: boolean;
  onRegionClick?: (region: Region) => void;
}

const NepalMap: React.FC<NepalMapProps> = ({ 
  highlightedRegions = [], 
  showLabels = false,
  interactive = false,
  onRegionClick
}) => {
  const { language } = useLanguage();
  
  // Define map regions with approximate SVG paths
  // This is a simplified representation of Nepal's regions
  const mapRegions = [
    {
      id: "himalayas" as Region,
      name: regionsData.find(r => r.id === "himalayas")?.name[language] || "Himalayas",
      path: "M10,10 L200,15 L210,50 L190,60 L10,40 Z",
      color: "#e6f2ff", // Light blue for highest mountains
      highlightColor: "#66a3ff"
    },
    {
      id: "high-mountains" as Region,
      name: regionsData.find(r => r.id === "high-mountains")?.name[language] || "High Mountains",
      path: "M10,40 L190,60 L180,85 L5,65 Z",
      color: "#d1e6cc", // Light green for high mountains
      highlightColor: "#7fbf73"
    },
    {
      id: "mid-hills" as Region,
      name: regionsData.find(r => r.id === "mid-hills")?.name[language] || "Mid Hills",
      path: "M5,65 L180,85 L175,105 L0,90 Z",
      color: "#f2e6c2", // Light yellow for mid hills
      highlightColor: "#e6cc7f"
    },
    {
      id: "siwaliks" as Region,
      name: regionsData.find(r => r.id === "siwaliks")?.name[language] || "Siwaliks",
      path: "M0,90 L175,105 L170,120 L0,110 Z",
      color: "#e6ccb3", // Light brown for siwaliks
      highlightColor: "#cc9966"
    },
    {
      id: "terai" as Region,
      name: regionsData.find(r => r.id === "terai")?.name[language] || "Terai",
      path: "M0,110 L170,120 L165,135 L0,130 Z",
      color: "#e6e6e6", // Light gray for terai
      highlightColor: "#b3b3b3"
    }
  ];
  
  return (
    <div className="relative w-full">
      <svg 
        viewBox="0 0 210 140" 
        className="w-full h-auto border rounded-md overflow-hidden bg-white dark:bg-herb-950/30"
      >
        <g>
          {/* Map regions */}
          {mapRegions.map((region) => {
            const isHighlighted = highlightedRegions.includes(region.id);
            return (
              <path
                key={region.id}
                d={region.path}
                fill={isHighlighted ? region.highlightColor : region.color}
                stroke={isHighlighted ? "#34d399" : "#d1d5db"}
                strokeWidth={isHighlighted ? 2 : 1}
                className={`transition-all duration-300 ${
                  interactive ? "cursor-pointer hover:opacity-80" : ""
                }`}
                onClick={() => interactive && onRegionClick && onRegionClick(region.id)}
              />
            );
          })}
          
          {/* Region labels */}
          {showLabels && mapRegions.map((region, index) => {
            // Calculate approximate center point for the label
            // This is simplified - in a real app you'd compute this more precisely
            const labelPositions = [
              { x: 100, y: 25 },  // Himalayas
              { x: 100, y: 55 },  // High Mountains
              { x: 100, y: 80 },  // Mid Hills
              { x: 100, y: 105 }, // Siwaliks
              { x: 100, y: 125 }  // Terai
            ];
            
            const isHighlighted = highlightedRegions.includes(region.id);
            
            return (
              <g key={`label-${region.id}`}>
                <text
                  x={labelPositions[index].x}
                  y={labelPositions[index].y}
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight={isHighlighted ? "bold" : "normal"}
                  className={`fill-current ${isHighlighted ? "text-herb-900 dark:text-herb-100" : "text-gray-600 dark:text-gray-400"}`}
                >
                  {region.name}
                </text>
                {isHighlighted && (
                  <circle 
                    cx={labelPositions[index].x - 35} 
                    cy={labelPositions[index].y - 3} 
                    r="3" 
                    className="fill-herb-500"
                  />
                )}
              </g>
            );
          })}
        </g>
      </svg>
      
      {/* Legend */}
      {showLabels && (
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {highlightedRegions.length > 0 ? (
            highlightedRegions.map((regionId) => {
              const region = mapRegions.find(r => r.id === regionId);
              if (!region) return null;
              
              return (
                <div key={regionId} className="flex items-center gap-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: region.highlightColor }}
                  />
                  <span>{region.name}</span>
                </div>
              );
            })
          ) : (
            <span className="text-muted-foreground italic">
              {language === "en" 
                ? "No specific regions highlighted" 
                : "कुनै विशेष क्षेत्रहरू हाइलाइट गरिएको छैन"}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default NepalMap;
