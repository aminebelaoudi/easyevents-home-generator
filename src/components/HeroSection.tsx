import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-event.jpg";

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
              "linear-gradient(150deg, hsl(230 28% 8% / 0.9) 0%, hsl(245 45% 18% / 0.78) 48%, hsl(200 100% 52% / 0.3) 100%)",
          }}
        />
        {/* Modern shimmer accent – coin haut droit */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, hsl(245 80% 64% / 0.2) 0%, transparent 60%)",
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
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-easyflash via-easychallenge to-easytoilets animate-pulse" />
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
            <span className="text-gradient-festive">événementiel</span>{" "}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap items-center gap-3 mt-5"
          >
            {[
              { name: "EasyFlair", dot: "bg-easyflair" },
              { name: "EasyFlash", dot: "bg-easyflash" },
              { name: "EasyChallenge", dot: "bg-easychallenge" },
              { name: "EasyRelax", dot: "bg-easyrelax" },
              { name: "EasyToilets", dot: "bg-easytoilets" },
            ].map((service) => (
              <span key={service.name} className="inline-flex items-center gap-1.5 text-primary-foreground/75 text-xs font-heading font-semibold tracking-wide">
                <span className={`w-2 h-2 rounded-full ${service.dot}`} />
                {service.name}
              </span>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;