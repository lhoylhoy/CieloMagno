import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { ArrowUpRight, Library, Mail, Newspaper, Podcast } from 'lucide-react'
import { conversations, mediaColumns } from '../data/mediaData'
import { profile } from '../data/profileData'
import { TabPill } from './FilterPill'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { cn } from '../lib/cn'

interface MediaSectionProps {
  onOpenArchivePage: (page: number) => void
}

type MediaTab = 'columns' | 'conversations'

export function MediaSection({ onOpenArchivePage }: MediaSectionProps) {
  const [tab, setTab] = useState<MediaTab>('columns')

  return (
    <div className="pt-8 sm:pt-10">
      <Tabs.Root value={tab} onValueChange={(next) => setTab(next as MediaTab)}>
        <SectionHeading
          index="07.4"
          eyebrow="The Megaphone"
          accent="blue"
          title={
            <>
              The argument,
              <br />
              <span className="serif-italic text-blue">in public.</span>
            </>
          }
          description="Newspaper columns, podcasts, and conversations with creators and journalists. The same fiscal questions, translated for a wider room."
          actions={
            <Tabs.List aria-label="Media formats" className="flex flex-wrap gap-2">
              <TabPill value="columns" count={mediaColumns.length}>
                Columns
              </TabPill>
              <TabPill value="conversations" count={conversations.length}>
                Conversations
              </TabPill>
            </Tabs.List>
          }
        />

        <div className="mt-10">
          <Tabs.Content value="columns" className="outline-none data-[state=active]:animate-fade-in">
            <div className="grid gap-4 lg:grid-cols-2">
              {mediaColumns.map((column, index) => (
                <Reveal
                  key={column.id}
                  delay={Math.min(index * 40, 200)}
                  className={index === 0 ? 'lg:col-span-2' : undefined}
                >
                  <article
                    className={cn(
                      'group flex h-full flex-col rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-6',
                      index === 0
                        ? 'border-blue/30 bg-blue/5 ring-1 ring-blue/10'
                        : 'border-line/30 bg-panel hover:border-blue/35',
                    )}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line/30 bg-canvas/50 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                          <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                          {column.outlet}
                        </span>
                        {column.archived ? (
                          <span className="rounded-full border border-amber/25 bg-amber/10 px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-amber">
                            Archived
                          </span>
                        ) : null}
                      </div>
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                        {column.date}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        'mt-4 font-display font-bold leading-[1.25] text-ink transition group-hover:text-blue',
                        index === 0 ? 'text-2xl sm:text-[2rem]' : 'text-[1.15rem] sm:text-[1.3rem]',
                      )}
                    >
                      {column.title}
                    </h3>
                    {column.coAuthors ? (
                      <p className="mt-2 text-[0.75rem] italic leading-relaxed text-muted">
                        {column.coAuthors}
                      </p>
                    ) : null}

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line/25 pt-4">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                        Column · CV p. {column.archivePage}
                      </span>
                      {column.url ? (
                        <a
                          href={column.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson"
                        >
                          Read the column
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onOpenArchivePage(column.archivePage)}
                          className="inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson"
                        >
                          Download CV page
                          <Library className="h-4 w-4" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Tabs.Content>

          <Tabs.Content value="conversations" className="outline-none data-[state=active]:animate-fade-in">
            <div className="grid gap-4 md:grid-cols-2">
              {conversations.map((conversation, index) => (
                <Reveal key={conversation.id} delay={Math.min(index * 50, 200)}>
                  <article className="group flex h-full flex-col rounded-2xl border border-line/30 bg-panel p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-lift sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue/25 bg-blue/5 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-blue">
                        <Podcast className="h-3.5 w-3.5" aria-hidden="true" />
                        Conversation
                      </span>
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                        {conversation.date}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[1.15rem] font-bold leading-[1.3] text-ink transition group-hover:text-blue sm:text-xl">
                      {conversation.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] font-semibold leading-snug text-muted">
                      {conversation.outlet}
                    </p>
                    <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">
                      {conversation.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/25 pt-4">
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                        CV p. {conversation.archivePage}
                      </span>
                      <button
                        type="button"
                        onClick={() => onOpenArchivePage(conversation.archivePage)}
                        className="inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson"
                      >
                        Download CV page
                        <Library className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-[0.75rem] leading-relaxed text-muted/80">
              Conversation descriptions are editorial summaries prepared for this archive, not
              verbatim transcripts or quotations.
            </p>
          </Tabs.Content>
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-5 rounded-[1.5rem] border border-line/30 bg-panel p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue" aria-hidden="true" />
                <span className="label-mono text-muted">For press &amp; producers</span>
              </div>
              <p className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                Need a voice on public money?
              </p>
              <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">
                Interview requests, data questions, and speaking invitations.
              </p>
            </div>
            <a href={`mailto:${profile.email}`} className="btn btn-primary shrink-0">
              {profile.email}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <p className="mt-6 text-[0.75rem] leading-relaxed text-muted/80">
          Column titles and dates follow the CV. Links are included where available; some
          original newspaper pages no longer resolve and point to archived copies instead.
        </p>
      </Tabs.Root>
    </div>
  )
}
