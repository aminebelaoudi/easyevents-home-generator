import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["Route des jeunes, 6", "1227 Genève – Suisse"],
  },
  {
    icon: Phone,
    label: "Téléphone",
    lines: ["+41 22 519 21 66", "+41 78 948 67 27"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["contact@easyevents.ch"],
  },
];

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/50 transition-all duration-200";

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-secondary/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-secondary/[0.04] rounded-full blur-[100px] pointer-events-none" />

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
            Contact
            <span className="w-8 h-px bg-secondary/40" />
          </span>
          <h2 className="font-heading text-3xl md:text-[2.75rem] font-extrabold text-foreground tracking-tight mb-3">
            Parlons de{" "}
            <span className="text-gradient-gold">votre événement</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-[15px]">
            Notre équipe vous répond sous 24h pour construire ensemble votre projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 max-w-5xl mx-auto">

          {/* ── Left: company info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Brand block */}
            <div className="bg-foreground rounded-3xl p-8 flex flex-col gap-6 overflow-hidden relative">
              <div
                className="absolute top-4 right-6 font-heading font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "7rem", lineHeight: 1, color: "hsla(33,67%,71%,0.08)" }}
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
                      style={{ backgroundColor: "hsla(33,67%,71%,0.15)" }}
                    >
                      <item.icon size={16} style={{ color: "hsl(33,67%,71%)" }} />
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
            <div className="bg-secondary/[0.08] border border-secondary/20 rounded-2xl px-6 py-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
              <div>
                <p className="font-heading font-bold text-foreground text-sm">Disponible du lundi au vendredi</p>
                <p className="text-muted-foreground text-xs mt-0.5">9h00 – 18h00 · Réponse sous 24h</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-card">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "hsla(33,67%,71%,0.12)" }}>
                    <CheckCircle2 size={32} style={{ color: "hsl(33,67%,71%)" }} />
                  </div>
                  <h3 className="font-heading font-extrabold text-foreground text-xl">Message envoyé !</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Merci pour votre message. Notre équipe vous contactera dans les 24h.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="text-secondary font-heading font-semibold text-sm underline underline-offset-4 mt-2"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Nom complet *</label>
                      <input
                        required
                        type="text"
                        placeholder="Jean Dupont"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="jean@exemple.ch"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="+41 00 000 00 00"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Objet</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">Sélectionner…</option>
                        <option>Soirée d'entreprise</option>
                        <option>Mariage</option>
                        <option>Team Building</option>
                        <option>Festival / Gala</option>
                        <option>Devis sur mesure</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Décrivez votre événement, date souhaitée, nombre de participants…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="w-full gap-2 mt-1">
                    <Send size={16} />
                    Envoyer ma demande
                  </Button>

                  <p className="text-center text-muted-foreground/50 text-[11px]">
                    Vos données sont traitées de manière confidentielle et ne sont jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
