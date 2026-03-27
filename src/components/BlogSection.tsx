import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    category: "Corporate",
    categoryColor: "bg-easyflash/15 text-easyflash",
    date: "12 mars 2026",
    readTime: "4 min",
    title: "5 idées pour transformer votre soirée d'entreprise en expérience inoubliable",
    excerpt:
      "De la mixologie en live aux photobooths immersifs, découvrez comment surprendre vos collaborateurs et marquer les esprits lors de votre prochain événement corporate.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
  },
  {
    category: "Mariage",
    categoryColor: "bg-easyflair/15 text-easyflair",
    date: "28 fév. 2026",
    readTime: "3 min",
    title: "Photobooth mariage : le must-have pour une réception moderne",
    excerpt:
      "Le photobooth 360° s'impose comme l'animation phare des mariages contemporains. Conseils et inspirations pour l'intégrer parfaitement à votre grand jour.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
  },
  {
    category: "Team Building",
    categoryColor: "bg-easychallenge/15 text-easychallenge",
    date: "10 fév. 2026",
    readTime: "5 min",
    title: "Team building : comment renforcer la cohésion d'équipe en 2026",
    excerpt:
      "Jeux collaboratifs, défis outdoor ou animations immersives — les nouvelles tendances du team building qui font la différence dans les entreprises romandes.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    category: "Festival",
    categoryColor: "bg-easyrelax/15 text-easyrelax",
    date: "3 jan. 2026",
    readTime: "4 min",
    title: "Organiser un festival en Suisse romande : les clés du succès",
    excerpt:
      "De la logistique sanitaire aux espaces lounge, retour sur les éléments indispensables pour un festival réussi et une expérience participant au top du top.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
  {
    category: "Tendances",
    categoryColor: "bg-secondary/15 text-secondary",
    date: "18 déc. 2025",
    readTime: "6 min",
    title: "Les grandes tendances événementielles pour l'année 2026",
    excerpt:
      "Durabilité, immersion sensorielle, expériences hybrides… voici ce qui va façonner les événements professionnels et privés en Suisse cette année.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
];

const CARD_WIDTH = 480;
const GAP = 24;

const BlogSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir === "next" ? CARD_WIDTH + GAP : -(CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsla(245,80%,64%,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsla(33,95%,52%,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block text-secondary font-heading font-bold text-xs uppercase tracking-[0.18em] mb-3 bg-secondary/10 px-4 py-1.5 rounded-full">
              Blog & Inspirations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Idées, tendances &{" "}
              <span className="text-gradient-festive">coulisses</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-base max-w-lg">
              Conseils événementiels, retours d'expérience et inspirations pour
              créer des moments qui marquent.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-heading font-semibold text-secondary hover:text-secondary/80 transition-colors mr-2"
            >
              Tous les articles
              <ArrowUpRight size={15} />
            </a>
            <button
              onClick={() => scroll("prev")}
              aria-label="Article précédent"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-card hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-200 text-foreground/70"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Article suivant"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-card hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-200 text-foreground/70"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Scrollable horizontal track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex-shrink-0 bg-card border border-border/60 rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer flex"
              style={{ width: CARD_WIDTH, scrollSnapAlign: "start" }}
            >
              {/* Image — left side */}
              <div className="relative w-44 shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>

              {/* Content — right side */}
              <div className="flex flex-col justify-between p-6 flex-1 min-w-0">
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${post.categoryColor}`}
                  >
                    <Tag size={10} />
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground leading-snug mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-secondary text-xs font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire
                    <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
