import { useState, useEffect } from "react";
import { Wine, Camera, Trophy, Coffee, Droplets, Menu, X } from "lucide-react";

const miniServices = [
  { icon: Wine,     label: "EasyFlair",     href: "/services/easyflair", iconClass: "text-easyflair", pillTopHover: "hover:border-easyflair/40", pillScrolledHover: "hover:border-easyflair/40" },
  { icon: Camera,   label: "EasyFlash",     href: "/services/easyflash", iconClass: "text-easyflash", pillTopHover: "hover:border-easyflash/40", pillScrolledHover: "hover:border-easyflash/40" },
  { icon: Trophy,   label: "EasyChallenge", href: "/services/easychallenge", iconClass: "text-easychallenge", pillTopHover: "hover:border-easychallenge/40", pillScrolledHover: "hover:border-easychallenge/40" },
  { icon: Coffee,   label: "EasyRelax",     href: "/services/easyrelax", iconClass: "text-easyrelax", pillTopHover: "hover:border-easyrelax/40", pillScrolledHover: "hover:border-easyrelax/40" },
  { icon: Droplets, label: "EasyToilets",   href: "/services/easytoilets", iconClass: "text-easytoilets", pillTopHover: "hover:border-easytoilets/40", pillScrolledHover: "hover:border-easytoilets/40" },
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
        <a href="/" className="flex items-center gap-2.5 group select-none flex-shrink-0">
          {/* Icon mark */}
          <div className="relative flex-shrink-0">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Diamond background */}
              <path d="M17 1L33 17L17 33L1 17Z" fill="hsl(var(--secondary))" className="transition-all duration-300 group-hover:opacity-90"/>
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

        {/* Service pills — desktop */}
        <nav className="hidden md:flex items-center gap-2 ml-auto">
          {miniServices.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className={`flex items-center gap-1.5 backdrop-blur-sm rounded-full px-3 py-1.5 border transition-all duration-300 cursor-pointer ${
                scrolled
                  ? `bg-foreground/[0.05] border-foreground/[0.10] hover:bg-foreground/[0.10] ${s.pillScrolledHover}`
                  : `bg-white/[0.07] border-white/[0.08] hover:bg-white/[0.13] ${s.pillTopHover}`
              }`}
            >
              <s.icon size={13} className={s.iconClass} />
              <span className={`text-[11px] font-medium whitespace-nowrap ${
                scrolled ? "text-foreground/70" : "text-white/70"
              }`}>{s.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} size={22} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} size={22} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className={`md:hidden border-t px-4 py-3 flex flex-col gap-2 ${scrolled ? "bg-background border-border/50" : "bg-black/60 backdrop-blur-md border-white/10"}`}>
          {miniServices.map((s) => (
            <a
              key={s.label}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 border transition-all duration-200 ${
                scrolled
                  ? `bg-foreground/[0.05] border-foreground/[0.10] hover:bg-foreground/[0.10] ${s.pillScrolledHover}`
                  : `bg-white/[0.07] border-white/[0.08] hover:bg-white/[0.13] ${s.pillTopHover}`
              }`}
            >
              <s.icon size={15} className={s.iconClass} />
              <span className={`text-sm font-medium ${scrolled ? "text-foreground/80" : "text-white/80"}`}>{s.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
