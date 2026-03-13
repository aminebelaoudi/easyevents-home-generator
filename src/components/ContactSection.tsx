import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["Route des jeunes, 6", "1227 Genève – Suisse"],
    iconClass: "text-easyflash",
    iconBg: "hsla(245,80%,64%,0.18)",
  },
  {
    icon: Phone,
    label: "Téléphone",
    lines: ["+41 22 519 21 66", "+41 78 948 67 27"],
    iconClass: "text-easychallenge",
    iconBg: "hsla(155,70%,38%,0.18)",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["contact@easyevents.ch"],
    iconClass: "text-easytoilets",
    iconBg: "hsla(210,65%,55%,0.18)",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-easyflash/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-easychallenge/15 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="w-8 h-px bg-secondary/50" />
            Contact
            <span className="w-8 h-px bg-secondary/50" />
          </span>
          <h2 className="font-heading text-3xl md:text-[2.75rem] font-extrabold text-foreground tracking-tight mb-3">
            Parlons de{" "}
            <span className="text-gradient-festive">votre événement</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-[15px]">
            Notre équipe vous répond sous 24h pour construire ensemble votre projet.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">

          {/* ── Company info ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            {/* Brand block */}
            <div className="bg-foreground rounded-3xl p-8 flex flex-col gap-6 overflow-hidden relative">
              <div
                className="absolute top-4 right-6 font-heading font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "7rem", lineHeight: 1, color: "hsla(245,80%,64%,0.11)" }}
              >
                EE
              </div>
              <div>
                <p className="font-heading font-extrabold text-primary-foreground text-xl mb-1">EasyEvents Group</p>
                <p className="text-primary-foreground/40 text-sm">Votre partenaire événementiel en Suisse romande</p>
              </div>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      <item.icon size={16} className={item.iconClass} />
                    </div>
                    <div>
                      <p className="text-primary-foreground/40 text-[10px] font-heading font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-primary-foreground/85 text-sm font-medium leading-snug">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-secondary/10 border border-secondary/25 rounded-2xl px-6 py-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
              <div>
                <p className="font-heading font-bold text-foreground text-sm">Disponible du lundi au vendredi</p>
                <p className="text-muted-foreground text-xs mt-0.5">9h00 – 18h00 · Réponse sous 24h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
