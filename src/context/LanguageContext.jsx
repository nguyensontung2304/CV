import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { en } from '../i18n/en'
import { vi } from '../i18n/vi'

const translations = { en, vi }
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('cv-lang')
    return saved === 'vi' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('cv-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
