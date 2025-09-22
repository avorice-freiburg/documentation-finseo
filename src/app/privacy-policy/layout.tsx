import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/sections/navbar";

export const metadata = getPageMetadata('privacy-policy');

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Independent navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
      
      {/* Full-width content completely outside root layout */}
      <div 
        className="fixed inset-0 bg-background overflow-auto" 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10
        }}
      >
        {children}
      </div>
    </>
  );
}
