import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowUpRight, Library, Search, SlidersHorizontal, X } from 'lucide-react'
import {
  publicationTopics,
  publicationTypes,
  publications,
} from '../data/publicationsData'
import type { Publication, PublicationType, Topic } from '../data/types'
import { apaCitation, formatAuthors } from '../lib/citations'
import { CopyButton } from './CopyButton'
import { FilterPill } from './FilterPill'
import { PublicationModal } from './PublicationModal'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Select } from './Select'
import { cn } from '../lib/cn'

interface ResearchVaultProps {
  onOpenArchivePage: (page: number) => void
  initialTopic?: Topic
  initialTopicKey?: number
}

type SortMode = 'newest' | 'oldest' | 'title'

const PAGE_SIZE = 12

export function ResearchVault({ onOpenArchivePage, initialTopic, initialTopicKey }: ResearchVaultProps) {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState<Topic | 'All'>(initialTopic ?? 'All')
  const [type, setType] = useState<PublicationType | 'All'>('All')
  const [sort, setSort] = useState<SortMode>('newest')
  const [limit, setLimit] = useState(PAGE_SIZE)
  const [selected, setSelected] = useState<Publication | null>(null)

  useEffect(() => {
    if (initialTopic) setTopic(initialTopic)
  }, [initialTopic, initialTopicKey])

  useEffect(() => {
    setLimit(PAGE_SIZE)
  }, [query, topic, type])

  const topicCounts = useMemo(() => {
    const counts = new Map<Topic, number>()
    publications.forEach((publication) => {
      publication.topics.forEach((item) => {
        counts.set(item, (counts.get(item) ?? 0) + 1)
      })
    })
    return counts
  }, [])

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const list = publications.filter((publication) => {
      const haystack = [
        publication.title,
        formatAuthors(publication.authors, 'display'),
        publication.outlet,
        publication.summary,
        ...publication.topics,
      ]
        .join(' ')
        .toLowerCase()
      const matchesQuery = needle.length === 0 || haystack.includes(needle)
      const matchesTopic = topic === 'All' || publication.topics.includes(topic)
      const matchesType = type === 'All' || publication.type === type
      return matchesQuery && matchesTopic && matchesType
    })

    return [...list].sort((a, b) => {
      if (sort === 'oldest') return a.year - b.year
      if (sort === 'title') return a.title.localeCompare(b.title)
      return b.year - a.year
    })
  }, [query, topic, type, sort])

  const visible = filtered.slice(0, limit)
  const hasFilters = query.trim().length > 0 || topic !== 'All' || type !== 'All'

  const resetFilters = () => {
    setQuery('')
    setTopic('All')
    setType('All')
  }

  return (
    <div className="pt-8 sm:pt-10">
      <div>
        <SectionHeading
          index="07.1"
          eyebrow="The Resibo Vault"
          accent="crimson"
          title={
            <>
              Follow the <span className="serif-italic text-crimson">evidence.</span>
            </>
          }
          description={`${publications.length} journal articles, working papers, reports, and briefs — searchable by idea, topic, and year. Every entry is transcribed from the CV; summaries are editorial.`}
          actions={
            <button
              type="button"
              onClick={() => onOpenArchivePage(10)}
              className="btn btn-ghost"
            >
              <Library className="h-4 w-4" aria-hidden="true" />
              CV source pages
            </button>
          }
        />

        <Reveal className="mt-9">
          <div className="card rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative min-w-0 flex-1">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search titles, authors, topics, outlets…"
                  aria-label="Search publications"
                  className="min-h-[48px] w-full rounded-full border border-line/25 bg-canvas/60 py-3 pl-10 pr-12 text-[0.9375rem] text-ink outline-none transition placeholder:text-muted/80 focus:border-crimson/60 focus:bg-panel focus-visible:ring-2 focus-visible:ring-crimson/20"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-1.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-muted transition hover:bg-line/10 hover:text-ink"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Select
                  label="Filter by publication type"
                  value={type}
                  onValueChange={(next) => setType(next as PublicationType | 'All')}
                  icon={<SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />}
                  className="py-3"
                  options={[
                    { value: 'All', label: 'All types' },
                    ...publicationTypes.map((item) => ({ value: item, label: item })),
                  ]}
                />
                <Select
                  label="Sort publications"
                  value={sort}
                  onValueChange={(next) => setSort(next as SortMode)}
                  className="py-3"
                  options={[
                    { value: 'newest', label: 'Newest first' },
                    { value: 'oldest', label: 'Oldest first' },
                    { value: 'title', label: 'Title A–Z' },
                  ]}
                />
              </div>
            </div>

            <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
              <FilterPill
                active={topic === 'All'}
                onClick={() => setTopic('All')}
                count={publications.length}
              >
                All topics
              </FilterPill>
              {publicationTopics.map((item) => (
                <FilterPill
                  key={item}
                  active={topic === item}
                  onClick={() => setTopic(item)}
                  count={topicCounts.get(item) ?? 0}
                >
                  {item}
                </FilterPill>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.8125rem] text-muted">
            Showing <span className="font-bold text-ink">{visible.length}</span> of{' '}
            <span className="font-bold text-ink">{filtered.length}</span> matching works
            {hasFilters ? ' — filtered' : ''}
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-2 text-[0.8125rem] font-bold text-crimson transition hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Clear filters
            </button>
          ) : null}
        </div>

        {visible.length > 0 ? (
          <>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {visible.map((publication, index) => (
                <Reveal key={publication.id} delay={Math.min(index * 35, 210)}>
                  <article
                    className={cn(
                      'flex h-full flex-col rounded-2xl border bg-panel p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-crimson/35 hover:shadow-lift sm:p-6',
                      publication.featured ? 'border-amber/35 ring-1 ring-amber/15' : 'border-line/30',
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[0.75rem] font-bold text-amber">
                          {publication.year}
                        </span>
                        <span className="rounded-full border border-line/30 bg-canvas/50 px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                          {publication.type}
                        </span>
                        {publication.featured ? (
                          <span className="rounded-full border border-crimson/25 bg-crimson/10 px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-crimson">
                            Featured
                          </span>
                        ) : null}
                      </div>
                      <span className="font-mono text-[0.6875rem] text-muted/80">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-[1.1875rem] font-bold leading-[1.3] text-ink">
                      {publication.title}
                    </h3>
                    <p className="mt-2 text-[0.8125rem] font-semibold leading-snug text-muted">
                      {formatAuthors(publication.authors, 'display')}
                    </p>
                    <p className="mt-1 text-[0.8125rem] italic leading-snug text-muted">
                      {publication.outlet}
                    </p>
                    <p className="mt-3 line-clamp-3 text-[0.875rem] leading-[1.65] text-muted">
                      {publication.summary}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {publication.topics.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line/30 bg-canvas/40 px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/25 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelected(publication)}
                        className="group inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson"
                      >
                        Read the entry
                        <ArrowUpRight
                          className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </button>
                      <CopyButton
                        text={apaCitation(publication)}
                        label="Cite"
                        copiedLabel="Cited"
                        compact
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {filtered.length > visible.length ? (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setLimit((current) => current + PAGE_SIZE)}
                  className="btn btn-ghost"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  Load more research ({filtered.length - visible.length} left)
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-line/30 p-10 text-center">
            <Search className="mx-auto h-6 w-6 text-muted" aria-hidden="true" />
            <p className="mt-3 font-display text-lg font-bold text-ink">
              No works match that combination.
            </p>
            <p className="mt-1 text-sm text-muted">
              Try a broader term, a different topic, or clear the filters.
            </p>
            <button type="button" onClick={resetFilters} className="btn btn-accent btn-sm mt-5">
              Reset filters
            </button>
          </div>
        )}
      </div>

      <PublicationModal
        publication={selected}
        onClose={() => setSelected(null)}
        onOpenArchivePage={onOpenArchivePage}
      />
    </div>
  )
}
