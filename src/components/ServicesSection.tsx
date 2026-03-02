import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wine, Camera, Trophy, Check } from "lucide-react";
import easyflairImg from "@/assets/easyflair-bar.jpg";
import easyflashImg from "@/assets/easyflash-photobooth.jpg";
import easychallengeImg from "@/assets/easychallenge-team.jpg";

const services = [
  {
    id: "easyflair",
    icon: Wine,
    badge: "EasyFlair",
    badgeClass: "bg-easyflair/10 text-easyflair",
    title: "EasyFlair – Bars mobiles & mixologie",
    desc: "Barmans jongleurs, bars mobiles et cocktails signatures pour mariages, soirées privées et événements corporate.",
    bullets: [
      "Barmans jongleurs & mixologues",
      "Bars mobiles personnalisables",
      "Animation cocktail sur mesure",
    ],
    image: easyflairImg,
    buttonVariant: "easyflair" as const,
    cta: "Découvrir EasyFlair",
  },
  {
    id: "easyflash",
    icon: Camera,
    badge: "EasyFlash",
    badgeClass: "bg-easyflash/10 text-easyflash",
    title: "EasyFlash – Photobooths & expériences photo",
    desc: "Photobooths dernière génération, vidéo 360° et miroir magique pour des souvenirs fun et personnalisés.",
    bullets: [
      "EasyBox, vidéo 360°, miroir magique",
      "Personnalisation aux couleurs de l'événement",
      "Impression et partage instantanés",
    ],
    image: easyflashImg,
    buttonVariant: "easyflash" as const,
    cta: "Découvrir EasyFlash",
  },
  {
    id: "easychallenge",
    icon: Trophy,
    badge: "EasyChallenge",
    badgeClass: "bg-easychallenge/10 text-easychallenge",
    title: "EasyChallenge – Team building & jeux",
    desc: "Émissions, défis et activités sur mesure pour renforcer la cohésion de vos équipes.",
    bullets: [
      "Concepts ludiques type émissions",
      "Animations indoor & outdoor",
      "Expériences sur mesure pour entreprises",
    ],
    image: easychallengeImg,
    buttonVariant: "easychallenge" as const,
    cta: "Découvrir EasyChallenge",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 block">
            Nos services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trois expertises, un seul groupe
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${s.badgeClass} rounded-full px-3 py-1 text-xs font-heading font-semibold`}>
                  {s.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {s.desc}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button variant={s.buttonVariant} size="lg" className="w-full">
                  {s.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
