import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import easyflairImg from "@/assets/easyflair-bar.jpg";
import easyflashImg from "@/assets/easyflash-photobooth.jpg";
import easychallengeImg from "@/assets/easychallenge-team.jpg";
import heroImg from "@/assets/hero-event.jpg";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@easyevents_group",
    href: "#",
    color: "hover:text-pink-500",
    bg: "hover:bg-pink-50",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "EasyEvents Group",
    href: "#",
    color: "hover:text-blue-600",
    bg: "hover:bg-blue-50",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "EasyEvents Group",
    href: "#",
    color: "hover:text-sky-700",
    bg: "hover:bg-sky-50",
  },
];

const feed = [
  { img: easyflairImg,     caption: "Une soirée cocktail mémorable ✨" },
  { img: easyflashImg,     caption: "Le photobooth 360° fait fureur 📸" },
  { img: easychallengeImg, caption: "Team building en pleine nature 🏆" },
  { img: heroImg,          caption: "Gala d'entreprise à Genève 🎊" },
  { img: easyflairImg,     caption: "Nos barmans en action 🍹" },
  { img: easychallengeImg, caption: "Défis & sourires garantis 🎯" },
];

const SocialMediaSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-secondary font-heading font-bold text-xs uppercase tracking-[0.18em] mb-3 bg-secondary/10 px-4 py-1.5 rounded-full">
            Réseaux sociaux
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Suivez l'action en direct
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Coulisses, moments forts et inspirations événementielles — rejoignez notre communauté.
          </p>
        </motion.div>

        {/* Social links bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className={`flex items-center gap-2.5 bg-card border border-border rounded-xl px-5 py-3 text-sm font-heading font-semibold text-muted-foreground transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 ${s.color} ${s.bg}`}
            >
              <s.icon size={18} />
              <span>{s.label}</span>
              <span className="text-xs text-muted-foreground/60">{s.handle}</span>
            </a>
          ))}
        </motion.div>

        {/* Instagram-style feed grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {feed.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-3">
                  <Instagram size={20} className="text-white mx-auto mb-1.5" />
                  <p className="text-white text-[10px] font-heading font-semibold leading-tight">
                    {item.caption}
                  </p>
                </div>
              </div>
              {/* Secondary beige corner accent */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SocialMediaSection;
