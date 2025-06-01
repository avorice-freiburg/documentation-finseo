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
  LogIn
} from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "900px";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

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
                  Try for free
                </Link>
                <Link
                  className="h-8 hidden md:flex items-center justify-center rounded-md border border-border hover:bg-accent transition-colors p-2"
                  href="https://app.finseo.ai/signin"
                  title="Sign In"
                >
                  <LogIn className="size-4" />
                </Link>
              </div>
              <ThemeToggle />
              <button
                className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-3">
                    <div className="w-16 h-16 md:w-28 md:h-28 relative">
                      <img src="/finseo-light-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 dark:opacity-0" />
                      <img src="/finseo-dark-logo.svg" alt="Finseo Logo" className="size-full absolute inset-0 opacity-0 dark:opacity-100" />
                    </div>
                    <p className="text-lg font-semibold text-primary">
                      Finseo
                    </p>
                  </Link>
                  <button
                    onClick={toggleDrawer}
                    className="border border-border rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <motion.ul
                  className="flex flex-col text-sm mb-4 border border-border rounded-md"
                  variants={drawerMenuContainerVariants}
                >
                  <AnimatePresence>
                    <motion.li
                      className="p-2.5 border-b border-border"
                      variants={drawerMenuVariants}
                    >
                      <span className="text-muted-foreground font-medium text-xs uppercase tracking-wide">Why Finseo</span>
                      <div className="mt-2 space-y-2">
                        <div>
                          <h4 className="text-primary font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                            <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                              <UserIcon size={16} className="text-[#0eca7b]" />
                            </span>
                            For
                          </h4>
                          <ul className="space-y-0.5 pl-0">
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">For Agencies</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">For Enterprises</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">For SMBs</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">For Entrepreneurs</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-primary font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                            <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                              <Building2Icon size={16} className="text-[#0eca7b]" />
                            </span>
                            Company
                          </h4>
                          <ul className="space-y-0.5 pl-0">
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">About Finseo</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Case Studies</a></li>
                          </ul>
                        </div>
                      </div>
                    </motion.li>
                    <motion.li
                      className="p-2.5 border-b border-border"
                      variants={drawerMenuVariants}
                    >
                      <span className="text-muted-foreground font-medium text-xs uppercase tracking-wide">Features</span>
                      <div className="mt-2 space-y-2">
                        <div>
                          <h4 className="text-primary font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                            <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                              <MapIcon size={16} className="text-[#0eca7b]" />
                            </span>
                            GEO
                          </h4>
                          <ul className="space-y-0.5 pl-0">
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">AI Visibility Tracking</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Snippet Creation</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Local Rankings</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-primary font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                            <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                              <BarChart3Icon size={16} className="text-[#0eca7b]" />
                            </span>
                            SEO
                          </h4>
                          <ul className="space-y-0.5 pl-0">
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Backlink Data</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Keywords Analysis</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">OnPage Audit</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Accessibility Check</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-primary font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                            <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                              <FileEditIcon size={16} className="text-[#0eca7b]" />
                            </span>
                            Content
                          </h4>
                          <ul className="space-y-0.5 pl-0">
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Article Generation</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Chart Generation</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Image Generation</a></li>
                          </ul>
                        </div>
                      </div>
                    </motion.li>
                    <motion.li
                      className="p-2.5 border-b border-border"
                      variants={drawerMenuVariants}
                    >
                      <span className="text-muted-foreground font-medium text-xs uppercase tracking-wide">Resources</span>
                      <div className="mt-2 space-y-2">
                        <div>
                          <h4 className="text-primary font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                            <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                              <BookOpenIcon size={16} className="text-[#0eca7b]" />
                            </span>
                            Documentation
                          </h4>
                          <ul className="space-y-0.5 pl-0">
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Blog</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">What's New</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Help Center</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-primary font-bold text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                            <span className="inline-flex p-2 rounded-md bg-[#0eca7b]/10 w-8 h-8 items-center justify-center">
                              <HelpCircleIcon size={16} className="text-[#0eca7b]" />
                            </span>
                            Support
                          </h4>
                          <ul className="space-y-0.5 pl-0">
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Contact Support</a></li>
                            <li><a href="#" className="text-sm leading-tight hover:text-primary hover:underline">Community Forum</a></li>
                          </ul>
                        </div>
                      </div>
                    </motion.li>
                    <motion.li
                      className="p-2.5 border-b-0 border-border"
                      variants={drawerMenuVariants}
                    >
                      <a 
                        href="#pricing" 
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById("pricing");
                          element?.scrollIntoView({ behavior: "smooth" });
                          setIsDrawerOpen(false);
                        }}
                        className="text-muted-foreground font-medium text-xs uppercase tracking-wide hover:text-primary hover:underline"
                      >
                        Pricing
                      </a>
                    </motion.li>
                    <motion.li
                      className="p-2.5 border-b-0 border-border"
                      variants={drawerMenuVariants}
                    >
                      <a href="#affiliate" className="text-muted-foreground font-medium text-xs uppercase tracking-wide hover:text-primary hover:underline">Affiliate</a>
                    </motion.li>
                  </AnimatePresence>
                </motion.ul>

                {/* Action buttons */}
                <div className="flex flex-col gap-2">
                  <Link
                    href="https://app.finseo.ai/signup"
                    className="bg-secondary h-8 flex items-center justify-center text-sm font-normal tracking-wide rounded-md text-primary-foreground dark:text-secondary-foreground w-full px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
                  >
                    Try for free
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
