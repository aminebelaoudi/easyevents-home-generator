import { motion } from "framer-motion";
import { Camera, Award, Eye, Sliders, ArrowRight, CheckCircle, ChevronRight, Wine, Trophy, Coffee, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import easyflashImg from "@/assets/easyflash-photobooth.jpg";
import heroImg from "@/assets/hero-event.jpg";
import easychallengeImg from "@/assets/easychallenge-team.jpg";
import easyflairImg from "@/assets/easyflair-bar.jpg";
import easytoiletImg from "@/assets/easytoilet.png";
import easyboxImg from "@/assets/easy box.png";
import easybox360Img from "@/assets/EasyBox 360.png";
import easyboxMiroirImg from "@/assets/EasyBox Miroir.png";
/* ─── Products ─────────────────────────────────────────── */
const products = [
  {
    id: "easybox",
    name: "EasyBox",
    tagline: "Facile d'utilisation et personnalisable",
    desc: "Le modèle EasyBox s'adapte à tous vos évènements et offre une impression de photo instantanée.",
    price: "À partir de 349.-",
    currency: "CHF",
    image: easyboxImg,
    tag: "Populaire",
    features: ["Impression instantanée", "Entièrement personnalisable", "Interface tactile intuitive", "Livraison & installation incluses"],
  },
  {
    id: "easybox-360",
    name: "EasyBox 360°",
    tagline: "Divertissement ludique et unique",
    desc: "Cette EasyBox exceptionnelle crée des vidéos et selfies circulaires grâce à son rotatif 360°.",
    price: "À partir de 690.-",
    currency: "CHF",
    image: easybox360Img,
    tag: "Best-seller",
    features: ["Rotatif 360° motorisé", "Vidéos & selfies circulaires", "Partage instantané", "Décor et habillage inclus"],
  },
  {
    id: "easybox-miroir",
    name: "EasyBox Miroir",
    tagline: "Animation glamour & soirées à thème",
    desc: "Ce Photobooth à effet Miroir, idéal pour les soirées à thème, offrira une animation glamour à vos évènements.",
    price: "À partir de 690.-",
    currency: "CHF",
    image: easyboxMiroirImg,
    tag: "Prestige",
    features: ["Effet miroir pleine hauteur", "Idéal soirées à thème", "Cadre habillable au choix", "Animations interactives"],
  },
];

/* ─── Values ─────────────────────────────────────────── */
const values = [
  {
    icon: Award,
    title: "Professionnalisme",
    desc: "Nous mettons notre professionnalisme à votre service. Soucieux de produire un service de qualité, toute notre équipe est à votre écoute.",
  },
  {
    icon: Eye,
    title: "Transparence",
    desc: "Pour garantir une prestation de qualité, nous établirons votre devis personnalisé selon vos souhaits, sans surprise.",
  },
  {
    icon: Sliders,
    title: "Personnalisation",
    desc: "Nos prestations EasyBox sont entièrement personnalisables afin de répondre au mieux à vos attentes.",
  },
];

/* ─── Stats ─────────────────────────────────────────── */
const stats = [
  { value: "2011", label: "Fondé à Genève" },
  { value: "500+", label: "Événements couverts" },
  { value: "3", label: "Modèles de PhotoBooth" },
  { value: "24h", label: "Réponse garantie" },
];

/* ═══════════════════════════════════════════════════════ */

const EasyFlash = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={easyflashImg} alt="EasyFlash PhotoBooth" className="w-full h-full object-cover" />
          {/* Layered overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(150deg, hsl(220 20% 6% / 0.88) 0%, hsl(25 30% 12% / 0.72) 45%, hsl(33 60% 55% / 0.28) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 75% 25%, hsl(38 90% 65% / 0.18) 0%, transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(220 15% 5% / 0.65) 0%, transparent 55%)" }} />
        </div>

        <div className="container mx-auto relative z-10 px-4 pt-28 pb-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 text-white/40 text-xs font-heading mb-8"
          >
            <a href="/" className="hover:text-white/70 transition-colors">Accueil</a>
            <ChevronRight size={12} />
            <span className="text-white/60">Services</span>
            <ChevronRight size={12} />
            <span className="text-white/90 font-semibold">EasyFlash</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Camera size={13} className="text-secondary" />
            <span className="text-white/90 text-xs font-heading font-semibold tracking-widest uppercase">
              EasyFlash · Location de PhotoBooth
            </span>
          </motion.div>

          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.1] mb-5 tracking-tight"
            >
              Location de{" "}
              <span className="text-secondary">PhotoBooth</span>{" "}
              en Suisse
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Implanté à Genève depuis 2011, EasyFlash propose des bornes photo entièrement personnalisables pour offrir un élément de distraction unique à vos invités.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button variant="secondary" size="xl" asChild>
                <a href="#devis">Obtenir un devis</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#produits">Voir nos modèles <ArrowRight size={16} /></a>
              </Button>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-2xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-white/[0.07] backdrop-blur-sm rounded-2xl px-4 py-4 border border-white/[0.08] text-center">
                <p className="font-heading font-extrabold text-secondary text-2xl leading-none mb-1">{s.value}</p>
                <p className="text-white/45 text-[11px] font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="py-10 border-y border-border/50 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
            {["Personnalisation complète", "Impression instantanée", "Livraison & installation", "Support technique inclus", "Disponible en Suisse romande"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-heading font-semibold text-muted-foreground">
                <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="produits" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsla(33,67%,71%,0.06) 0%, transparent 50%)" }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2.5 text-secondary font-heading font-semibold text-[11px] uppercase tracking-[0.22em] mb-5">
              <span className="w-8 h-px bg-secondary/40" />
              Notre collection
              <span className="w-8 h-px bg-secondary/40" />
            </span>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-extrabold text-foreground tracking-tight mb-4 leading-[1.12]">
              Découvrez les PhotoBooth{" "}
              <span className="text-gradient-gold">EasyBox</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-[15px] leading-relaxed">
              Notre équipe est à votre écoute pour vous aider à choisir la borne photo idéale pour votre évènement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="group bg-card border border-border/60 rounded-3xl overflow-hidden hover:border-secondary/40 hover:shadow-card-hover transition-all duration-400 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-heading font-bold tracking-wide bg-secondary text-secondary-foreground">
                    {p.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1">{p.tagline}</p>
                  <h3 className="font-heading text-xl font-extrabold text-foreground mb-2">{p.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                        <CheckCircle size={13} className="text-secondary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div>
                      <span className="font-heading font-extrabold text-foreground text-xl">{p.price}</span>
                      <span className="text-muted-foreground text-sm ml-1">{p.currency}</span>
                    </div>
                    <Button variant="secondary" size="sm" asChild className="gap-1.5">
                      <a href="#devis">
                        Réserver <ArrowRight size={13} />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVIS CTA BAND ── */}
      <section id="devis" className="py-20 relative overflow-hidden" style={{ backgroundColor: "hsl(220 15% 7%)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(33 67% 71% / 0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 text-white/40 font-heading font-semibold text-[11px] uppercase tracking-widest mb-6">
              <span className="w-6 h-px bg-white/20" />
              Devis en ligne
              <span className="w-6 h-px bg-white/20" />
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Obtenez un devis personnalisé{" "}
              <br className="hidden md:block" />
              <span className="text-secondary">en moins de 2 minutes</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto text-[15px] mb-10 leading-relaxed">
              Remplissez notre formulaire de devis en ligne et recevez une offre sur mesure adaptée à votre événement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" asChild className="gap-2">
                <a href="/#contact">
                  <Camera size={18} />
                  Demander mon devis
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+41225192166">+41 22 519 21 66</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2.5 text-secondary font-heading font-semibold text-[11px] uppercase tracking-[0.22em] mb-5">
              <span className="w-8 h-px bg-secondary/40" />
              Notre engagement
              <span className="w-8 h-px bg-secondary/40" />
            </span>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-extrabold text-foreground tracking-tight">
              Pourquoi choisir EasyFlash ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border/60 rounded-2xl p-8 text-center hover:border-secondary/35 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "hsla(33,67%,71%,0.12)" }}>
                  <v.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-heading font-extrabold text-foreground text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTRES SERVICES ── */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, hsla(33,67%,71%,0.06) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10"
          >
            <div>
              <span className="inline-flex items-center gap-2.5 text-secondary/70 font-heading font-semibold text-[11px] uppercase tracking-[0.22em] mb-4">
                <span className="w-6 h-px bg-secondary/30" />
                EasyEvents Group
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-primary-foreground tracking-tight">
                Découvrez aussi nos{" "}
                <span className="text-secondary">autres expertises</span>
              </h2>
            </div>
            <a href="/" className="text-secondary/70 text-sm font-heading font-semibold flex items-center gap-1.5 hover:text-secondary transition-colors flex-shrink-0">
              Voir tous les services <ArrowRight size={14} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Wine,     name: "EasyFlair",     desc: "Bars mobiles & Mixologie",      image: easyflairImg,      href: "/services/easyflair" },
              { icon: Trophy,   name: "EasyChallenge", desc: "Team Building & Animations",    image: easychallengeImg,  href: "/services/easychallenge" },
              { icon: Coffee,   name: "EasyRelax",     desc: "Espaces Lounge & Détente",     image: heroImg,           href: "/services/easyrelax" },
              { icon: Droplets, name: "EasyToilets",   desc: "Sanitaires Premium",            image: easytoiletImg,     href: "/services/easytoilets" },
            ].map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
              >
                <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/10 transition-all duration-400" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.07] pointer-events-none" />
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1.5px hsl(33 67% 71%), 0 0 30px -8px hsl(33 67% 71%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 border border-white/10"
                    style={{ backgroundColor: "hsla(33,67%,71%,0.15)" }}>
                    <s.icon size={15} className="text-secondary" />
                  </div>
                  <p className="font-heading font-bold text-white text-sm leading-tight">{s.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{s.desc}</p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight size={12} className="text-secondary" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-secondary/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:sticky lg:top-28"
            >
              <span className="inline-flex items-center gap-2.5 text-secondary font-heading font-semibold text-[11px] uppercase tracking-[0.22em] mb-5">
                <span className="w-8 h-px bg-secondary/40" />
                FAQ
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-5 leading-[1.12]">
                Questions{" "}
                <span className="text-gradient-gold">fréquentes</span>
              </h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
                Tout ce que vous devez savoir sur nos photobooths et bornes photo avant de réserver.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="/#cta-final">Demander un devis</a>
              </Button>
            </motion.div>

            {/* Right — accordion */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "Quelle est la différence entre l’EasyBox, l’EasyBox 360° et l’EasyBox Miroir ?",
                    a: "L’EasyBox est notre borne photo classique : simple, élégante et facile d’utilisation. L’EasyBox 360° capture une vidéo panoramique à 360° de vos invités pour un effet spectaculaire. L’EasyBox Miroir est un grand écran miroir interactif qui propose des filtres et animations en temps réel. Chaque modèle est personnalisable aux couleurs de votre événement.",
                  },
                  {
                    q: "Les impressions sont-elles incluses dans la location ?",
                    a: "Oui, toutes nos formules incluent l’impression photo illimitée en format instamatiç (10×15 cm) sur place. Les photos sont également disponibles en téléchargement numérique via QR code ou par e-mail après l’événement.",
                  },
                  {
                    q: "Est-il possible de personnaliser le cadre photo et l’interface ?",
                    a: "Absolument. Nous créons un habillage graphique sur-mesure (logo, couleurs, message) pour le cadre de chaque photo ainsi que pour l’interface de la borne. Envoyez-nous votre charte graphique et nous nous occupons du reste.",
                  },
                  {
                    q: "Combien de temps faut-il pour installer une borne ?",
                    a: "Le montage standard prend entre 30 et 45 minutes. Nous arrivons généralement 1h avant le début de votre événement pour garantir un démarrage sans stress. Un technicien reste sur place toute la durée de la prestation.",
                  },
                  {
                    q: "Dans quelle zone géographique intervenez-vous ?",
                    a: "Nous intervenons principalement en Suisse romande (Genève, Lausanne, Vaud, Valais, Neuchâtel, Fribourg). Des prestations en France voisine ou en Suisse alémanique sont possibles — contactez-nous pour un devis incluant les frais de déplacement.",
                  },
                  {
                    q: "Comment se déroule la réservation ?",
                    a: "C’est simple : (1) Remplissez notre formulaire de devis en indiquant la date, le lieu et le type d’événement. (2) Nous revenons vers vous sous 24h avec une offre personnalisée. (3) Validation par acompte de 30 % — le solde est réglé le jour J.",
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-secondary/40 transition-colors duration-200"
                  >
                    <AccordionTrigger className="font-heading font-semibold text-sm md:text-base text-foreground text-left py-5 hover:no-underline hover:text-secondary transition-colors [&[data-state=open]]:text-secondary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default EasyFlash;
