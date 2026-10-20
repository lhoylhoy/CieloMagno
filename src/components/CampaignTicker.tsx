import { campaignTicker } from '../data/campaignData'
import { Marquee } from './Marquee'

interface CampaignTickerProps {
  className?: string
}

export function CampaignTicker({ className }: CampaignTickerProps) {
  return (
    <div className={className}>
      <Marquee items={campaignTicker} className="campaign-ticker text-muted" />
    </div>
  )
}
