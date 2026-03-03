import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Directrice RH",
    company: "Banque Privée",
    location: "Genève",
    event: "Soirée d'entreprise",
    avatar: "ML",
    rating: 5,
    text: "EasyEvents a transformé notre soirée d'entreprise en un moment absolument inoubliable. Les barmans jongleurs d'EasyFlair ont épaté toute notre équipe, et le photobooth 360° était la star de la soirée. Service impeccable du début à la fin.",
    featured: true,
  },
  {
    name: "Pierre D.",
    role: "Chef de projet",
    company: "Agence Prime Events",
    location: "Lausanne",
    event: "Mariage – Lac Léman",
    avatar: "PD",
    rating: 5,
    text: "En tant qu'agence, nous avons besoin de partenaires fiables. EasyEvents Group est devenu notre référence. Professionnalisme, créativité et réactivité à chaque mission.",
    featured: false,
  },
  {
    name: "Sophie M.",
    role: "Responsable Marketing",
    company: "Tech Company",
    location: "Lausanne",
    event: "Lancement de produit",
    avatar: "SM",
    rating: 5,
    text: "Le team building EasyChallenge a dépassé toutes nos attentes. Nos collaborateurs parlent encore de cette journée trois mois plus tard !",
    featured: false,
  },
  {
    name: "Laurent B.",
    role: "Directeur Général",
    company: "Groupe Hôtelier",
    location: "Nyon",
    event: "Festival d'été",
    avatar: "LB",
    rating: 5,
    text: "EasyRelax a créé un espace lounge d'exception pour notre festival. L'ambiance était exactement ce que nous recherchions — élégante, festive, mémorable.",
    featured: false,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={13} fill="currentColor" className="text-secondary" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 20%, hsla(33,67%,71%,0.07) 0%, transparent 55%), radial-gradient(circle at 10% 80%, hsla(33,67%,71%,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2.5 text-secondary font-heading font-semibold text-[11px] uppercase tracking-[0.22em] mb-5">
            <span className="w-8 h-px bg-secondary/40" />
            Témoignages
            <span className="w-8 h-px bg-secondary/40" />
          </span>
          <h2 className="font-heading text-3xl md:text-[2.75rem] font-extrabold text-foreground tracking-tight mb-3">
            Ce que disent{" "}
            <span className="text-gradient-gold">nos clients</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-[15px]">
            Plus de 200 événements réalisés en Suisse romande.
          </p>
        </motion.div>

        {/* Grid: featured left + 3 cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 relative bg-foreground rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden"
          >
            {/* Decorative large quote */}
            <div
              className="absolute top-4 right-6 font-heading font-black leading-none select-none pointer-events-none"
              style={{ fontSize: "9rem", lineHeight: 1, color: "hsla(33,67%,71%,0.10)" }}
            >
              "
            </div>

            <div className="relative z-10">
              <Stars count={featured.rating} />
              <p className="mt-5 text-primary-foreground/80 text-base md:text-lg leading-relaxed font-light">
                "{featured.text}"
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: "hsla(33,67%,71%,0.18)", color: "hsl(33,67%,71%)" }}
              >
                {featured.avatar}
              </div>
              <div>
                <p className="font-heading font-bold text-primary-foreground text-sm leading-none mb-1">{featured.name}</p>
                <p className="text-primary-foreground/45 text-xs">{featured.role} · {featured.company}</p>
                <p className="text-secondary text-[11px] font-semibold mt-1">{featured.event}</p>
              </div>
            </div>
          </motion.div>

          {/* 3 cards stacked */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {rest.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-4 hover:border-secondary/35 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-xs flex-shrink-0"
                      style={{ backgroundColor: "hsla(33,67%,71%,0.12)", color: "hsl(33,50%,50%)" }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm leading-none mb-0.5">{t.name}</p>
                      <p className="text-muted-foreground text-[11px]">{t.role} · {t.company}</p>
                    </div>
                  </div>
                  <Stars count={t.rating} />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                  <span className="text-secondary text-[11px] font-semibold font-heading">{t.event}</span>
                  <span className="text-muted-foreground/40 text-[11px]">· {t.location}</span>
                </div>
              </motion.div>
            ))}

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="sm:col-span-2 lg:col-span-1 bg-secondary/[0.07] border border-secondary/20 rounded-2xl px-6 py-4 flex items-center justify-between"
            >
              <div>
                <p className="font-heading font-extrabold text-foreground text-2xl">4.9<span className="text-secondary">/5</span></p>
                <p className="text-muted-foreground text-xs mt-0.5">Satisfaction client moyenne</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading font-extrabold text-foreground text-2xl">200<span className="text-secondary">+</span></p>
                <p className="text-muted-foreground text-xs mt-0.5">Événements réalisés</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="font-heading font-extrabold text-foreground text-2xl">98<span className="text-secondary">%</span></p>
                <p className="text-muted-foreground text-xs mt-0.5">Clients fidèles</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
