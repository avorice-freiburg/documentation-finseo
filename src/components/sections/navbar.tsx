"use client";

import { Icons } from "@/components/icons";
import { NavMenu } from "@/components/nav-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { 
  Menu, 
  X, 
  UserIcon, 
  Building2Icon, 
  MapIcon, 
  BarChart3Icon, 
  FileEditIcon, 
  BookOpenIcon, 
  HelpCircleIcon,
  LogIn,
  ChevronRight,
  FileCode2Icon,
  ArrowLeft,
  DollarSign,
  Handshake
} from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "900px";

// Navigation pages enum (simplified)
type NavigationPage = 'main';

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.2 },
  },
};

const pageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.03,
    }
  },
  exit: { 
    opacity: 0, 
    x: -50,
    transition: { duration: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Simplified navigation - no sub-pages needed
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.nav.links.map((item) =>
        item.href.substring(1),
      );

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setIsDrawerOpen(false);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  // Handle scrolling when page loads with hash
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.slice(1);
      // Wait a bit for the page to render
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [pathname]);

  // Smooth scroll function for mobile
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close the mobile drawer after scrolling
    setIsDrawerOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    // If we're on the homepage, scroll directly
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage with hash, then close drawer
      router.push(`/#${sectionId}`);
      setIsDrawerOpen(false);
    }
  };

  // Main navigation categories
  const mainCategories = [
    {
      id: 'why-finseo',
      title: 'Why Finseo?',
      description: 'Scroll to problems section',
      icon: UserIcon,
      color: 'bg-blue-500',
      scrollTo: 'bento',
    },
    {
      id: 'features',
      title: 'Features',
      description: 'Scroll to features section',
      icon: BarChart3Icon,
      color: 'bg-green-500',
      scrollTo: 'features',
    },
    {
      id: 'pricing',
      title: 'Pricing',
      description: 'Scroll to pricing section',
      icon: DollarSign,
      color: 'bg-orange-500',
      scrollTo: 'pricing',
    },
    {
      id: 'affiliate',
      title: 'Affiliate',
      description: 'Partner program',
      icon: Handshake,
      color: 'bg-pink-500',
      href: '/seo-ai-affiliate-program',
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch with us',
      icon: HelpCircleIcon,
      color: 'bg-purple-500',
      href: '/support',
    },
  ];

  const renderMainPage = () => (
    <motion.div
      key="main"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex-1 p-6"
    >

      <div className="space-y-3">
        {mainCategories.map((category, index) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            custom={index}
          >
            {category.href ? (
              <Link
                href={category.href}
                onClick={closeDrawer}
                className="group flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center shadow-sm`}>
                    <category.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-primary">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ) : (
              <button
                onClick={() => category.scrollTo ? handleSectionClick(category.scrollTo) : undefined}
                className="group w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:bg-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center shadow-sm`}>
                    <category.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-sm text-primary">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Action buttons */}
      <motion.div variants={itemVariants} className="mt-8 space-y-3">
        <Link
          href="https://app.finseo.ai/signup"
          className="bg-secondary h-12 flex items-center justify-center text-sm font-medium rounded-xl text-primary-foreground dark:text-secondary-foreground w-full shadow-lg hover:bg-secondary/90 transition-colors"
          onClick={closeDrawer}
        >
          Get started
        </Link>
        <Link
          href="https://app.finseo.ai/signin"
          className="h-12 flex items-center justify-center text-sm font-medium rounded-xl border border-border hover:bg-accent transition-colors w-full"
          onClick={closeDrawer}
        >
          Sign In
        </Link>
      </motion.div>
    </motion.div>
  );

  const renderWhyFinseoPage = () => (
    <motion.div
      key="why-finseo"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex-1 p-6"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-xl font-semibold text-primary mb-2">Why Finseo</h2>
        <p className="text-sm text-muted-foreground">Solutions tailored for your team</p>
      </motion.div>

      <div className="space-y-6">
        {/* For Teams */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <UserIcon size={16} className="text-blue-500" />
            </div>
            <h3 className="font-medium text-sm">For Teams</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { title: 'Agencies', href: '/for-agencies', desc: 'Scale your SEO services' },
              { title: 'Enterprise', href: '/for-enterprise', desc: 'Enterprise-grade solutions' },
              { title: 'SMBs', href: '/for-smbs', desc: 'Small business growth' },
              { title: 'Entrepreneurs', href: '/for-entrepreneurs', desc: 'Solo founder tools' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeDrawer}
                className="group flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <div className="font-medium text-sm text-primary">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Company */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Building2Icon size={16} className="text-green-500" />
            </div>
            <h3 className="font-medium text-sm">Company</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { title: 'Careers', href: '/careers', desc: 'Join our team' },
              { title: 'Affiliate Program', href: '/seo-ai-affiliate-program', desc: 'Earn with us' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeDrawer}
                className="group flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <div className="font-medium text-sm text-primary">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderFeaturesPage = () => (
    <motion.div
      key="features"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex-1 p-6"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-xl font-semibold text-primary mb-2">Features</h2>
        <p className="text-sm text-muted-foreground">Powerful tools for SEO success</p>
      </motion.div>

      <div className="space-y-6">
        {/* AI Analytics */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <MapIcon size={16} className="text-purple-500" />
            </div>
            <h3 className="font-medium text-sm">AI Analytics</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Link
              href="/ai-visibility-tracking"
              onClick={closeDrawer}
              className="group flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <div>
                <div className="font-medium text-sm text-primary">AI Visibility Tracking</div>
                <div className="text-xs text-muted-foreground">Monitor AI platform mentions</div>
              </div>
              <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
            </Link>
          </div>
        </motion.div>

        {/* AI SEO Tools */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
              <BarChart3Icon size={16} className="text-green-500" />
            </div>
            <h3 className="font-medium text-sm">AI SEO Tools</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { title: 'Technical Analysis', href: '/onpage-checker', desc: 'AI-powered technical SEO audit' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeDrawer}
                className="group flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <div className="font-medium text-sm text-primary">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>


      </div>
    </motion.div>
  );

  const renderResourcesPage = () => (
    <motion.div
      key="resources"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex-1 p-6"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-xl font-semibold text-primary mb-2">Resources</h2>
        <p className="text-sm text-muted-foreground">Learn, integrate, and get support</p>
      </motion.div>

      <div className="space-y-6">
        {/* Documentation */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <BookOpenIcon size={16} className="text-blue-500" />
            </div>
            <h3 className="font-medium text-sm">Learn & Support</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { title: 'Blog', href: '/blog', desc: 'SEO tips and insights' },
              { title: 'Support', href: '/support', desc: 'Get help when you need it' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeDrawer}
                className="group flex items-center justify-between p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <div className="font-medium text-sm text-primary">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>


      </div>
    </motion.div>
  );

  const renderCurrentPage = () => {
    return renderMainPage();
  };

  return (
    <header
      className={cn(
        "sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0",
        hasScrolled ? "top-6" : "top-4 mx-0",
      )}
    >
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300  xl:px-0",
            hasScrolled
              ? "px-2 border border-border backdrop-blur-lg bg-background/75"
              : "shadow-none px-7",
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-16 h-16 md:w-24 md:h-24 relative">
                <img src="/finseo-light-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 dark:opacity-0" />
                <img src="/finseo-dark-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 opacity-0 dark:opacity-100" />
              </div>
            </Link>

            <div className="hidden md:flex justify-center flex-1">
              <NavMenu />
            </div>

            <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
              <div className="flex items-center space-x-2">
                <Link
                  className="bg-secondary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-md text-primary-foreground dark:text-secondary-foreground w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                  href="https://app.finseo.ai/signup"
                >
                  Get started
                </Link>
                <Link
                  className="h-8 hidden md:flex items-center justify-center rounded-md border border-border hover:bg-accent transition-colors p-2"
                  href="https://app.finseo.ai/signin"
                  title="Sign In"
                >
                  <LogIn className="size-4" />
                </Link>
              </div>
              <button
                data-cal-link="finseo/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                className="md:hidden bg-secondary h-8 flex items-center justify-center text-xs font-normal tracking-wide rounded-md text-primary-foreground dark:text-secondary-foreground px-3 cursor-pointer"
              >
                Get Demo
              </button>
              <ThemeToggle />
              <button
                className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center hover:bg-accent transition-colors"
                onClick={toggleDrawer}
              >
                {isDrawerOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="fixed inset-0 bg-background z-50 overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3" onClick={closeDrawer}>
                      <div className="w-20 h-8 relative">
                        <img src="/finseo-light-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 dark:opacity-0" />
                        <img src="/finseo-dark-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 opacity-0 dark:opacity-100" />
                      </div>
                    </Link>
                  </div>
                  <button
                    onClick={toggleDrawer}
                    className="border border-border rounded-lg p-2 hover:bg-accent transition-colors"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {renderCurrentPage()}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
