import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, Globe, Library, Moon, Sun, X } from 'lucide-react'
import { navItems } from '../data/siteData'
import { linktreeUrl } from '../data/socialAccountsData'
import { useLanguage } from '../hooks/useLanguage'
import { useReturnFocus } from '../hooks/useReturnFocus'
import type { Theme } from '../hooks/useTheme'
import { SocialFollowBar } from './SocialFollowBar'
import { cn } from '../lib/cn'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  active: string
  theme: Theme
  onToggleTheme: () => void
  onOpenCV: () => void
}

export function MobileMenu({
  open,
  onClose,
  active,
  theme,
  onToggleTheme,
  onOpenCV,
}: MobileMenuProps) {
  const { isFil, toggleLang } = useLanguage()
  const onCloseAutoFocus = useReturnFocus(open)

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[95] animate-fade-in bg-night/70 backdrop-blur-md lg:hidden" />
        <Dialog.Content
          aria-describedby={undefined}
          onCloseAutoFocus={onCloseAutoFocus}
          className="fixed inset-x-0 bottom-0 z-[96] flex max-h-[90svh] w-full animate-slide-up flex-col overflow-y-auto rounded-t-[2rem] border-t border-line/30 bg-canvas p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] shadow-lift outline-none sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[min(92vw,26rem)] sm:animate-none sm:rounded-none sm:border-l sm:border-t-0 sm:p-6 lg:hidden"
        >
          <div className="mx-auto mb-4 h-1.5 w-12 shrink-0 rounded-full bg-line/40 sm:hidden" aria-hidden="true" />
          <div className="flex items-center justify-between">
            <div>
              <p className="label-mono text-crimson">Menu · 2028</p>
              <Dialog.Title asChild>
                <p className="mt-1 font-display text-lg font-extrabold text-ink">Cielo Magno</p>
              </Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-line/30 bg-panel text-ink transition hover:border-crimson/40 hover:text-crimson"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-7 flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onClose}
                aria-current={active === item.id ? 'page' : undefined}
                className={cn(
                  'group flex min-h-[56px] items-center justify-between gap-3 rounded-xl border-b border-line/25 px-3 py-3 transition',
                  active === item.id
                    ? 'bg-raised text-ink'
                    : 'text-ink hover:bg-panel hover:text-crimson',
                )}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="font-mono text-[0.6875rem] text-crimson">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate font-display text-xl font-bold tracking-tight">
                    {item.label}
                  </span>
                </span>
                <span className="font-mono text-[0.6875rem] text-muted" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-5">
            <p className="label-mono text-muted">
              {isFil ? 'Mabilisang daan' : 'Quick links'}
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              {[
                { id: 'journey', label: isFil ? 'Ang paglalakbay' : 'The Journey' },
                { id: 'speaking', label: isFil ? 'Global na ruta' : 'Global Route' },
                { id: 'media', label: isFil ? 'Ang megaphone' : 'The Megaphone' },
                { id: 'viral', label: isFil ? 'Ang graph' : 'The Graph' },
                { id: 'calculator', label: isFil ? 'Stake ng pamilya' : 'Household stake' },
                { id: 'family-gc', label: 'Family GC' },
                { id: 'supporter-pass', label: 'Supporter pass' },
                { id: 'social-channels', label: 'Social channels' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="flex min-h-[44px] items-center rounded-xl border border-line/25 bg-panel px-3 py-2 text-[0.75rem] font-semibold text-muted transition hover:border-crimson/40 hover:text-ink active:scale-[0.98]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <a href="#youth-join" onClick={onClose} className="btn btn-accent w-full">
              {isFil ? 'Sumali sa Movement' : 'Join the movement'}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={toggleLang}
                className="btn btn-ghost w-full"
              >
                <Globe className="h-4 w-4 text-amber" aria-hidden="true" />
                {isFil ? 'English (EN)' : 'Filipino (FIL)'}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenCV()
                }}
                className="btn btn-ghost w-full"
              >
                <Library className="h-4 w-4" aria-hidden="true" />
                {isFil ? '19-pahinang CV' : 'Download CV'}
              </button>
            </div>
            <button type="button" onClick={onToggleTheme} aria-pressed={theme === 'light'} className="btn btn-ghost w-full">
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
              {theme === 'dark' ? 'Warm light mode' : 'Night mode'}
            </button>
          </div>

          <div className="mt-6 border-t border-line/25 pt-5">
            <div className="flex items-center justify-between">
              <p className="label-mono text-crimson">
                {isFil ? 'Sundan sa Social Media' : 'Verified Social Media'}
              </p>
              <a
                href={linktreeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center font-mono text-[0.75rem] text-muted transition hover:text-crimson"
              >
                @cielomagno
              </a>
            </div>
            <SocialFollowBar variant="light" size="sm" includeLinktree={false} className="mt-2.5" />
          </div>

          <p className="mt-auto pt-8 text-[0.8125rem] leading-[1.6] text-muted">
            {isFil
              ? 'Opisyal na campaign website ni Dr. Cielo Magno para sa Senado 2028. May resibo, may prinsipyo.'
              : 'The official campaign website of Dr. Cielo Magno for Senator 2028. May resibo, may prinsipyo.'}
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
