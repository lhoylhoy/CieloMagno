import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'cielo-2028-action-count'

interface ActionState {
  count: number
  lastAction: string
  updatedAt: number
}

const EMPTY_STATE: ActionState = { count: 0, lastAction: '', updatedAt: 0 }

function readInitialState(): ActionState {
  if (typeof window === 'undefined') return EMPTY_STATE
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY_STATE
    const parsed = JSON.parse(raw) as Partial<ActionState>
    const count =
      typeof parsed.count === 'number' && Number.isFinite(parsed.count) && parsed.count > 0
        ? Math.floor(parsed.count)
        : 0
    return {
      count,
      lastAction: typeof parsed.lastAction === 'string' ? parsed.lastAction : '',
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
    }
  } catch {
    return EMPTY_STATE
  }
}

let state = readInitialState()
const listeners = new Set<() => void>()

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): ActionState {
  return state
}

function persist(next: ActionState): void {
  state = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Private browsing can block storage; the in-memory count still works.
  }
  listeners.forEach((listener) => listener())
}

/**
 * Record a real, locally verifiable action (pledge, copied GC reply, generated
 * pass). There is no fake nationwide counter: the number is this device only.
 */
export function recordAction(action: string): void {
  persist({
    count: state.count + 1,
    lastAction: action,
    updatedAt: Date.now(),
  })
}

export interface ActionMilestone {
  label: string
  next: number | null
}

export function getActionMilestone(count: number, isFil: boolean): ActionMilestone {
  if (count >= 25) {
    return { label: isFil ? 'Tagabuo ng kilusan' : 'Movement builder', next: null }
  }
  if (count >= 10) {
    return { label: isFil ? 'Multiplier' : 'Multiplier', next: 25 }
  }
  if (count >= 5) {
    return { label: isFil ? 'Organizer ng komunidad' : 'Community organizer', next: 10 }
  }
  if (count >= 3) {
    return { label: isFil ? 'Tuloy-tuloy na tagapagtanggol' : 'Consistent advocate', next: 5 }
  }
  if (count >= 1) {
    return { label: isFil ? 'Unang hakbang' : 'First step', next: 3 }
  }
  return { label: isFil ? 'Hindi pa nag-uumpisa' : 'Not started yet', next: 1 }
}

export function usePledgeCounter() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  const previous = useRef(snapshot.count)
  const timer = useRef<number | undefined>(undefined)
  const [celebrating, setCelebrating] = useState(false)

  useEffect(() => {
    if (snapshot.count > previous.current) {
      setCelebrating(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCelebrating(false), 1_500)
    }
    previous.current = snapshot.count
  }, [snapshot.count])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const record = useCallback((action: string) => {
    recordAction(action)
  }, [])

  return {
    count: snapshot.count,
    lastAction: snapshot.lastAction,
    celebrating,
    record,
  }
}
