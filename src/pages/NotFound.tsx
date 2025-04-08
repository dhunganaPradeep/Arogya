
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[60vh] py-16">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          {language === "en" 
            ? "The page you're looking for doesn't exist" 
            : "तपाईंले खोज्नुभएको पृष्ठ अवस्थित छैन"}
        </p>
        <Button asChild>
          <Link to="/">
            {language === "en" ? "Go back home" : "गृहपृष्ठमा जानुहोस्"}
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
