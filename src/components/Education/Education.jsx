import { GraduationCap } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { Reveal } from '../Reveal'
import './Education.scss'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section className="education" id="education">
      <div className="education__inner">
        <Reveal>
          <p className="eyebrow">{t.education.eyebrow}</p>
          <h2>{t.education.title}</h2>
        </Reveal>

        <ol className="education__timeline">
          {t.education.items.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.08}>
              <li>
                <span className="education__icon">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <p className="education__period">{item.period}</p>
                  <h3>{item.program}</h3>
                  <p>{item.school}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
