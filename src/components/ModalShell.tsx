import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useReturnFocus } from '../hooks/useReturnFocus'
import { cn } from '../lib/cn'

interface ModalShellProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  closeLabel?: string
}

/**
 * Accessible modal built on Radix Dialog. Radix supplies the focus trap, focus
 * restoration, Escape/outside-click dismissal, scroll lock and ARIA wiring.
 * Render a <ModalTitle> inside so the dialog is labelled.
 */
export function ModalShell({
  open,
  onClose,
  children,
  className,
  closeLabel = 'Close dialog',
}: ModalShellProps) {
  const onCloseAutoFocus = useReturnFocus(open)

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] overflow-y-auto bg-night/80 backdrop-blur-md data-[state=open]:animate-fade-in">
          <div className="flex min-h-full items-start justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6 md:p-10">
            <Dialog.Content
              aria-describedby={undefined}
              onCloseAutoFocus={onCloseAutoFocus}
              className={cn(
                'glass-strong relative w-full max-w-3xl rounded-[1.5rem] shadow-lift ring-1 ring-white/10 outline-none data-[state=open]:animate-slide-up',
                className,
              )}
            >
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label={closeLabel}
                  className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full border border-line/30 bg-surface/90 text-ink shadow-sm transition hover:border-crimson/40 hover:bg-ink hover:text-canvas active:scale-95"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </Dialog.Close>
              {children}
            </Dialog.Content>
          </div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

/** The dialog's accessible name. Renders an <h2> by default. */
export const ModalTitle = forwardRef<
  ElementRef<typeof Dialog.Title>,
  ComponentPropsWithoutRef<typeof Dialog.Title>
>(function ModalTitle(props, ref) {
  return <Dialog.Title ref={ref} {...props} />
})
