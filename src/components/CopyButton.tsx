import { Check, Copy } from 'lucide-react'
import { cn } from '../lib/cn'
import { useCopy } from '../hooks/useCopy'

interface CopyButtonProps {
  text: string
  label?: string
  copiedLabel?: string
  className?: string
  variant?: 'primary' | 'accent' | 'ghost' | 'amber'
  compact?: boolean
  /** Optional side effect after a successful copy (e.g. local action counter). */
  onCopied?: () => void
}

export function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied',
  className,
  variant = 'ghost',
  compact = false,
  onCopied,
}: CopyButtonProps) {
  const { copied, copy } = useCopy()

  return (
    <button
      type="button"
      onClick={() => {
        void copy(text).then((success) => {
          if (success) onCopied?.()
        })
      }}
      className={cn(
        'btn',
        compact && 'btn-sm',
        variant === 'primary' && 'btn-primary',
        variant === 'accent' && 'btn-accent',
        variant === 'amber' && 'btn-amber',
        variant === 'ghost' && 'btn-ghost',
        className,
      )}
      aria-live="polite"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  )
}
