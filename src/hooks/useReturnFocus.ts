import { useCallback, useEffect, useRef } from 'react'

/**
 * Controlled Radix dialogs (no Dialog.Trigger) do not always know which element
 * should receive focus after closing. Capture the element that was focused when
 * the dialog opened and restore it explicitly.
 */
export function useReturnFocus(open: boolean) {
  const returnTarget = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    const active = document.activeElement
    if (active instanceof HTMLElement && !active.closest('[role="dialog"]')) {
      returnTarget.current = active
    }
  }, [open])

  return useCallback((event: Event) => {
    event.preventDefault()
    const target = returnTarget.current
    returnTarget.current = null
    if (target?.isConnected) target.focus()
  }, [])
}
