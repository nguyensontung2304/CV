import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import GithubIcon from '../icons/GithubIcon'
import { useLanguage } from '../../context/LanguageContext'
import { profile } from '../../data/profile'
import { Reveal } from '../Reveal'
import './Contact.scss'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const body = `${form.name}\n\n${form.message}`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'CV')}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p className="contact__lead">{t.contact.body}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <ul className="contact__cards">
              <li>
                <a href={profile.phoneHref}>
                  <Phone size={18} />
                  <span>
                    <strong>{t.contact.phone}</strong>
                    {profile.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  <span>
                    <strong>{t.contact.email}</strong>
                    {profile.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <GithubIcon size={18} />
                  <span>
                    <strong>{t.contact.github}</strong>
                    {profile.githubHandle}
                  </span>
                </a>
              </li>
              <li>
                <div>
                  <MapPin size={18} />
                  <span>
                    <strong>{t.contact.location}</strong>
                    {t.hero.location}
                  </span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="contact__form" onSubmit={onSubmit}>
              <label>
                {t.contact.formName}
                <input name="name" value={form.name} onChange={onChange} required />
              </label>
              <label>
                {t.contact.formSubject}
                <input name="subject" value={form.subject} onChange={onChange} required />
              </label>
              <label>
                {t.contact.formMessage}
                <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
              </label>
              <button type="submit">
                <Send size={16} />
                {t.contact.formCta}
              </button>
              <p>{t.contact.formHint}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
