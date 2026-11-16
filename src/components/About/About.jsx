import { useLanguage } from '../../context/LanguageContext'
import { Reveal } from '../Reveal'
import './About.scss'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <Reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="about__body">{t.about.body}</p>
        </Reveal>
      </div>
    </section>
  )
}
