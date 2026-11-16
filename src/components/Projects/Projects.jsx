import { ExternalLink } from 'lucide-react'
import GithubIcon from '../icons/GithubIcon'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { Reveal } from '../Reveal'
import './Projects.scss'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <Reveal>
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2>{t.projects.title}</h2>
        </Reveal>

        <div className="projects__list">
          {t.projects.items.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.28 }}>
                <div className="project-card__meta">
                  <span>{project.period}</span>
                  <span>
                    {t.projects.roleLabel}: {project.role}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {project.deployment ? <p className="project-card__deploy">{project.deployment}</p> : null}
                <ul className="project-card__stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <ul className="project-card__bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} />
                    {t.projects.live}
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <GithubIcon size={16} />
                    {t.projects.source}
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
