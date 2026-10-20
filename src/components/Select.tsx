import type { ReactNode } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '../lib/cn'

export interface SelectOption {
  value: string
  label: ReactNode
}

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  /** Accessible name; there is no visible label in these filter bars. */
  label: string
  icon?: ReactNode
  className?: string
  /** Focus-ring accent, matching the section the select lives in. */
  accent?: 'crimson' | 'blue'
}

/**
 * Fully custom dropdown (Radix Select) so no native OS/browser picker is ever
 * shown. Styled to match the pill inputs used across the filter bars.
 */
export function Select({
  value,
  onValueChange,
  options,
  label,
  icon,
  className,
  accent = 'crimson',
}: SelectProps) {
  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <RadixSelect.Trigger
        aria-label={label}
        className={cn(
          'inline-flex min-h-[44px] w-full items-center justify-between gap-2 rounded-full border border-line/25 bg-canvas/60 px-4 text-left text-[0.8125rem] font-semibold text-ink outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 sm:w-auto',
          accent === 'blue'
            ? 'focus-visible:border-blue/60 focus-visible:ring-blue/25 data-[state=open]:border-blue/60'
            : 'focus-visible:border-crimson/60 focus-visible:ring-crimson/25 data-[state=open]:border-crimson/60',
          className,
        )}
      >
        {icon ? <span className="shrink-0 text-muted">{icon}</span> : null}
        <span className="min-w-0 flex-1 truncate">
          <RadixSelect.Value />
        </span>
        <RadixSelect.Icon className="shrink-0 text-muted">
          <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={6}
          collisionPadding={12}
          className="glass-strong z-[120] max-h-[min(22rem,var(--radix-select-content-available-height))] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl border border-line/25 shadow-lift"
        >
          <RadixSelect.Viewport className="p-1.5">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className="relative flex min-h-[44px] cursor-pointer select-none items-center gap-2 rounded-xl py-2 pl-8 pr-3 text-[0.8125rem] font-semibold text-ink outline-none transition data-[highlighted]:bg-ink data-[highlighted]:text-canvas"
              >
                <RadixSelect.ItemIndicator className="absolute left-2.5 inline-flex items-center">
                  <Check className="h-3.5 w-3.5 text-crimson" aria-hidden="true" />
                </RadixSelect.ItemIndicator>
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

