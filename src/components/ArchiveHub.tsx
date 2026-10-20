import { useEffect, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Compass, Globe2, Library, Newspaper } from 'lucide-react'
import { careerMilestones } from '../data/timelineData'
import { conversations, mediaColumns } from '../data/mediaData'
import { publications } from '../data/publicationsData'
import { speakingEngagements } from '../data/engagementsData'
import type { Topic } from '../data/types'
import { CareerJourney } from './CareerJourney'
import { MediaSection } from './MediaSection'
import { ResearchVault } from './ResearchVault'
import { SpeakingSection } from './SpeakingSection'
import { cn } from '../lib/cn'

export type ArchiveTab = 'research' | 'journey' | 'speaking' | 'media'

interface ArchiveHubProps {
  onOpenCV: () => void
  onOpenArchivePage: (page: number) => void
  initialTopic?: Topic
  initialTopicKey?: number
}

const archiveTabs: {
  id: ArchiveTab
  label: string
  shortLabel: string
  count: number
  icon: typeof Library
}[] = [
  {
    id: 'research',
    label: 'Resibo Vault (Research)',
    shortLabel: 'Resibo Vault',
    count: publications.length,
    icon: Library,
  },
  {
    id: 'journey',
    label: 'Career Journey',
    shortLabel: 'Journey',
    count: careerMilestones.length,
    icon: Compass,
  },
  {
    id: 'speaking',
    label: 'Global & Campus Talks',
    shortLabel: 'Talks',
    count: speakingEngagements.length,
    icon: Globe2,
  },
  {
    id: 'media',
    label: 'Columns & Media',
    shortLabel: 'Media',
    count: mediaColumns.length + conversations.length,
    icon: Newspaper,
  },
]

const hashToTab = (hash: string): ArchiveTab | null => {
  const clean = hash.replace(/^#/, '')
  if (clean === 'research' || clean === 'journey' || clean === 'speaking' || clean === 'media') {
    return clean
  }
  return null
}

/**
 * Unifies the four heavy academic/archive sections into a single tabbed hub so
 * voters aren't forced to scroll past 39 papers, 13 career stops, 86 talks, and
 * 15 media appearances to reach the bottom of the page.
 */
export function ArchiveHub({
  onOpenCV,
  onOpenArchivePage,
  initialTopic,
  initialTopicKey,
}: ArchiveHubProps) {
  const [tab, setTab] = useState<ArchiveTab>('research')

  useEffect(() => {
    if (initialTopicKey && initialTopicKey > 0) {
      setTab('research')
    }
  }, [initialTopicKey])

  useEffect(() => {
    const initial = hashToTab(window.location.hash)
    if (initial) setTab(initial)

    const onHashChange = () => {
      const matched = hashToTab(window.location.hash)
      if (matched) setTab(matched)
    }

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href') ?? ''
      const matched = hashToTab(href)
      if (matched) setTab(matched)
    }

    window.addEventListener('hashchange', onHashChange)
    document.addEventListener('click', onAnchorClick)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      document.removeEventListener('click', onAnchorClick)
    }
  }, [])

  return (
    <section id="research" className="relative border-b border-line/25 py-20 sm:py-28">
      <span id="journey" className="sr-only scroll-mt-24" aria-hidden="true" />
      <span id="speaking" className="sr-only scroll-mt-24" aria-hidden="true" />
      <span id="media" className="sr-only scroll-mt-24" aria-hidden="true" />

      <div className="shell">
        <Tabs.Root value={tab} onValueChange={(next) => setTab(next as ArchiveTab)}>
          <div className="rounded-2xl border border-line/30 bg-panel p-3 shadow-card sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2.5 px-1">
                <span className="label-mono text-crimson">07</span>
                <span className="h-px w-6 bg-line/35" aria-hidden="true" />
                <span className="label-mono text-muted">Full record &amp; archive</span>
              </div>

              <Tabs.List
                aria-label="Archive sections"
                className="-mx-1 flex items-center gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {archiveTabs.map((item) => {
                  const Icon = item.icon
                  return (
                    <Tabs.Trigger
                      key={item.id}
                      value={item.id}
                      className={cn(
                        'group inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 text-[0.8125rem] font-semibold transition duration-200',
                        'border-line/25 bg-canvas/60 text-muted hover:border-line/50 hover:text-ink',
                        'data-[state=active]:border-transparent data-[state=active]:bg-ink data-[state=active]:text-canvas data-[state=active]:shadow-lift data-[state=active]:hover:text-canvas',
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="hidden sm:inline">{item.label}</span>
                      <span className="sm:hidden">{item.shortLabel}</span>
                      <span className="rounded-full bg-line/10 px-1.5 py-0.5 font-mono text-[0.6875rem] text-muted group-data-[state=active]:bg-canvas/15 group-data-[state=active]:text-canvas">
                        {item.count}
                      </span>
                    </Tabs.Trigger>
                  )
                })}
              </Tabs.List>
            </div>
          </div>

          <Tabs.Content value="research" className="outline-none data-[state=active]:animate-fade-in">
            <ResearchVault
              onOpenArchivePage={onOpenArchivePage}
              initialTopic={initialTopic}
              initialTopicKey={initialTopicKey}
            />
          </Tabs.Content>

          <Tabs.Content value="journey" className="outline-none data-[state=active]:animate-fade-in">
            <CareerJourney onOpenCV={onOpenCV} />
          </Tabs.Content>

          <Tabs.Content value="speaking" className="outline-none data-[state=active]:animate-fade-in">
            <SpeakingSection />
          </Tabs.Content>

          <Tabs.Content value="media" className="outline-none data-[state=active]:animate-fade-in">
            <MediaSection onOpenArchivePage={onOpenArchivePage} />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  )
}

