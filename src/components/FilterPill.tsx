import type { ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Toggle from '@radix-ui/react-toggle'
import { cn } from '../lib/cn'

const pillBase =
  'inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 text-[0.8125rem] font-semibold transition duration-200 active:scale-[0.98]'
const pillInactive =
  'border-line/25 bg-panel text-muted hover:border-crimson/35 hover:text-ink'
const pillActive = 'border-transparent bg-ink text-canvas shadow-lift'

interface FilterPillProps {
  active?: boolean
  onClick?: () => void
  children: ReactNode
  className?: string
  count?: number
}

/** Pressed/unpressed filter chip, built on Radix Toggle (aria-pressed). */
export function FilterPill({ active, onClick, children, className, count }: FilterPillProps) {
  return (
    <Toggle.Root
      pressed={Boolean(active)}
      onClick={onClick}
      className={cn(pillBase, active ? pillActive : pillInactive, className)}
    >
      <span>{children}</span>
      {typeof count === 'number' ? (
        <span
          className={cn(
            'rounded-full px-1.5 py-0.5 font-mono text-[0.6875rem]',
            active ? 'bg-canvas/15 text-canvas' : 'bg-line/10 text-muted',
          )}
        >
          {count}
        </span>
      ) : null}
    </Toggle.Root>
  )
}

interface TabPillProps {
  value: string
  children: ReactNode
  className?: string
  count?: number
}

/** Pill-styled tab trigger. Must be rendered inside a Radix <Tabs.List>. */
export function TabPill({ value, children, className, count }: TabPillProps) {
  return (
    <Tabs.Trigger
      value={value}
      className={cn(
        'group',
        pillBase,
        pillInactive,
        'data-[state=active]:border-transparent data-[state=active]:bg-ink data-[state=active]:text-canvas data-[state=active]:hover:text-canvas',
        className,
      )}
    >
      <span>{children}</span>
      {typeof count === 'number' ? (
        <span className="rounded-full bg-line/10 px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted group-data-[state=active]:bg-canvas/15 group-data-[state=active]:text-canvas">
          {count}
        </span>
      ) : null}
    </Tabs.Trigger>
  )
}
