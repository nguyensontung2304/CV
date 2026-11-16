import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";
import GithubIcon from "../icons/GithubIcon";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";
import "./Hero.scss";

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <motion.p
          className="hero__kicker"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.1}
        >
          {t.hero.kicker}
        </motion.p>
        <motion.h1 variants={fade} initial="hidden" animate="show" custom={0.2}>
          {t.hero.name}
        </motion.h1>
        <motion.p
          className="hero__intro"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.32}
        >
          {t.hero.intro}
        </motion.p>

        <motion.ul
          className="hero__meta"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.42}
        >
          <li>
            <MapPin size={16} />
            {t.hero.location}
          </li>
          <li>
            <a href={profile.phoneHref}>
              <Phone size={16} />
              {profile.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon size={16} />
              {profile.githubHandle}
            </a>
          </li>
        </motion.ul>

        <motion.div
          className="hero__cta"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.52}
        >
          <a className="btn btn--primary" href="#projects">
            {t.hero.viewProjects}
            <ArrowDown size={16} />
          </a>
          <a className="btn btn--ghost" href={profile.cvFile} download>
            <Download size={16} />
            {t.hero.download}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
