import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Camera, Download, ExternalLink, Library, Mail } from 'lucide-react'
import { campaign } from '../data/campaignData'
import { navItems, siteMeta } from '../data/siteData'
import { linktreeUrl } from '../data/socialAccountsData'
import { profile } from '../data/profileData'
import { stickerPack } from '../data/youthMovementData'
import { PhotoCreditsModal } from './PhotoCreditsModal'
import { SocialFollowBar } from './SocialFollowBar'

interface FooterProps {
  onOpenCV: () => void
}

export function Footer({ onOpenCV }: FooterProps) {
  const [creditsOpen, setCreditsOpen] = useState(false)

  return (
    <>
      <footer className="on-inverse relative bg-ink text-canvas">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-canvas/15 to-transparent"
        aria-hidden="true"
      />
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex min-h-[44px] items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-canvas text-ink ring-1 ring-canvas/30">
                <span className="font-display text-sm font-extrabold tracking-tight">CM</span>
              </span>
              <span>
                <span className="block font-display text-sm font-extrabold uppercase tracking-[0.06em]">
                  Cielo Magno
                </span>
                <span className="mt-0.5 block font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-canvas/65">
                  Senator 2028 · {profile.tagline}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[0.875rem] leading-[1.7] text-canvas/65">
              The official campaign website of Dr. Cielo Magno for Senator 2028. Built from
              her 19-page source CV and public filings — every claim linked, every receipt
              open to scrutiny.
            </p>
            <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-canvas/65">
              May Resibo · May Prinsipyo · Cielo 2028
            </p>
            <div className="mt-5 border-t border-canvas/10 pt-4">
              <p className="label-mono text-canvas/65">Follow Dr. Cielo Magno</p>
              <SocialFollowBar variant="dark" size="sm" className="mt-2" />
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="label-mono text-canvas/65">Explore</p>
            <ul className="mt-2">
              {navItems
                .filter((item) => item.id !== 'top')
                .map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex min-h-[44px] items-center text-[0.875rem] text-canvas/70 transition hover:text-amber"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>

            <p className="label-mono mt-5 text-canvas/65">More</p>
            <ul className="mt-2">
              {[
                { id: 'journey', label: 'The Journey' },
                { id: 'speaking', label: 'Campus & Global Route' },
                { id: 'media', label: 'The Megaphone' },
                { id: 'viral', label: 'The Graph' },
                { id: 'agenda', label: 'The 2028 Agenda' },
                { id: 'social-channels', label: 'Social Channels' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-[44px] items-center text-[0.875rem] text-canvas/70 transition hover:text-amber"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label-mono text-canvas/65">Source &amp; verification</p>
            <p className="mt-3 text-[0.875rem] leading-[1.7] text-canvas/65">
              {siteMeta.cvPages} scanned pages, preserved without edits. Last updated{' '}
              {siteMeta.lastUpdated}.
            </p>
            <button
              type="button"
              onClick={onOpenCV}
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-canvas/20 px-4 text-[0.8125rem] font-bold text-canvas transition hover:border-amber/40 hover:bg-canvas/10"
            >
              <Library className="h-4 w-4" aria-hidden="true" />
              Download the CV
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 flex min-h-[44px] items-center gap-2 text-[0.8125rem] text-canvas/65 transition hover:text-amber"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-2 text-[0.8125rem] text-amber transition hover:text-canvas"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              linktr.ee/cielomagno (Verified accounts)
            </a>
            <a
              href={stickerPack.href}
              download
              className="flex min-h-[44px] items-center gap-2 text-[0.8125rem] text-canvas/65 transition hover:text-amber"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Sticker pack (4 SVGs)
            </a>
            <button
              type="button"
              onClick={() => setCreditsOpen(true)}
              className="flex min-h-[44px] items-center gap-2 text-[0.8125rem] text-canvas/65 transition hover:text-amber"
            >
              <Camera className="h-4 w-4" aria-hidden="true" />
              Photo credits &amp; licenses
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-canvas/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] leading-[1.65] text-canvas/65">
            © {new Date().getFullYear()} ·{' '}
            {campaign.publicRelease && campaign.authorized && campaign.candidateConfirmed
              ? campaign.publicDisclaimer
              : campaign.reviewDisclaimer}
          </p>
          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-full border border-canvas/15 px-3.5 text-[0.75rem] font-bold text-canvas/75 transition hover:border-amber/50 hover:text-amber sm:self-auto"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
      </footer>
      <PhotoCreditsModal open={creditsOpen} onClose={() => setCreditsOpen(false)} />
    </>
  )
}
