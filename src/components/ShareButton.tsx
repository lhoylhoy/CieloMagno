import { Check, Copy, Share2 } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { campaign } from '../data/campaignData'
import { useCopy } from '../hooks/useCopy'
import { cn } from '../lib/cn'

interface ShareButtonProps {
  text: string
  label?: string
  className?: string
  variant?: 'primary' | 'accent' | 'ghost' | 'amber'
  compact?: boolean
}

const itemClass =
  'flex min-h-[44px] cursor-pointer select-none items-center gap-2.5 rounded-xl px-3 py-2.5 text-[0.8125rem] font-semibold text-ink outline-none transition data-[highlighted]:bg-ink data-[highlighted]:text-canvas'

/**
 * Custom share menu (Radix DropdownMenu) instead of the OS share sheet, ordered
 * for Philippine sharing habits (Copy for Messenger/FB, Facebook, Viber,
 * WhatsApp, X). The page URL is only attached once the site is public.
 */
export function ShareButton({
  text,
  label = 'Share',
  className,
  variant = 'ghost',
  compact = false,
}: ShareButtonProps) {
  const { copied, copy } = useCopy()
  const isPublic =
    campaign.publicRelease && campaign.authorized && campaign.candidateConfirmed
  const url = isPublic ? window.location.href : ''
  const fullText = url ? `${text}\n${url}` : text

  const enc = encodeURIComponent
  const targets = [
    ...(url
      ? [
          {
            label: 'Facebook',
            href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}&quote=${enc(text)}`,
          },
        ]
      : []),
    {
      label: 'Viber',
      href: `viber://forward?text=${enc(fullText)}`,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${enc(fullText)}`,
    },
    {
      label: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${enc(text)}${url ? `&url=${enc(url)}` : ''}`,
    },
  ]

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className={cn(
            'btn',
            compact && 'btn-sm',
            variant === 'primary' && 'btn-primary',
            variant === 'accent' && 'btn-accent',
            variant === 'amber' && 'btn-amber',
            variant === 'ghost' && 'btn-ghost',
            className,
          )}
        >
          <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{label}</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={8}
          collisionPadding={12}
          className="glass-strong z-[120] min-w-[13.5rem] rounded-2xl border border-line/25 p-1.5 shadow-lift"
        >
          <DropdownMenu.Item
            className={itemClass}
            onSelect={(event) => {
              event.preventDefault()
              void copy(fullText)
            }}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
            ) : (
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span aria-live="polite">
              {copied ? 'Copied — paste in Messenger/FB' : 'Copy for Messenger / FB'}
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-line/25" />
          {targets.map((target) => (
            <DropdownMenu.Item key={target.label} asChild className={itemClass}>
              <a href={target.href} target="_blank" rel="noreferrer noopener">
                {target.label}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
