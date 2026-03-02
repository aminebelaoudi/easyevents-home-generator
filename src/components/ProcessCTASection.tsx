import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Puzzle, PartyPopper } from "lucide-react";

const steps = [
  { icon: MessageSquare, label: "Vous nous parlez de votre événement" },
  { icon: Puzzle, label: "Nous assemblons les services adaptés" },
  { icon: PartyPopper, label: "Nous coordonnons la prestation le jour J" },
];

const ProcessCTASection = () => {
  return (
    <section id="cta-final" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 block">
            Comment ça marche
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            En 3 étapes simples
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="bg-secondary/10 rounded-2xl p-4 w-fit mx-auto mb-4 relative">
                <s.icon size={28} className="text-secondary" />
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-heading font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <p className="font-heading font-semibold text-foreground text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Parlons de votre prochain événement
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Que vous soyez agence ou entreprise, nous créons des expériences sur mesure en Suisse romande.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Demander un devis
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">Découvrir nos services</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessCTASection;
