
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden rounded-full"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px]">
        <nav className="flex flex-col mt-8 space-y-4">
          <Link 
            to="/" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <Link 
            to="/herbs" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.herbs")}
          </Link>
          <Link 
            to="/herb-knowledge" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.knowledge")}
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.about")}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
