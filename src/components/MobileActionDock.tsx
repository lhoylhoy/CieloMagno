import { useEffect, useState } from 'react'
import {
  BookOpen,
  Calculator,
  GraduationCap,
  Library,
  Scale,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { cn } from '../lib/cn'

export function MobileActionDock() {
  const { isFil } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Reveal dock once scrolled past hero
      if (window.scrollY > 380) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside
      aria-label="Mobile quick actions"
      aria-hidden={!visible}
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-0 z-[75] flex justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] transition-all duration-300 motion-reduce:transition-none lg:hidden',
        visible
          ? 'visible translate-y-0 opacity-100'
          : 'invisible pointer-events-none translate-y-8 opacity-0',
      )}
    >
      <nav
        className="pointer-events-auto glass-strong flex w-full max-w-[22rem] items-center justify-between gap-0.5 rounded-full border border-line/30 px-1.5 py-1.5 shadow-lift"
        aria-label="Quick navigation"
      >
        <a
          href="#agenda"
          className="flex min-h-[52px] min-w-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-full px-1 py-1 text-[0.75rem] font-bold leading-none text-muted transition hover:bg-line/10 hover:text-ink active:scale-95"
          aria-label="Jump to Agenda"
        >
          <BookOpen className="h-4 w-4 text-amber" aria-hidden="true" />
          <span>Agenda</span>
        </a>

        <a
          href="#research"
          className="flex min-h-[52px] min-w-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-full px-1 py-1 text-[0.75rem] font-bold leading-none text-muted transition hover:bg-line/10 hover:text-ink active:scale-95"
          aria-label="Jump to Resibo Vault"
        >
          <Library className="h-4 w-4 text-crimson" aria-hidden="true" />
          <span>Resibo</span>
        </a>

        <a
          href="#budol"
          className="flex min-h-[52px] min-w-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-full px-1 py-1 text-[0.75rem] font-bold leading-none text-muted transition hover:bg-line/10 hover:text-ink active:scale-95"
          aria-label="Jump to Budol Decoder"
        >
          <Scale className="h-4 w-4 text-emerald" aria-hidden="true" />
          <span>Budol</span>
        </a>

        <a
          href="#calculator"
          className="flex min-h-[52px] min-w-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-full px-1 py-1 text-[0.75rem] font-bold leading-none text-muted transition hover:bg-line/10 hover:text-ink active:scale-95"
          aria-label={isFil ? 'Tingnan ang stake ng pamilya' : 'See your household stake'}
        >
          <Calculator className="h-4 w-4 text-amber" aria-hidden="true" />
          <span>{isFil ? 'Bulsa' : 'Stake'}</span>
        </a>

        <span className="mx-0.5 h-5 w-px shrink-0 bg-line/30" aria-hidden="true" />

        <a
          href="#youth-join"
          className="flex min-h-[52px] shrink-0 items-center gap-1.5 rounded-full bg-crimson px-3.5 text-[0.75rem] font-bold leading-none text-on-crimson shadow-[0_10px_30px_-10px_rgb(var(--crimson)/0.9)] ring-1 ring-white/15 transition hover:bg-amber hover:text-on-amber active:scale-95"
          aria-label="Join the first wave"
        >
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
          <span>Sumali</span>
        </a>
      </nav>
    </aside>
  )
}

