import { motion } from "framer-motion";
import { Wine, Camera, Trophy, Coffee, Droplets, ArrowUpRight } from "lucide-react";
import easyflairImg from "@/assets/easyflair-bar.jpg";
import easyflashImg from "@/assets/easyflash-photobooth.jpg";
import easychallengeImg from "@/assets/easychallenge-team.jpg";
import heroImg from "@/assets/hero-event.jpg";
import easytoiletImg from "@/assets/easytoilet.png";

// Unified brand color — beige doré secondaire
const ACCENT = "hsl(33, 67%, 71%)";
const ACCENT_ALPHA = "hsla(33, 67%, 71%, 0.20)";

const services = [
  {
    id: "easyflair",
    icon: Wine,
    badge: "EasyFlair",
    title: "Bars mobiles & Mixologie",
    desc: "Barmans jongleurs et cocktails signatures pour vos soirées d'entreprise, mariages et galas en Suisse romande.",
    image: easyflairImg,
    gridClass: "md:col-span-2 lg:col-span-2",
    href: "/services/easyflair",
  },
  {
    id: "easyflash",
    icon: Camera,
    badge: "EasyFlash",
    title: "Photobooths & Expériences photo",
    desc: "Photobooth 360°, miroir magique et EasyBox pour des souvenirs personnalisés et instantanés.",
    image: easyflashImg,
    gridClass: "lg:col-span-2",
    href: "/services/easyflash",
  },
  {
    id: "easychallenge",
    icon: Trophy,
    badge: "EasyChallenge",
    title: "Team Building & Animations",
    desc: "Défis ludiques, émissions et jeux indoor/outdoor pour renforcer la cohésion de vos équipes.",
    image: easychallengeImg,
    gridClass: "",
    href: "/services/easychallenge",
  },
  {
    id: "easyrelax",
    icon: Coffee,
    badge: "EasyRelax",
    title: "Espaces Lounge & Détente",
    desc: "Création d'espaces lounge premium et ambiance feutrée pour vos événements haut de gamme.",
    image: heroImg,
    gridClass: "",
    href: "/services/easyrelax",
  },
  {
    id: "easytoilets",
    icon: Droplets,
    badge: "EasyToilets",
    title: "Sanitaires Premium",
    desc: "Unités sanitaires mobiles haut de gamme, élégantes pour accueillir vos invités avec soin.",
    image: easytoiletImg,
    gridClass: "lg:col-span-2",
    href: "/services/easytoilets",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden bg-muted/40"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-secondary/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "hsla(33, 95%, 52%, 0.06)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2.5 text-secondary font-heading font-semibold text-[11px] uppercase tracking-[0.22em] mb-5">
            <span className="w-8 h-px bg-secondary/40" />
            Nos services
            <span className="w-8 h-px bg-secondary/40" />
          </span>
          <h2 className="font-heading text-3xl md:text-[2.75rem] lg:text-5xl font-extrabold text-foreground tracking-tight mb-4 leading-[1.12]">
            Cinq expertises,{" "}
            <span className="text-gradient-gold">un seul groupe</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-[15px] leading-relaxed">
            Des spécialistes complémentaires pour couvrir chaque aspect de votre événement.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[320px] gap-4 md:gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href={s.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-500 ${s.gridClass}`}
            >
              {/* BG image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent group-hover:from-black/70 group-hover:via-black/15 transition-all duration-500" />

              {/* Subtle inner border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.06] pointer-events-none z-10" />

              {/* Unified brand glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{ boxShadow: `inset 0 0 0 1.5px ${ACCENT}, 0 0 40px -8px ${ACCENT}` }}
              />

              {/* Number watermark */}
              <span className="absolute top-1 left-4 font-heading text-white/[0.06] text-[5.5rem] font-black leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Badge – fades out on hover */}
              <div className="absolute top-4 right-4 z-20 group-hover:opacity-0 transition-opacity duration-200">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-heading font-bold tracking-wider shadow-lg"
                  style={{ backgroundColor: ACCENT, color: "hsl(220, 15%, 8%)" }}
                >
                  {s.badge}
                </span>
              </div>

              {/* Arrow – fades in on hover */}
              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-2.5 border border-white/10">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
                {/* Icon chip */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm border border-white/[0.08] group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: ACCENT_ALPHA }}
                >
                  <s.icon size={18} style={{ color: ACCENT }} />
                </div>

                <h3 className="font-heading text-white text-base md:text-lg font-bold tracking-tight leading-snug mb-1">
                  {s.title}
                </h3>

                {/* Description – reveals on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white/55 text-sm leading-relaxed pt-1.5">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
