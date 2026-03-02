import { motion } from "framer-motion";
import easyflairImg from "@/assets/easyflair-bar.jpg";
import easyflashImg from "@/assets/easyflash-photobooth.jpg";
import easychallengeImg from "@/assets/easychallenge-team.jpg";

const showcases = [
  { image: easyflairImg, title: "Cocktail d'entreprise à Genève", tags: "EasyFlair + EasyFlash" },
  { image: easyflashImg, title: "Soirée de gala – Vidéo 360°", tags: "EasyFlash" },
  { image: easychallengeImg, title: "Team building outdoor – Lausanne", tags: "EasyChallenge" },
];

const testimonials = [
  {
    text: "« EasyEvents a transformé notre soirée d'entreprise en un moment inoubliable. Service impeccable du début à la fin. »",
    author: "Marie L., Directrice RH",
  },
  {
    text: "« Le photobooth 360° a fait sensation auprès de nos invités. Une expérience vraiment unique ! »",
    author: "Pierre D., Chef de projet événementiel",
  },
];

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-3 block">
            Réalisations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Nos derniers événements
          </h2>
        </motion.div>

        {/* Event grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {showcases.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading font-semibold text-primary-foreground text-sm">
                  {s.title}
                </p>
                <p className="text-primary-foreground/70 text-xs">{s.tags}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-muted/50 rounded-2xl p-6 border border-border"
            >
              <p className="text-foreground leading-relaxed mb-4 italic">{t.text}</p>
              <p className="text-muted-foreground text-sm font-semibold">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
