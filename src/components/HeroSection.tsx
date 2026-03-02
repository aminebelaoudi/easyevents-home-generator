import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wine, Camera, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const miniServices = [
  {
    icon: Wine,
    name: "EasyFlair",
    desc: "Bars & Cocktails",
    color: "bg-easyflair",
    href: "#services",
  },
  {
    icon: Camera,
    name: "EasyFlash",
    desc: "Photobooths & Photo",
    color: "bg-easyflash",
    href: "#services",
  },
  {
    icon: Trophy,
    name: "EasyChallenge",
    desc: "Team building & Animations",
    color: "bg-easychallenge",
    href: "#services",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Événement corporate à Genève"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>

      <div className="container mx-auto relative z-10 px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance"
          >
            Partenaire événementiel moderne pour agences et entreprises en Suisse romande
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed"
          >
            EasyEvents Group réunit plusieurs sociétés expertes en bars mobiles, photobooths et animations team building, basées à Genève et actives dans toute la Suisse romande.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button variant="secondary" size="xl" asChild>
              <a href="#services">Découvrir nos services</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#cta-final">Demander un devis</a>
            </Button>
          </motion.div>
        </div>

        {/* Mini service cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {miniServices.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-md rounded-xl p-4 border border-primary-foreground/15 hover:bg-primary-foreground/20 transition-all duration-200 group"
            >
              <div className={`${s.color} rounded-lg p-2.5 text-primary-foreground`}>
                <s.icon size={22} />
              </div>
              <div>
                <div className="font-heading font-semibold text-primary-foreground text-sm">
                  {s.name}
                </div>
                <div className="text-primary-foreground/60 text-xs">{s.desc}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
