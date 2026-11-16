import { Code2, Database, Server, Terminal, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { Reveal } from '../Reveal'
import './Skills.scss'

const icons = {
  languages: Terminal,
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <Reveal>
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2>{t.skills.title}</h2>
        </Reveal>

        <div className="skills__grid">
          {t.skills.groups.map((group, index) => {
            const Icon = icons[group.id] ?? Code2
            return (
              <Reveal key={group.id} delay={index * 0.06}>
                <article className="skill-card">
                  <div className="skill-card__head">
                    <span className="skill-card__icon">
                      <Icon size={18} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 + itemIndex * 0.03 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
