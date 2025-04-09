
import { Leaf } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-herb-500" />
              <span className="text-lg font-semibold">{t("site.name")}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en" 
                ? "Discover Nepal's rich botanical heritage through our comprehensive collection of medicinal herbs."
                : "हाम्रो व्यापक औषधीय जडीबुटी संग्रह मार्फत नेपालको समृद्ध वनस्पति सम्पदा पत्ता लगाउनुहोस्।"}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === "en" ? "Quick Links" : "द्रुत लिङ्कहरू"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/herbs" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.herbs")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === "en" ? "Popular Categories" : "लोकप्रिय श्रेणीहरू"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/herbs?use=respiratory" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "en" ? "Respiratory Health" : "श्वासप्रश्वास स्वास्थ्य"}
                </Link>
              </li>
              <li>
                <Link to="/herbs?use=digestive" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "en" ? "Digestive Health" : "पाचन स्वास्थ्य"}
                </Link>
              </li>
              <li>
                <Link to="/herbs?use=immune" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "en" ? "Immune Support" : "रोग प्रतिरोधात्मक समर्थन"}
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t("about.credit")}{" "}
            <a
              href="https://dhunganapradip.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Pradip Dhungana
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/thatguypradip/" target="_blank" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://github.com/dhunganaPradeep" target="_blank" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">GitHub</span>
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
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.13-1.1-1.43-1.1-1.43-.9-.61.07-.6.07-.6 1 .07 1.53 1 1.53 1 .88 1.51 2.31 1.07 2.88.82.09-.64.34-1.07.62-1.32-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.35 4.68-4.58 4.92.35.3.66.89.66 1.8v2.67c0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/>
            </svg>
          </a>
            <a href="https://www.instagram.com/pradeep_dhungana/" target="_blank" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
