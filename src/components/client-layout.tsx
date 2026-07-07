"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/common/preloader";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Stable reference — never changes across re-renders, so preloader effect won't reset
  const handleLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Failsafe: force preloader off after 5 seconds max, regardless of GSAP state
  useEffect(() => {
    const failsafe = setTimeout(() => {
      setIsLoaded(true);
      setIsPreloading(false);
    }, 5000);
    return () => clearTimeout(failsafe);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsPreloading(false);
      }, 500);
    }
  }, [isLoaded]);

  return (
    <>
      {isPreloading && <Preloader onLoaded={handleLoaded} />}
      
      {isClient && <Header />}

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <main>{children}</main>
          {isClient && <Footer />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
