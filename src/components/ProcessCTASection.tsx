import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Puzzle, PartyPopper } from "lucide-react";

const steps = [
  { icon: MessageSquare, label: "Vous nous parlez de votre événement", iconClass: "text-easyflash", iconBgClass: "bg-easyflash/15", badgeClass: "bg-easyflash text-white" },
  { icon: Puzzle, label: "Nous assemblons les services adaptés", iconClass: "text-easychallenge", iconBgClass: "bg-easychallenge/15", badgeClass: "bg-easychallenge text-white" },
  { icon: PartyPopper, label: "Nous coordonnons la prestation le jour J", iconClass: "text-easyrelax", iconBgClass: "bg-easyrelax/15", badgeClass: "bg-easyrelax text-white" },
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
              <div className={`${s.iconBgClass} rounded-2xl p-4 w-fit mx-auto mb-4 relative`}>
                <s.icon size={28} className={s.iconClass} />
                <span className={`absolute -top-2 -right-2 text-xs font-heading font-bold w-6 h-6 rounded-full flex items-center justify-center ${s.badgeClass}`}>
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
          className="rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(234 28% 10%) 0%, hsl(245 55% 20%) 58%, hsl(200 100% 40%) 100%)" }}
        >
          {/* Decorative dot-grid texture */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <h2 className="relative font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 tracking-tight">
            Parlons de votre prochain événement
          </h2>
          <p className="relative text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Que vous soyez agence ou entreprise, nous créons des expériences sur mesure en Suisse romande.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
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
