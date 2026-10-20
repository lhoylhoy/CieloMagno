import type { Author, Publication } from '../data/types'

function initials(given: string): string {
  return given
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}.`)
    .join(' ')
}

export function authorName(author: Author): string {
  return `${author.given} ${author.family}`
}

export function formatAuthors(
  authors: Author[],
  mode: 'display' | 'short' | 'apa' = 'display',
): string {
  if (authors.length === 0) return ''

  if (mode === 'short') {
    if (authors.length === 1) return authorName(authors[0])
    if (authors.length === 2) return `${authorName(authors[0])} & ${authorName(authors[1])}`
    return `${authorName(authors[0])} et al.`
  }

  if (mode === 'apa') {
    const parts = authors.map((author) => `${author.family}, ${initials(author.given)}`)
    if (parts.length === 1) return parts[0]
    if (parts.length === 2) return `${parts[0]}, & ${parts[1]}`
    return `${parts.slice(0, -1).join(', ')}, & ${parts[parts.length - 1]}`
  }

  if (authors.length === 1) return authorName(authors[0])
  if (authors.length === 2) return `${authorName(authors[0])} & ${authorName(authors[1])}`
  return `${authorName(authors[0])}, ${authorName(authors[1])} & ${authors.length - 2} others`
}

function withPeriod(value: string): string {
  return /[.!?]$/.test(value) ? value : `${value}.`
}

export function apaCitation(publication: Publication): string {
  const authors = formatAuthors(publication.authors, 'apa')
  const year = `(${publication.year}).`
  const title = withPeriod(publication.title)
  let source = withPeriod(publication.outlet)

  if (publication.volume) {
    const issue = publication.issue ? `(${publication.issue})` : ''
    const pages = publication.pages ? `, ${publication.pages}` : ''
    source = `${withPeriod(publication.outlet)} ${publication.volume}${issue}${pages}.`
  } else if (publication.pages) {
    source = `${withPeriod(publication.outlet)} ${publication.pages}.`
  }

  const link = publication.doi
    ? `https://doi.org/${publication.doi.replace(/^https?:\/\/doi\.org\//, '')}`
    : publication.url

  return [authors, year, title, source, link].filter(Boolean).join(' ')
}
