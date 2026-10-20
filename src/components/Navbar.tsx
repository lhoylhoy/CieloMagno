import { useEffect, useState } from 'react'
import { ArrowUpRight, Calculator, Globe, Library, Menu, Moon, Sun } from 'lucide-react'
import { navItems } from '../data/siteData'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { MobileMenu } from './MobileMenu'
import { cn } from '../lib/cn'

const sectionIds = navItems.map((item) => item.id)

const navLabelsFil: Record<string, string> = {
  why: 'Bakit 2028',
  agenda: '2028 Agenda',
  budol: 'Budol',
  youth: 'Koalisyon',
  research: 'Resibo',
  contact: 'Ugnayan',
}

interface NavbarProps {
  onOpenCV: () => void
}

export function Navbar({ onOpenCV }: NavbarProps) {
  const active = useActiveSection(sectionIds)
  const { theme, toggle } = useTheme()
  const { lang, toggleLang, isFil } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[85] h-[2px] bg-transparent" aria-hidden="true">
        <div
          className="h-full origin-left bg-gradient-to-r from-crimson via-amber to-emerald transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header className="no-print fixed inset-x-0 top-0 z-[80] pt-3 sm:pt-4">
        <div className="shell">
          <div className="glass flex items-center justify-between gap-2 rounded-full px-3 py-2 shadow-lift sm:gap-3 sm:px-4 sm:py-2.5">
            <a
              href="#top"
              className="group flex items-center gap-3 rounded-full pr-1 sm:pr-2"
              aria-label="Cielo Magno — back to top"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 bg-ink text-canvas shadow-[inset_0_1px_0_rgb(255_255_255/0.18)] transition duration-300 group-hover:rotate-6 group-hover:shadow-glow sm:h-11 sm:w-11">
                <span className="font-display text-[0.82rem] font-extrabold tracking-[-0.02em]">
                  CM
                </span>
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-display text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-ink">
                  Cielo Magno
                </span>
                <span className="mt-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                  {isFil
                    ? 'Senador 2028 · Ekonomista ng Bayan'
                    : "Senator 2028 · The People's Economist"}
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navItems
                .filter((item) => item.id !== 'top')
                .map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={active === item.id ? 'page' : undefined}
                    className={cn(
                      'relative isolate inline-flex min-h-[44px] items-center rounded-full px-2.5 text-[0.8125rem] font-semibold transition-colors duration-300 xl:px-3',
                      active === item.id
                        ? 'text-ink'
                        : 'text-muted hover:bg-line/10 hover:text-ink',
                    )}
                  >
                    <span
                      className={cn(
                        'absolute inset-0 -z-10 rounded-full border shadow-[inset_0_1px_0_rgb(var(--specular-line)/var(--specular-alpha))] transition-all duration-300',
                        active === item.id
                          ? 'scale-100 border-line/40 bg-raised opacity-100'
                          : 'scale-90 border-transparent bg-transparent opacity-0',
                      )}
                      aria-hidden="true"
                    />
                    {isFil ? (navLabelsFil[item.id] ?? item.shortLabel) : item.shortLabel}
                  </a>
                ))}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={toggleLang}
                aria-label={
                  lang === 'en'
                    ? 'Switch language to Filipino (Taglish)'
                    : 'Switch language to English'
                }
                title={lang === 'en' ? 'Basahin sa Filipino' : 'Read in English'}
                className="inline-flex h-11 min-w-[4.5rem] items-center justify-center gap-1.5 rounded-full border border-line/30 bg-panel px-2 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted transition hover:border-crimson/50 hover:text-ink"
              >
                <Globe className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                <span
                  className={cn(
                    'rounded-full px-1.5 py-0.5 transition-colors',
                    lang === 'en' ? 'bg-crimson text-on-crimson' : 'text-muted',
                  )}
                >
                  EN
                </span>
                <span className="text-line/50" aria-hidden="true">
                  /
                </span>
                <span
                  className={cn(
                    'rounded-full px-1.5 py-0.5 transition-colors',
                    lang === 'fil' ? 'bg-crimson text-on-crimson' : 'text-muted',
                  )}
                >
                  FIL
                </span>
              </button>
              <a
                href="#calculator"
                aria-label={
                  isFil ? 'Tingnan ang stake ng pamilya mo' : 'See your household stake'
                }
                title={isFil ? 'Stake ng pamilya' : 'Household stake'}
                className="hidden h-11 w-11 place-items-center rounded-full border border-line/30 text-muted transition hover:border-amber/60 hover:bg-amber/10 hover:text-ink xl:grid"
              >
                <Calculator className="h-4 w-4 text-amber" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={toggle}
                aria-pressed={theme === 'light'}
                className="group grid h-11 w-11 place-items-center rounded-full border border-line/30 text-muted transition duration-300 hover:border-amber/60 hover:bg-amber/10 hover:text-ink hover:shadow-[0_0_0_6px_rgb(var(--amber)/0.08)]"
                aria-label={`Switch to ${theme === 'dark' ? 'warm light' : 'night'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun
                    className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90"
                    aria-hidden="true"
                  />
                ) : (
                  <Moon
                    className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-12"
                    aria-hidden="true"
                  />
                )}
              </button>
              <button
                type="button"
                onClick={onOpenCV}
                aria-label="Get the CV"
                className="hidden min-h-11 items-center gap-1.5 rounded-full border border-line/30 px-3.5 text-[0.75rem] font-semibold text-muted transition hover:border-line/50 hover:bg-panel hover:text-ink xl:flex"
              >
                <Library className="h-3.5 w-3.5" aria-hidden="true" />
                CV
              </button>
              <a href="#youth-join" className="btn btn-accent hidden sm:inline-flex">
                {isFil ? 'Sumali' : 'Join'}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line/30 bg-panel text-ink transition hover:border-crimson/40 hover:text-crimson lg:hidden"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
        theme={theme}
        onToggleTheme={toggle}
        onOpenCV={onOpenCV}
      />
    </>
  )
}
