import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Award, Eye, Sliders, ArrowRight, CheckCircle, ChevronRight, Wine, Trophy, Coffee, Droplets, Sparkles, FrameIcon, Tag, Star } from "lucide-react";
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
    id: "easybox-iris",
    name: "EasyBox Iris",
    locationTitle: "Location Photobooth EasyBox Iris",
    isNew: true,
    tag: null as string | null,
    tagline: "La borne photo connectée nouvelle génération",
    desc: "Dernière-née de la famille EasyBox, l'Iris allie design épuré et technologie de pointe pour offrir une expérience photo haut de gamme. Interface tactile nouvelle génération, qualité d'impression exceptionnelle et galerie numérique instantanée.",
    longDesc: "Conçue dans nos studios genevois, l'EasyBox Iris est notre toute dernière innovation en matière de photobooth. Son design raffiné s'intègre élégamment à n'importe quel décor — de la soirée corporate au mariage en passant par les galas de prestige.\n\nL'interface logicielle nouvelle génération vous permet de personnaliser intégralement votre expérience : ajoutez votre logo, choisissez vos filtres, créez un fond sur mesure. Chaque photo imprimée en HD est également disponible en téléchargement numérique instantané.\n\nLa livraison, l'installation et la présence d'un technicien sont incluses pour garantir une prestation sans souci du début à la fin.",
    precisions: [
      "L'EasyBox Iris dispose d'un écran tactile dernière génération de 21 pouces pour une navigation intuitive.",
      "Conçue pour s'intégrer aussi bien à un mariage qu'à une soirée corporate ou un gala de prestige.",
      "L'arrière-plan étant personnalisable, il est possible d'incruster votre logo ou un fond sur mesure.",
    ],
    price: "349.-",
    currency: "CHF",
    image: easyboxImg,
    features: [
      "Impression HD instantanée (format 10×15 cm)",
      "Galerie numérique partageable via QR code",
      "Interface tactile nouvelle génération",
      "Personnalisation complète (logo, cadre, filtres)",
      "Technicien sur place inclus",
      "Livraison, installation & récupération incluses",
    ],
    specs: [
      { label: "Espace requis", value: "3 m × 3 m minimum" },
      { label: "Alimentation", value: "Prise murale standard dédiée" },
      { label: "Capacité", value: "1 à 4 personnes" },
      { label: "Impression", value: "Photos illimitées en HD" },
      { label: "Partage", value: "QR code + liens 24h–48h" },
      { label: "Installation", value: "Livraison & montage inclus" },
    ],
  },
  {
    id: "easybox-bw",
    name: "EasyBox B&W",
    locationTitle: "Location Photobooth EasyBox Noir & Blanc",
    isNew: false,
    tag: "Prestige" as string | null,
    tagline: "L'élégance intemporelle en noir & blanc",
    desc: "L'EasyBox B&W transforme chaque cliché en une œuvre artistique au rendu noir et blanc raffiné. Idéale pour les galas, mariages chic et événements corporate, elle confère à vos photos un charme intemporel qui tranche avec l'ordinaire.",
    longDesc: "Vous souhaitez offrir à vos invités une expérience photo empreinte d'élégance classique ? L'EasyBox B&W réinvente le photobooth avec un rendu exclusivement en noir et blanc de haute qualité.\n\nContrairement à un simple filtre, notre traitement noir et blanc est calibré pour sublimer les contrastes et la lumière, donnant à chaque tirage un rendu digne d'un photographe de mode.\n\nParfaitement personnalisable, la borne peut être habillée aux couleurs de votre événement et chaque cadre peut intégrer votre logo ou slogan. Le partage numérique reste instantané, via QR code, pour les invités qui souhaitent conserver un souvenir digital.",
    precisions: [
      "Le rendu noir & blanc est calibré professionnellement — ce n'est pas un simple filtre mais un traitement photographique précis.",
      "La borne est habillée en noir mat pour s'intégrer discrètement dans les décors luxueux.",
      "L'arrière-plan entièrement personnalisable permet d'incruster votre logo ou un fond dédié à l'événement.",
    ],
    price: "490.-",
    currency: "CHF",
    image: easyboxImg,
    features: [
      "Rendu noir & blanc de haute qualité",
      "Impression HD instantanée (format 10×15 cm)",
      "Personnalisation du cadre et de l'interface",
      "Galerie numérique partageable via QR code",
      "Technicien sur place inclus",
      "Livraison, installation & récupération incluses",
    ],
    specs: [
      { label: "Espace requis", value: "3 m × 3 m minimum" },
      { label: "Alimentation", value: "Prise murale standard dédiée" },
      { label: "Capacité", value: "1 à 4 personnes" },
      { label: "Rendu", value: "Noir & blanc calibré HD" },
      { label: "Partage", value: "QR code + liens 24h–48h" },
      { label: "Installation", value: "Livraison & montage inclus" },
    ],
  },
  {
    id: "easybox-miroir",
    name: "EasyBox Miroir",
    locationTitle: "Location Photobooth EasyBox Miroir",
    isNew: false,
    tag: "Glamour" as string | null,
    tagline: "Animation glamour & soirées à thème",
    desc: "Ce Photobooth à effet Miroir, idéal pour les soirées à thème, offrira une animation glamour à vos événements. Grand écran miroir interactif avec filtres et animations en temps réel pour un résultat spectaculaire.",
    longDesc: "L'EasyBox Miroir transforme vos invités en véritables stars grâce à son grand écran miroir full-size et ses animations interactives. Ses messages animés, ses effets de décompte et ses filtres personnalisés créent une expérience unique et mémorable.\n\nIdéal pour les mariages, soirées de gala, événements corporate et anniversaires, l'EasyBox Miroir s'intègre naturellement dans le décor tout en devenant le centre d'attraction de la soirée.\n\nL'arrière-plan entièrement personnalisable permet d'incruster votre marque, un logo ou un décor virtuel sur mesure. Chaque photo est immédiatement partageable sur les réseaux sociaux pour amplifier la portée de votre événement.",
    precisions: [
      "L'EasyBox Miroir est un écran pleine hauteur (format portrait) qui fonctionne comme un vrai miroir interactif.",
      "Les animations et les messages à l'écran sont entièrement personnalisables selon votre thème d'événement.",
      "L'arrière-plan étant fixe, il est possible d'incruster un fond personnalisable avec votre logo ou décor virtuel.",
    ],
    price: "690.-",
    currency: "CHF",
    image: easyboxMiroirImg,
    features: [
      "Écran miroir pleine hauteur interactif",
      "Animations & filtres en temps réel",
      "Fond personnalisable (logo, décor virtuel)",
      "Impression HD instantanée",
      "Partage immédiat sur réseaux sociaux",
      "Livraison, installation & récupération incluses",
    ],
    specs: [
      { label: "Format", value: "Miroir pleine hauteur (portrait)" },
      { label: "Espace requis", value: "3 m × 3 m minimum" },
      { label: "Alimentation", value: "Prise murale standard dédiée" },
      { label: "Capacité", value: "1 à 5 personnes" },
      { label: "Partage", value: "Instantané + liens 24h–48h" },
      { label: "Installation", value: "Livraison & montage inclus" },
    ],
  },
  {
    id: "easybox-360",
    name: "EasyBox 360°",
    locationTitle: "Location Photobooth EasyBox Rotatif 360°",
    isNew: false,
    tag: "Best-seller" as string | null,
    tagline: "Plus qu'un divertissement, voici une animation innovante, le Photobooth rotatif 360°",
    desc: "Créez en direct vos vidéos en mode Selfies 360° — une nouvelle avancée dans l'animation photo en exclusivité chez EasyFlash ! Dans nos studios, nous avons élaboré un nouveau concept unique dans le secteur de l'animation photo, mêlant photographie et cinématographie. À découvrir absolument !",
    longDesc: "Vous aimeriez que vos photos aient un rendu plus dynamique ? Un effet unique et hyper proche de la réalité ? Alors vous avez trouvé le divertissement idéal pour épater vos invités. Offrez-leur un rendu digne de l'univers du cinéma…\n\nLa technologie de notre photobooth EasyBox rotatif 360° permet d'assembler une multitude de prises de vue et produira un mini film à l'effet WOUHAOU garanti !\n\nCette animation est totalement personnalisable ! Grâce à l'interface logiciel et le matériel fournis, vous pouvez sélectionner vos effets 360°, vos arrière-plans, ajouter votre logo, un produit, une marque, un événement… Vous avez carte blanche !\n\nEnfin, chaque rendu peut être immédiatement partagé sur vos réseaux sociaux et créer le buzz.",
    precisions: [
      "Le Photobooth EasyBox Rotatif 360° est une plate-forme de 80 cm de diamètre qui peut accueillir confortablement 2 à 3 personnes (max).",
      "La prise de vue est effectuée par un vidéobooth fixe : seuls les participants tournent.",
      "L'arrière-plan étant fixe, il est possible d'incruster un fond personnalisable.",
    ],
    price: "690.-",
    currency: "CHF",
    image: easybox360Img,
    features: [
      "Vidéos illimitées en qualité Haute Définition",
      "Envoi sur smartphone instantané (via Wi-Fi) puis envoi des liens en 24h–48h via WeTransfer",
      "Personnalisation possible : logo ou slogan sur la vidéo",
      "Packs d'accessoires en option",
      "Alimentation : prise murale standard dédiée (sans multiprise)",
      "Espace requis : 4 m × 4 m minimum",
      "Livraison & montage, démontage & récupération par EasyFlash",
    ],
    specs: [
      { label: "Plateforme", value: "80 cm de diamètre" },
      { label: "Capacité", value: "2 à 3 personnes max" },
      { label: "Espace requis", value: "4 m × 4 m minimum" },
      { label: "Alimentation", value: "Prise murale standard dédiée (sans multiprise)" },
      { label: "Partage", value: "Wi-Fi instantané + liens 24h–48h" },
      { label: "Installation", value: "Livraison & montage inclus" },
    ],
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
  { value: "4", label: "Modèles de PhotoBooth" },
  { value: "24h", label: "Réponse garantie" },
];

/* ═══════════════════════════════════════════════════════ */

const EasyFlashV1 = () => {
  const [activeTab, setActiveTab] = useState("easybox-iris");
  return (
    <div className="min-h-screen bg-background service-theme-easyflash">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={easyflashImg} alt="EasyFlash PhotoBooth" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(150deg, hsl(220 20% 6% / 0.88) 0%, hsl(25 30% 12% / 0.72) 45%, hsl(33 60% 55% / 0.28) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 75% 25%, hsl(38 90% 65% / 0.18) 0%, transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(220 15% 5% / 0.65) 0%, transparent 55%)" }} />
        </div>

        <div className="container mx-auto relative z-10 px-4 pt-28 pb-20">
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

          {/* ── Tab bar ── */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-sm border transition-all duration-200 ${
                  activeTab === p.id
                    ? "bg-secondary text-secondary-foreground border-secondary shadow-md"
                    : "bg-card text-muted-foreground border-border/60 hover:border-secondary/40 hover:text-foreground"
                }`}
              >
                {p.name}
                {p.isNew && (
                  <span className="bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                    New
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Tab content — V1 layout ── */}
          {products.map((p) =>
            activeTab === p.id ? (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                {/* ① Title block — centré */}
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {p.isNew && (
                      <span className="flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        <Sparkles size={10} /> Nouveau
                      </span>
                    )}
                    {!p.isNew && p.tag && (
                      <span className="bg-secondary text-secondary-foreground text-[10px] font-heading font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
                    {p.locationTitle}
                  </h2>
                  <p className="text-secondary font-heading font-semibold text-base md:text-lg mb-4 max-w-2xl mx-auto">{p.tagline}</p>
                  <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl mx-auto">{p.desc}</p>
                </div>

                {/* ② Long description */}
                <div className="mb-10 space-y-4">
                  {p.longDesc.split("\n\n").map((para, i) => (
                    <p key={i} className="text-foreground/75 text-[15px] leading-relaxed">{para}</p>
                  ))}
                </div>

                {/* ③ Quelques précisions */}
                <div className="bg-muted/50 border border-border/60 rounded-2xl p-7 mb-10">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-4">Quelques précisions...</h3>
                  <ul className="space-y-3">
                    {p.precisions.map((note, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-foreground/75">
                        <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />
                        </span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ④ Les + : features LEFT | image RIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                  <div>
                    <h3 className="font-heading font-extrabold text-foreground text-xl mb-6">
                      Les <span className="text-secondary">+</span> de la borne photo {p.name}
                    </h3>
                    <ul className="space-y-4">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[14px] text-foreground/80">
                          <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-[320px]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {p.isNew ? (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        <Sparkles size={11} /> Nouveau
                      </div>
                    ) : p.tag ? (
                      <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-heading font-bold px-3 py-1.5 rounded-full">
                        {p.tag}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* ⑤ Specs table — grid 3 cols */}
                <div className="bg-card border border-border/60 rounded-2xl overflow-hidden mb-10">
                  <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-border/50">
                    {p.specs.map((s) => (
                      <div key={s.label} className="p-5">
                        <p className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1">{s.label}</p>
                        <p className="text-foreground font-semibold text-sm">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ⑥ Price badge — centré grand */}
                <div className="text-center py-10 mb-4">
                  <p className="text-muted-foreground text-xs font-heading uppercase tracking-[0.25em] mb-2">À partir de</p>
                  <p className="font-heading font-extrabold text-5xl md:text-6xl text-foreground leading-none">
                    {p.price}
                    <span className="text-muted-foreground text-2xl font-medium ml-2">{p.currency}</span>
                  </p>
                  <p className="text-muted-foreground/50 text-xs mt-2 font-heading uppercase tracking-widest">{p.name}</p>
                  <div className="mt-6">
                    <Button variant="secondary" size="xl" asChild className="gap-2">
                      <a href="/#contact">Obtenir mon devis <ArrowRight size={16} /></a>
                    </Button>
                  </div>
                </div>

                {/* Separator */}
                <div className="border-t border-border/50 my-10" />

                {/* ⑦ Accessories */}
                <div>
                  <div className="text-center mb-8">
                    <h3 className="font-heading font-extrabold text-foreground text-xl mb-3">
                      1. Choisissez votre pack d'accessoires indispensables
                    </h3>
                    <p className="text-muted-foreground text-[14px] mb-3">
                      Pour agrémenter vos photos, nous vous proposons un choix de 3 packs d'accessoires.
                    </p>
                    <ul className="text-muted-foreground text-[13px] space-y-1 mb-3">
                      <li>— Pack Standard (cadres, panneaux ou props)</li>
                      <li>— Pack Premium (divers tailles et couleurs de chapeaux &amp; lunettes...)</li>
                      <li>— Pack sur mesure (accessoires spécialement achetés pour votre événement)</li>
                    </ul>
                    <p className="text-secondary font-heading font-bold text-sm">À partir de 29.- CHF</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                      { icon: FrameIcon, label: "Accessoires Cadres",    desc: "Cadres découpés & personnalisés" },
                      { icon: Tag,       label: "Accessoires Props",      desc: "Panneaux, banderoles & props fun" },
                      { icon: Tag,       label: "Accessoires Pancartes",  desc: "Affiches, pancartes & props sur bâton" },
                      { icon: Star,      label: "Accessoires Premium",    desc: "Chapeaux, lunettes & accessoires variés" },
                    ].map((acc) => (
                      <div
                        key={acc.label}
                        className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-secondary/40 hover:shadow-card-hover transition-all duration-300 flex flex-col"
                      >
                        <div className="h-40 bg-muted/60 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <acc.icon size={28} className="text-secondary/70" />
                          </div>
                        </div>
                        <div className="p-4 flex flex-col gap-1">
                          <p className="font-heading font-bold text-foreground text-sm leading-tight">{acc.label}</p>
                          <p className="text-muted-foreground text-[11px]">{acc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
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
              { icon: Wine,     name: "EasyFlair",     desc: "Bars mobiles & Mixologie",   image: easyflairImg,     href: "/services/easyflair" },
              { icon: Trophy,   name: "EasyChallenge", desc: "Team Building & Animations", image: easychallengeImg, href: "/services/easychallenge" },
              { icon: Coffee,   name: "EasyRelax",     desc: "Espaces Lounge & Détente",   image: heroImg,          href: "/services/easyrelax" },
              { icon: Droplets, name: "EasyToilets",   desc: "Sanitaires Premium",          image: easytoiletImg,    href: "/services/easytoilets" },
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.07] pointer-events-none" />
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "Quelle est la différence entre l'EasyBox, l'EasyBox 360° et l'EasyBox Miroir ?",
                    a: "L'EasyBox est notre borne photo classique : simple, élégante et facile d'utilisation. L'EasyBox 360° capture une vidéo panoramique à 360° de vos invités pour un effet spectaculaire. L'EasyBox Miroir est un grand écran miroir interactif qui propose des filtres et animations en temps réel. Chaque modèle est personnalisable aux couleurs de votre événement.",
                  },
                  {
                    q: "Les impressions sont-elles incluses dans la location ?",
                    a: "Oui, toutes nos formules incluent l'impression photo illimitée en format instamatiç (10×15 cm) sur place. Les photos sont également disponibles en téléchargement numérique via QR code ou par e-mail après l'événement.",
                  },
                  {
                    q: "Est-il possible de personnaliser le cadre photo et l'interface ?",
                    a: "Absolument. Nous créons un habillage graphique sur-mesure (logo, couleurs, message) pour le cadre de chaque photo ainsi que pour l'interface de la borne. Envoyez-nous votre charte graphique et nous nous occupons du reste.",
                  },
                  {
                    q: "Combien de temps faut-il pour installer une borne ?",
                    a: "Le montage standard prend entre 30 et 45 minutes. Nous arrivons généralement 1h avant le début de votre événement pour garantir un démarrage sans stress. Un technicien reste sur place toute la durée de la prestation.",
                  },
                  {
                    q: "Dans quelle zone géographique intervenez-vous ?",
                    a: "Nous intervenons principalement en Suisse romande (Genève, Lausanne, Vaud, Valais, Neuchâtel, Fribourg). Des prestations en France voisine ou en Suisse alémanique sont possibles — contactez-nous pour un devis incluant les frais de déplacement.",
                  },
                  {
                    q: "Comment se déroule la réservation ?",
                    a: "C'est simple : (1) Remplissez notre formulaire de devis en indiquant la date, le lieu et le type d'événement. (2) Nous revenons vers vous sous 24h avec une offre personnalisée. (3) Validation par acompte de 30 % — le solde est réglé le jour J.",
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

export default EasyFlashV1;
