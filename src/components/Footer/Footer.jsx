import { Mail } from "lucide-react";
import GithubIcon from "../icons/GithubIcon";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";
import "./Footer.scss";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>{t.footer.name}</p>
        <div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon size={25} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
