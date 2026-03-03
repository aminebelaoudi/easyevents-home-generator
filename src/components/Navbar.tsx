import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#showcase" },
  { label: "Contact", href: "/#cta-final" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-[0_1px_0_0_hsl(215_20%_88%)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group select-none">
          {/* Icon mark */}
          <div className="relative flex-shrink-0">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Diamond background */}
              <path d="M17 1L33 17L17 33L1 17Z" fill="hsl(33,67%,71%)" className="transition-all duration-300 group-hover:fill-[hsl(33,75%,65%)]"/>
              {/* E bars */}
              <rect x="9.5" y="11.5" width="15" height="2.5" rx="1.25" fill="hsl(220,15%,8%)"/>
              <rect x="9.5" y="15.75" width="10" height="2.5" rx="1.25" fill="hsl(220,15%,8%)"/>
              <rect x="9.5" y="20" width="15" height="2.5" rx="1.25" fill="hsl(220,15%,8%)"/>
            </svg>
            {/* Subtle glow on scroll */}
            {scrolled && (
              <div className="absolute inset-0 rounded-full opacity-30 blur-md bg-secondary pointer-events-none" />
            )}
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className={`font-heading font-black text-[17px] md:text-[19px] tracking-tight transition-colors ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
              Easy<span className="text-secondary">Events</span>
            </span>
            <span className={`font-heading font-medium text-[9px] uppercase tracking-[0.25em] transition-colors leading-none mt-[2px] ${scrolled ? "text-primary/40" : "text-primary-foreground/40"}`}>
              Group
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-tight transition-colors relative group ${
                scrolled ? "text-foreground hover:text-secondary" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                scrolled ? "bg-secondary" : "bg-primary-foreground/60"
              }`} />
            </a>
          ))}
          <Button variant={scrolled ? "secondary" : "heroOutline"} size="default" asChild>
            <a href="/#cta-final">Demander un devis</a>
          </Button>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground font-medium py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" size="lg" className="mt-2" asChild>
                <a href="/#cta-final" onClick={() => setMobileOpen(false)}>
                  Demander un devis
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
