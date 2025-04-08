
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showVideo?: boolean;
}

const Layout = ({ children, showVideo = false }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-white to-herb-50/30 dark:from-herb-950 dark:to-herb-900/30">
      {!showVideo && (
        // Background decorative elements - only show when video is not shown
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-herb-100 dark:bg-herb-800/20 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-herb-50 dark:bg-herb-800/10 rounded-full opacity-30 blur-3xl"></div>
        </div>
      )}
      
      <Header />
      
      <main className="flex-1 relative">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
