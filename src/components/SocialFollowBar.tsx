import { officialSocialPlatforms, verifiedSocialAccounts } from '../data/socialAccountsData'
import { SocialIcon } from './SocialIcon'
import { cn } from '../lib/cn'

interface SocialFollowBarProps {
  className?: string
  variant?: 'light' | 'dark'
  includeLinktree?: boolean
  size?: 'sm' | 'md'
}

export function SocialFollowBar({
  className,
  variant = 'dark',
  includeLinktree = false,
  size = 'md',
}: SocialFollowBarProps) {
  const accounts = includeLinktree
    ? verifiedSocialAccounts
    : verifiedSocialAccounts.filter((account) => officialSocialPlatforms.includes(account.platform))

  const sizeClasses = 'h-11 w-11'
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-[1.15rem] w-[1.15rem]'

  return (
    <div
      className={cn('flex flex-wrap items-center gap-2', className)}
      role="group"
      aria-label="Verified social media profiles"
    >
      {accounts.map((account) => {
        let buttonStyle = ''
        if (variant === 'light') {
          buttonStyle =
            'border-line/30 bg-panel text-ink hover:border-crimson/50 hover:bg-raised hover:text-crimson'
        } else {
          // dark
          buttonStyle =
            'border-canvas/15 bg-canvas/5 text-canvas hover:border-amber/40 hover:bg-canvas/15 hover:text-amber'
        }

        return (
          <a
            key={account.id}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${account.platform}: ${account.displayHandle}`}
            aria-label={`${account.actionLabel.en} (${account.displayHandle})`}
            className={cn(
              'grid place-items-center rounded-full border transition hover:scale-105 active:scale-95',
              sizeClasses,
              buttonStyle
            )}
          >
            <SocialIcon platform={account.platform} className={iconSize} />
          </a>
        )
      })}
    </div>
  )
}

