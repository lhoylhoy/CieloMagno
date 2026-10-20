import { cn } from '../lib/cn'

interface MarqueeProps {
  items: string[]
  className?: string
  itemClassName?: string
  separator?: string
}

export function Marquee({
  items,
  className,
  itemClassName,
  separator = '✦',
}: MarqueeProps) {
  const group = (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={cn(
            'flex items-center gap-4 whitespace-nowrap px-4 font-mono text-[0.75rem] uppercase tracking-[0.16em]',
            itemClassName,
          )}
        >
          {item}
          <span className="text-amber/70" aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={cn('overflow-hidden', className)}>
      <div className="marquee-track" aria-hidden="true">
        {group}
        {group}
      </div>
      <span className="sr-only">{items.join('. ')}</span>
    </div>
  )
}
