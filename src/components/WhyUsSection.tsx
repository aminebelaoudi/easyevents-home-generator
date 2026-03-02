import { motion } from "framer-motion";
import { MapPin, Clock, Users, Sparkles } from "lucide-react";

const reasons = [
  { icon: MapPin, text: "Basés à Genève, actifs partout en Suisse romande" },
  { icon: Clock, text: "Plus de 10 ans d'expérience événementielle" },
  { icon: Users, text: "Un groupe de spécialistes, un interlocuteur unique" },
  { icon: Sparkles, text: "Solutions sur mesure pour chaque événement" },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 block">
            Pourquoi nous ?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Pourquoi choisir EasyEvents Group ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-secondary/10 rounded-2xl p-4 w-fit mx-auto mb-4">
                <r.icon size={28} className="text-secondary" />
              </div>
              <p className="font-heading font-semibold text-foreground text-sm leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
