import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";
import "./Navbar.scss";

const links = [
  { id: "name", key: "name" },
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "projects", key: "projects" },
  { id: "education", key: "education" },
  { id: "contact", key: "contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
    >
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={close}>
          {lang === "en" ? "Nguyen Son Tung" : "Nguyễn Sơn Tùng"}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="nav__lang" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "is-active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "vi" ? "is-active" : ""}
              onClick={() => setLang("vi")}
            >
              VI
            </button>
          </div>
          <a className="nav__cv" href={profile.cvFile} download>
            <Download size={16} strokeWidth={2} />
            <span>{t.nav.download}</span>
          </a>
          <button
            className="nav__menu"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`nav__drawer ${open ? "is-visible" : ""}`}>
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={close}>
            {t.nav[link.key]}
          </a>
        ))}
      </div>
    </header>
  );
}
