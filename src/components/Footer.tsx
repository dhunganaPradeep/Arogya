
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
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
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === "en" ? "Contact Info" : "सम्पर्क जानकारी"}
            </h3>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-herb-500" />
                  <span>Kathmandu, Nepal</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-herb-500" />
                  <span>+977-9800000000</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-herb-500" />
                  <span>info@arogya.np</span>
                </li>
              </ul>
            </address>
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
            <a href="#" className="text-muted-foreground hover:text-primary">
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
            <a href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
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
