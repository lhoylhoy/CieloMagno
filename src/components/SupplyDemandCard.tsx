import { useState } from 'react'
import { ArrowUpRight, BarChart3, Info } from 'lucide-react'
import { cn } from '../lib/cn'

interface SupplyDemandCardProps {
  className?: string
}

export function SupplyDemandCard({ className }: SupplyDemandCardProps) {
  const [showCap, setShowCap] = useState(true)

  return (
    <aside className={cn('relative mx-auto w-full max-w-md lg:mx-0', className)}>
      <div className="card grain-card relative overflow-hidden rounded-[1.75rem] bg-surface p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-line/25 pb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-crimson" aria-hidden="true" />
            <span className="label-mono text-muted">Supply &amp; demand</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-amber">
              Sept 2023
            </span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
              Econ 101
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-display text-lg font-bold leading-tight text-ink">
            What a price cap does
          </p>
          <div className="flex shrink-0 rounded-full border border-line/30 bg-canvas/60 p-0.5" role="group" aria-label="Chart scenario">
            <button
              type="button"
              onClick={() => setShowCap(true)}
              aria-pressed={showCap}
              className={cn('min-h-[44px] rounded-full px-3 font-mono text-[0.75rem] uppercase tracking-[0.06em] transition', showCap ? 'bg-crimson text-on-crimson' : 'text-muted hover:text-ink')}
            >
              Price cap
            </button>
            <button
              type="button"
              onClick={() => setShowCap(false)}
              aria-pressed={!showCap}
              className={cn('min-h-[44px] rounded-full px-3 font-mono text-[0.75rem] uppercase tracking-[0.06em] transition', !showCap ? 'bg-emerald text-on-emerald' : 'text-muted hover:text-ink')}
            >
              Market
            </button>
          </div>
        </div>

        <div className="relative mt-3 overflow-hidden rounded-2xl border border-line/30 bg-canvas/50 p-2">
          <svg
            viewBox="0 0 440 300"
            className="h-auto w-full"
            role="img"
            aria-label={showCap ? 'Illustrative supply and demand chart with a price ceiling below equilibrium, showing a shortage between quantity supplied and quantity demanded.' : 'Illustrative supply and demand chart clearing at the market equilibrium.'}
          >
            <defs>
              <linearGradient id="shortage-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgb(var(--crimson))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(var(--crimson))" stopOpacity="0.03" />
              </linearGradient>
              <marker id="arrow-head" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgb(var(--muted))" />
              </marker>
            </defs>

            {[80, 120, 160, 200, 240].map((y) => (
              <line key={`h-${y}`} x1="54" x2="414" y1={y} y2={y} stroke="rgb(var(--line))" strokeOpacity="0.09" strokeDasharray="2 5" />
            ))}
            {[100, 160, 220, 280, 340, 400].map((x) => (
              <line key={`v-${x}`} x1={x} x2={x} y1="40" y2="246" stroke="rgb(var(--line))" strokeOpacity="0.07" strokeDasharray="2 5" />
            ))}

            <line x1="54" y1="246" x2="414" y2="246" stroke="rgb(var(--line))" strokeOpacity="0.55" />
            <line x1="54" y1="40" x2="54" y2="246" stroke="rgb(var(--line))" strokeOpacity="0.55" />
            <text x="392" y="266" fill="rgb(var(--muted))" fontSize="10" fontFamily="monospace">QUANTITY</text>
            <text x="20" y="52" fill="rgb(var(--muted))" fontSize="10" fontFamily="monospace" transform="rotate(-90 20 52)">PRICE</text>

            <rect x="165" y="184" width="146" height="62" fill="url(#shortage-fill)" className={cn('transition-opacity duration-500', showCap ? 'opacity-100' : 'opacity-0')} />

            <line x1="84" y1="72" x2="392" y2="224" stroke="rgb(var(--blue))" strokeWidth="3" strokeLinecap="round" />
            <text x="318" y="212" fill="rgb(var(--blue))" fontSize="11" fontFamily="monospace">Demand</text>

            <line x1="84" y1="224" x2="392" y2="72" stroke="rgb(var(--emerald))" strokeWidth="3" strokeLinecap="round" />
            <text x="320" y="82" fill="rgb(var(--emerald))" fontSize="11" fontFamily="monospace">Supply</text>

            <g className={cn('transition-opacity duration-500', showCap ? 'opacity-40' : 'opacity-100')}>
              <circle cx="238" cy="148" r="5" fill="rgb(var(--amber))" />
              <line x1="238" y1="148" x2="238" y2="246" stroke="rgb(var(--amber))" strokeOpacity="0.6" strokeDasharray="4 4" />
              <text x="248" y="140" fill="rgb(var(--amber))" fontSize="10" fontFamily="monospace">EQUILIBRIUM</text>
            </g>

            <g className={cn('transition-opacity duration-500', showCap ? 'opacity-100' : 'opacity-0')}>
              <line x1="54" y1="184" x2="414" y2="184" stroke="rgb(var(--crimson))" strokeWidth="2" strokeDasharray="7 5" />
              <text x="60" y="177" fill="rgb(var(--crimson))" fontSize="10" fontFamily="monospace">PRICE CAP (EO 39: ₱41–₱45)</text>
              <circle cx="165" cy="184" r="4.5" fill="rgb(var(--crimson))" />
              <circle cx="311" cy="184" r="4.5" fill="rgb(var(--crimson))" />
              <text x="151" y="266" fill="rgb(var(--crimson))" fontSize="9" fontFamily="monospace">QS</text>
              <text x="301" y="266" fill="rgb(var(--crimson))" fontSize="9" fontFamily="monospace">QD</text>
              <line x1="165" y1="265" x2="311" y2="265" stroke="rgb(var(--crimson))" strokeOpacity="0.7" markerStart="url(#arrow-head)" markerEnd="url(#arrow-head)" />
              <text x="213" y="284" fill="rgb(var(--crimson))" fontSize="9" fontFamily="monospace">SHORTAGE</text>
            </g>
          </svg>

          <div className="mt-1 flex items-center justify-end gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted/80">
            <Info className="h-3.5 w-3.5" aria-hidden="true" />
            Illustrative, not a forecast
          </div>
        </div>

        <figure className="mt-5 border-t border-line/25 pt-4">
          <blockquote className="font-serif text-2xl italic leading-tight text-ink">“I miss teaching.”</blockquote>
          <figcaption className="mt-2 text-[0.75rem] leading-[1.6] text-muted">
            Cielo Magno, Sept. 1, 2023 — the post that led to her resignation.
          </figcaption>
        </figure>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line/25 pt-3">
          <a href="#viral" className="group inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson">
            Read the story behind the graph
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-crimson/25 bg-crimson/10 px-2.5 py-0.5 font-mono text-[0.6875rem] font-semibold text-crimson">
            May resibo
          </span>
        </div>
      </div>
    </aside>
  )
}
