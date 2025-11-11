"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const colors = {
  navy: '#0a192f',
  white: '#ffffff'
};

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/research', label: 'Research' },
    { href: '/process', label: 'Our Process' },
    { href: '/dndx', label: 'DNDX' },
    { href: '/forum', label: 'Forum' },
    { href: '/about', label: 'About' },
  ];

  const NavLink = ({ href, label }: { href: string, label: string }) => {
    const plainPath = href.split('#')[0] || '/';
    const hash = href.includes('#') ? `#${href.split('#')[1]}` : '';
    const isActive = (pathname === plainPath && (hash ? currentHash === hash : true)) || (pathname.startsWith('/projects') && href === '/projects');

    const handleClick = (e: React.MouseEvent) => {
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
    };

    return (
      <Link href={href} onClick={handleClick} className={cn("transition-all duration-300 text-sm font-semibold tracking-wide hover:scale-105")} style={{ color: isActive ? colors.navy : `${colors.navy}99` }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = colors.navy; }}
        onMouseLeave={(e) => { if (!isActive) { (e.currentTarget as HTMLElement).style.color = `${colors.navy}99`; } }}>
        {label}
      </Link>
    );
  };

  const scrollOrNavigate = (href: string, e?: React.MouseEvent) => {
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
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 py-6 px-6 sm:px-12 flex justify-between items-center transition-all duration-300 ease-in-out border-b backdrop-blur-md", isScrolled ? "shadow-lg" : "")} style={{ background: isScrolled ? colors.white : `${colors.white}F8`, borderBottomColor: isScrolled ? `${colors.navy}20` : `${colors.navy}10`, borderBottomWidth: '1px' }}>
      <Link href="/" className="text-2xl font-black tracking-tighter transition-all duration-300 hover:scale-105" style={{ color: colors.navy }}>DEVILSLAB</Link>
      <nav className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => (<NavLink key={link.href} href={link.href} label={link.label} />))}
        <Button asChild className="rounded-full px-8 py-2.5 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg border-2" style={{ background: colors.navy, color: colors.white, borderColor: colors.navy }}>
          <Link href="/#contact" onClick={(e) => scrollOrNavigate('/#contact', e)}>START PROJECT</Link>
        </Button>
      </nav>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild><Button variant="ghost" size="icon" className="hover:bg-opacity-10 transition-colors" style={{ color: colors.navy }}><Menu size={24} /><span className="sr-only">Open menu</span></Button></SheetTrigger>
          <SheetContent side="right" className="p-0 w-full max-w-sm border-l-2" style={{ background: colors.white, color: colors.navy, borderLeftColor: `${colors.navy}20` }}>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b" style={{ borderBottomColor: `${colors.navy}20` }}><Link href="/" className="text-2xl font-black tracking-tighter" style={{ color: colors.navy }}>DEVILSLAB</Link><SheetClose asChild><Button variant="ghost" size="icon" style={{ color: colors.navy }}><X size={24} /><span className="sr-only">Close menu</span></Button></SheetClose></div>
              <nav className="flex flex-col gap-1 p-6">{navLinks.map((link) => { const isActive = pathname === link.href || (pathname.startsWith('/projects') && link.href === '/projects'); return (<SheetClose asChild key={link.href}><Link href={link.href} className="text-lg font-bold rounded-lg p-4 transition-all duration-300 hover:scale-105" style={{ background: isActive ? colors.navy : 'transparent', color: isActive ? colors.white : colors.navy }}>{link.label}</Link></SheetClose>); })}</nav>
              <div className="mt-auto p-6 border-t" style={{ borderTopColor: `${colors.navy}20` }}>
                <SheetClose asChild>
                  <Button asChild className="w-full rounded-full py-6 text-base font-bold border-2 transition-all duration-300 hover:scale-105" style={{ background: colors.navy, color: colors.white, borderColor: colors.navy }}>
                    <Link href="/#contact" onClick={(e) => scrollOrNavigate('/#contact', e)}>START PROJECT</Link>
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
