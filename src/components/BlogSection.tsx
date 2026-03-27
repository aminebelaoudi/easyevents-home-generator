import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";

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
    featured: true,
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
    featured: false,
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
    featured: false,
  },
];

const BlogSection = () => {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
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
          <a
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-heading font-semibold text-secondary hover:text-secondary/80 transition-colors shrink-0"
          >
            Tous les articles
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured post */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden bg-card border border-border/60 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span
                className={`absolute top-4 left-4 inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm ${featured.categoryColor}`}
              >
                <Tag size={11} />
                {featured.category}
              </span>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-muted-foreground text-xs mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {featured.readTime} de lecture
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-foreground leading-snug mb-3 group-hover:text-secondary transition-colors">
                {featured.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-secondary text-sm font-heading font-semibold">
                Lire l'article
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </motion.article>

          {/* Side posts */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border/60 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span
                    className={`absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm ${post.categoryColor}`}
                  >
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-muted-foreground text-xs mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground leading-snug mb-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-secondary text-xs font-heading font-semibold">
                    Lire l'article
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
