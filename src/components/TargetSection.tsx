import { motion } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";

const targets = [
  {
    icon: Briefcase,
    title: "Pour les agences événementielles",
    desc: "Un partenaire unique pour coordonner bars, photobooths et animations, en marque blanche ou en co-production.",
  },
  {
    icon: Building2,
    title: "Pour les entreprises",
    desc: "Soirées d'entreprise, séminaires, lancements et team building clés en main en Suisse romande.",
  },
];

const TargetSection = () => {
  return (
    <section id="targets" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 block">
            Pour qui ?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Des solutions adaptées à vos besoins
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {targets.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group border border-border/50"
            >
              <div className="bg-secondary/15 group-hover:bg-secondary/25 rounded-xl p-3 w-fit mb-5 transition-colors">
                <t.icon size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {t.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
