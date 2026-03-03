import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wine, Camera, Trophy, Coffee, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const miniServices = [
  { icon: Wine,     label: "EasyFlair",     href: "/services/easyflair" },
  { icon: Camera,   label: "EasyFlash",     href: "/services/easyflash" },
  { icon: Trophy,   label: "EasyChallenge", href: "/services/easychallenge" },
  { icon: Coffee,   label: "EasyRelax",     href: "/services/easyrelax" },
  { icon: Droplets, label: "EasyToilets",   href: "/services/easytoilets" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Événement festif en Suisse romande"
          className="w-full h-full object-cover"
        />
        {/* Warm luminous overlay – charcoal dégradé vers doré transparent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, hsl(220 20% 6% / 0.88) 0%, hsl(25 30% 12% / 0.72) 45%, hsl(33 60% 55% / 0.28) 100%)",
          }}
        />
        {/* Golden shimmer accent – coin haut droit */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, hsl(38 90% 65% / 0.18) 0%, transparent 60%)",
          }}
        />
        {/* Warm vignette bas */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, hsl(220 15% 5% / 0.65) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 px-4 pt-24 pb-16 md:pt-28 md:pb-20">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-primary-foreground/90 text-xs font-heading font-semibold tracking-widest uppercase">
            Genève · Suisse romande
          </span>
        </motion.div>

        <div className="max-w-2xl mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-heading text-3xl md:text-4xl lg:text-[2.9rem] font-extrabold text-primary-foreground leading-[1.12] mb-5 text-balance tracking-tight"
          >
            Votre partenaire{" "}
            <span className="text-secondary">événementiel</span>{" "}
            haut de gamme
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-base md:text-lg text-primary-foreground/75 mb-8 max-w-xl leading-relaxed"
          >
            Bars mobiles, photobooths, team building, espaces lounge et sanitaires premium — tout ce qu'il faut pour un événement inoubliable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button variant="secondary" size="xl" asChild>
              <a href="#services">Découvrir nos services</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#cta-final">Demander un devis</a>
            </Button>
          </motion.div>
        </div>

        {/* Compact service icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="flex items-center gap-4 mt-10"
        >
          <span className="text-white/30 text-[11px] font-heading font-medium tracking-wide uppercase hidden sm:block">Nos expertises</span>
          <span className="w-6 h-px bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            {miniServices.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                className="flex items-center gap-1.5 bg-white/[0.07] backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/[0.08] hover:bg-white/[0.13] hover:border-secondary/30 transition-all duration-300 cursor-pointer"
              >
                <s.icon size={13} className="text-secondary/80" />
                <span className="text-white/70 text-[11px] font-medium whitespace-nowrap">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;