import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

const accentBadge = {
  crimson: 'border-crimson/35 bg-crimson/10',
  amber: 'border-amber/35 bg-amber/10',
  emerald: 'border-emerald/35 bg-emerald/10',
  blue: 'border-blue/35 bg-blue/10',
} as const

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  accent?: keyof typeof accentText
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  actions,
  accent = 'crimson',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              'inline-flex h-7 min-w-7 items-center justify-center rounded-full border px-2 font-mono text-[0.6875rem] font-bold tracking-[0.08em]',
              accentText[accent],
              accentBadge[accent],
            )}
          >
            {index}
          </span>
          <span className="h-px w-9 bg-line/50" aria-hidden="true" />
          <span className="label-mono text-muted">{eyebrow}</span>
        </div>
        <h2 className="display-tight mt-4 text-[clamp(2rem,5.2vw,4.2rem)] leading-[1.03] text-ink">
          {title}
        </h2>
        {description ? (
          <div className="mt-5 max-w-2xl text-[1rem] leading-[1.7] text-muted [text-wrap:pretty]">
            {description}
          </div>
        ) : null}
      </div>
      {actions ? <div className="min-w-0 max-w-full lg:max-w-[46%] lg:shrink-0">{actions}</div> : null}
    </div>
  )
}
