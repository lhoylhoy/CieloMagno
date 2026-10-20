import { cn } from '../lib/cn'

interface StampBadgeProps {
  className?: string
  label?: string
}

export function StampBadge({
  className,
  label = 'TRUTH · NUMBERS · COURAGE ·',
}: StampBadgeProps) {
  return (
    <div
      className={cn(
        'pointer-events-none relative grid h-28 w-28 place-items-center rounded-full border border-amber/40 bg-canvas/80 text-amber shadow-stamp ring-1 ring-inset ring-amber/15 backdrop-blur',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path
            id="stamp-circle"
            d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
          />
        </defs>
        <text className="fill-current font-mono text-[11px] uppercase tracking-[0.26em]">
          <textPath href="#stamp-circle">{label}</textPath>
        </text>
      </svg>
      <span className="absolute inset-[0.5rem] rounded-full border border-dashed border-amber/20" />
      <span className="font-serif text-2xl italic leading-none tracking-tight">CM</span>
      <span className="absolute bottom-6 h-px w-6 bg-amber/60" />
    </div>
  )
}
