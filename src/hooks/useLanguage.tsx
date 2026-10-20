import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'en' | 'fil'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  isFil: boolean
}

const STORAGE_KEY = 'cielo-2028-lang'

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => undefined,
  toggleLang: () => undefined,
  isFil: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      return saved === 'fil' ? 'fil' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore storage errors in private browsing
    }
    document.documentElement.lang = lang === 'fil' ? 'fil' : 'en'
  }, [lang])

  const setLang = (next: Language) => setLangState(next)
  const toggleLang = () => setLangState((prev) => (prev === 'en' ? 'fil' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isFil: lang === 'fil' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

