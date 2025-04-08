
import { Link } from "react-router-dom";
import { Sun, Moon, Leaf } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-herb-500" />
          <Link to="/" className="flex items-center gap-1">
            <span className="text-xl font-bold">{t("site.name")}</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.home")}
          </Link>
          <Link 
            to="/herbs" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.herbs")}
          </Link>
          <Link 
            to="/herb-knowledge" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.knowledge")}
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.about")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "ne" : "en")}
            aria-label="Toggle language"
            className="rounded-full"
          >
            <span className="sr-only">Toggle Language</span>
            <span className="text-sm font-semibold">
              {language === "en" ? "NE" : "EN"}
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
