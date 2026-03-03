import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import easyflairImg from "@/assets/easyflair-bar.jpg";
import easyflashImg from "@/assets/easyflash-photobooth.jpg";
import easychallengeImg from "@/assets/easychallenge-team.jpg";
import heroImg from "@/assets/hero-event.jpg";

const tabs = ["Tous", "Corporate", "Mariage", "Team Building", "Festival"] as const;
type Tab = (typeof tabs)[number];

const events = [
  {
    image: easyflairImg,
    title: "Cocktail d'entreprise à Genève",
    service: "EasyFlair + EasyFlash",
    category: "Corporate",
  },
  {
    image: easyflashImg,
    title: "Soirée de gala — Vidéo 360°",
    service: "EasyFlash",
    category: "Corporate",
  },
  {
    image: easychallengeImg,
    title: "Team building outdoor — Lausanne",
    service: "EasyChallenge",
    category: "Team Building",
  },
  {
    image: heroImg,
    title: "Mariage premium — Lac Léman",
    service: "EasyFlair + EasyFlash + EasyRelax",
    category: "Mariage",
  },
  {
    image: easyflairImg,
    title: "Festival d'été — Nyon",
    service: "EasyFlair + EasyToilets",
    category: "Festival",
  },
  {
    image: easychallengeImg,
    title: "Séminaire immersif — Montreux",
    service: "EasyChallenge + EasyRelax",
    category: "Corporate",
  },
];

const ShowcaseSection = () => {
  const [active, setActive] = useState<Tab>("Tous");

  const filtered =
    active === "Tous" ? events : events.filter((e) => e.category === active);

  return (
    <section id="showcase" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-secondary font-heading font-bold text-xs uppercase tracking-[0.18em] mb-3 bg-secondary/10 px-4 py-1.5 rounded-full">
            Réalisations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Nos derniers événements
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                active === tab
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-button-primary)]"
                  : "bg-card border border-border text-muted-foreground hover:border-secondary/50 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((e, i) => (
              <motion.div
                key={e.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-card hover:shadow-card-hover"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Base overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category pill */}
                <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                  {e.category}
                </div>
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-heading font-bold text-primary-foreground text-sm leading-snug mb-0.5">
                    {e.title}
                  </p>
                  <p className="text-primary-foreground/65 text-xs">{e.service}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            Voir tous les événements
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
