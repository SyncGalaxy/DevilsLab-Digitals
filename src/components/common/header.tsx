"use client";

import { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#selected-work', label: 'Work' },
  { href: '/quotation', label: 'Get Quote' },
  { href: '/#how-we-work', label: 'How We Work' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [currentHash, setCurrentHash] = useState<string>('');

  useEffect(() => {
    // keep current hash for active link highlighting
    const readHash = () => setCurrentHash(typeof window !== 'undefined' ? window.location.hash : '');
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollOrNavigate = useCallback((href: string, e?: React.MouseEvent) => {
    const hash = href.includes('#') ? `#${href.split('#')[1]}` : '';
    if (hash && pathname === '/') {
      e?.preventDefault();
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', hash);
        setCurrentHash(hash);
        return;
      }
    }
    // fallback: navigate via router
    router.push(href);
  }, [pathname, router]);

  const NavLink = memo(({ href, label }: { href: string, label: string }) => {
    const plainPath = href.split('#')[0] || '/';
    const hash = href.includes('#') ? `#${href.split('#')[1]}` : '';
    const isActive = (pathname === plainPath && (hash ? currentHash === hash : true)) || (pathname.startsWith('/projects') && href === '/projects');

    const handleClick = useCallback((e: React.MouseEvent) => {
      // Smooth-scroll for same-page anchors when already on the page
      if (hash && pathname === '/') {
        e.preventDefault();
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // update hash without jumping
          history.replaceState(null, '', hash);
          setCurrentHash(hash);
        } else {
          // fallback: navigate
          router.push(href);
        }
        return;
      }

      // Let Link/router handle cross-page navigation
    }, [hash]);

    return (
      <Link 
        href={href} 
        onClick={handleClick} 
        className={cn("transition-all duration-300 text-sm font-medium tracking-normal hover:opacity-60", isActive ? "text-gray-900" : "text-gray-600")} 
      >
        {label}
      </Link>
    );
  });

  NavLink.displayName = 'NavLink';


  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 py-5 px-6 sm:px-8 lg:px-16 flex justify-between items-center transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/80 backdrop-blur-sm")} >
      <Link href="/" className="text-lg font-semibold text-[#1e293b] hover:opacity-70 transition-opacity">
        devilsLab <span className="font-normal text-gray-600">Digitals</span>
      </Link>
      <nav className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => (<NavLink key={link.href} href={link.href} label={link.label} />))}
        <Button asChild className="rounded-full px-6 py-2 text-sm font-medium bg-[#4f7cff] hover:bg-[#4f7cff]/90 border-0 text-white transition-all">
          <Link href="/#contact" onClick={(e) => scrollOrNavigate('/#contact', e)}>Get STARTED</Link>
        </Button>
      </nav>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild><Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors text-gray-900"><Menu size={24} /><span className="sr-only">Open menu</span></Button></SheetTrigger>
          <SheetContent side="right" className="p-0 w-full max-w-sm border-l-2 border-gray-200 bg-white">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-200"><Link href="/" className="text-xl font-semibold text-[#1e293b]">devilsLab <span className="font-normal text-gray-600">Digitals</span></Link><SheetClose asChild><Button variant="ghost" size="icon" className="text-gray-900"><X size={24} /><span className="sr-only">Close menu</span></Button></SheetClose></div>
              <nav className="flex flex-col gap-1 p-6">{navLinks.map((link) => { const isActive = pathname === link.href || (pathname.startsWith('/projects') && link.href === '/projects'); return (<SheetClose asChild key={link.href}><Link href={link.href} className={cn("text-base font-medium rounded-lg p-4 transition-all", isActive ? "bg-[#4f7cff] text-white" : "text-gray-900 hover:bg-gray-100")}>{link.label}</Link></SheetClose>); })}</nav>
              <div className="mt-auto p-6 border-t border-gray-200">
                <SheetClose asChild>
                  <Button asChild className="w-full rounded-full py-6 text-base font-semibold bg-[#4f7cff] text-white hover:bg-[#4f7cff]/90 border-0 transition-all">
                    <Link href="/#contact" onClick={(e) => scrollOrNavigate('/#contact', e)}>Get STARTED</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
