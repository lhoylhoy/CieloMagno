import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'
import { officialSocialPlatforms, verifiedSocialAccounts } from '../data/socialAccountsData'
import { useLanguage } from '../hooks/useLanguage'
import { SocialIcon } from './SocialIcon'
import { cn } from '../lib/cn'

const badgeBorder: Record<string, string> = {
  blue: 'hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5',
  crimson: 'hover:border-crimson/40 hover:bg-crimson/5',
  amber: 'hover:border-amber/40 hover:bg-amber/5',
  ink: 'hover:border-canvas/40 hover:bg-canvas/5',
}

const iconColor: Record<string, string> = {
  Facebook: 'text-[#1877F2]',
  TikTok: 'text-[#EE1D52]',
  X: 'text-canvas',
  Instagram: 'text-[#E1306C]',
  YouTube: 'text-[#FF0000]',
}

interface SocialChannelsGridProps {
  className?: string
}

export function SocialChannelsGrid({ className }: SocialChannelsGridProps) {
  const { isFil } = useLanguage()
  const accounts = verifiedSocialAccounts.filter((account) =>
    officialSocialPlatforms.includes(account.platform)
  )

  return (
    <div className={cn('grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {accounts.map((account) => {
        return (
          <article
            key={account.id}
            className={cn(
              'group relative flex flex-col justify-between rounded-2xl border border-canvas/15 bg-canvas/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lift',
              badgeBorder[account.accent] || 'hover:border-canvas/30 hover:bg-canvas/10'
            )}
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-canvas/10 bg-canvas/10 transition group-hover:scale-105">
                    <SocialIcon
                      platform={account.platform}
                      className={cn('h-5 w-5', iconColor[account.platform])}
                    />
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display text-[0.9375rem] font-bold leading-tight text-canvas">
                        {isFil ? account.label.fil : account.label.en}
                      </h4>
                      {account.verified && (
                        <span
                          className="inline-flex items-center gap-0.5 rounded-full border border-emerald/25 bg-emerald/15 px-1.5 py-1 font-mono text-[0.6875rem] font-bold text-emerald"
                          title="Verified account"
                        >
                          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                          Verified
                        </span>
                      )}
                    </div>
                    <span className="mt-0.5 block font-mono text-[0.75rem] text-canvas/65">
                      {account.displayHandle}
                    </span>
                  </div>
                </div>

                {account.featured && (
                  <span className="hidden items-center gap-1 font-mono text-[0.6875rem] uppercase tracking-wider text-amber sm:inline-flex">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    Active
                  </span>
                )}
              </div>

              <p className="mt-3 text-[0.8125rem] leading-[1.65] text-canvas/70">
                {isFil ? account.description.fil : account.description.en}
              </p>
            </div>

            <div className="mt-5 border-t border-canvas/15 pt-3">
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-between rounded-xl border border-canvas/20 bg-canvas/5 px-3.5 text-[0.8125rem] font-bold text-canvas transition hover:border-amber/50 hover:bg-amber hover:text-on-amber"
              >
                <span>{isFil ? account.actionLabel.fil : account.actionLabel.en}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        )
      })}
    </div>
  )
}

