import { useEffect, useState } from 'react'
import { ArrowUpRight, Download, FileArchive, FileText, ScanLine } from 'lucide-react'
import { archivePages } from '../data/archiveData'
import { ModalShell, ModalTitle } from './ModalShell'
import { Select } from './Select'

const CV_PDF = '/cv/Cielo-Magno-Curriculum-Vitae-2026.pdf'
const CV_ZIP = '/cv/Cielo-Magno-CV-Scans-2026.zip'

interface CVDownloadProps {
  open: boolean
  onClose: () => void
  initialPage?: number | null
}

const clampPage = (page: number) => Math.min(Math.max(page, 1), archivePages.length)

export function CVDownload({ open, onClose, initialPage = null }: CVDownloadProps) {
  const [pageNumber, setPageNumber] = useState(clampPage(initialPage ?? 1))

  useEffect(() => {
    if (open) setPageNumber(clampPage(initialPage ?? 1))
  }, [open, initialPage])

  const page = archivePages[pageNumber - 1]
  const linkedPage =
    initialPage && initialPage >= 1 && initialPage <= archivePages.length
      ? archivePages[initialPage - 1]
      : null

  return (
    <ModalShell open={open} onClose={onClose} className="max-w-5xl">
      <div className="relative overflow-hidden p-5 sm:p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber/15 blur-[90px]" />
          <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-crimson/15 blur-[90px]" />
        </div>

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4 pr-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="label-mono text-crimson">CV / Vitae</span>
                <span className="h-px w-8 bg-line/40" aria-hidden="true" />
                <span className="label-mono text-muted">Source document</span>
              </div>
              <ModalTitle
                className="display-tight mt-4 text-4xl leading-[0.92] text-ink sm:text-5xl md:text-6xl"
              >
                Take the whole CV
                <br />
                <span className="serif-italic text-amber">with you.</span>
              </ModalTitle>
              <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.7] text-muted">
                No flipbook. No 19-page scroll. The complete curriculum vitae is yours to
                download — as one PDF, or as a pack of original page scans.
              </p>
            </div>
            <span className="hidden items-center gap-2 rounded-full border border-line/30 bg-panel px-3 py-2 text-muted sm:flex">
              <ScanLine className="h-4 w-4 text-emerald" aria-hidden="true" />
              <span className="label-mono">Unedited source</span>
            </span>
          </div>

          {linkedPage ? (
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-amber/30 bg-amber/10 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="label-mono text-amber">You followed a source link</p>
                <p className="mt-1 text-[0.9375rem] font-semibold leading-snug text-ink">
                  Page {linkedPage.page}: {linkedPage.label}
                </p>
              </div>
              <a
                href={linkedPage.src}
                download={`cielo-magno-cv-page-${linkedPage.page}.jpeg`}
                className="btn btn-primary btn-sm shrink-0 self-start sm:self-auto"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Download page {linkedPage.page}
              </a>
            </div>
          ) : null}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={CV_PDF}
              download="Cielo-Magno-Curriculum-Vitae-2026.pdf"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line/30 bg-panel p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-crimson/50 hover:shadow-lift sm:p-6"
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-crimson/25 bg-crimson/10 text-crimson">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-muted transition group-hover:text-crimson"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-7 label-mono text-crimson">The full document</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-ink">
                Curriculum vitae
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-[1.6] text-muted">
                All 19 pages in a single, print-ready PDF. Scanned from the source and preserved
                without edits.
              </p>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/25 pt-4 text-[0.75rem] font-semibold">
                <span className="font-mono uppercase tracking-[0.12em] text-muted">
                  PDF · 4.1 MB
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink">
                  Download
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>

            <a
              href={CV_ZIP}
              download="Cielo-Magno-CV-Scans-2026.zip"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line/30 bg-panel p-5 shadow-card transition hover:-translate-y-1 hover:border-emerald/50 hover:shadow-lift sm:p-6"
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-emerald transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-emerald/25 bg-emerald/10 text-emerald">
                  <FileArchive className="h-5 w-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-muted transition group-hover:text-emerald"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-7 label-mono text-emerald">The image pack</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-ink">
                19 page scans
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-[1.6] text-muted">
                Every page as a separate high-resolution JPG, zipped for decks, fact-checks, and
                closer reading.
              </p>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-line/25 pt-4 text-[0.75rem] font-semibold">
                <span className="font-mono uppercase tracking-[0.12em] text-muted">
                  ZIP · 3.8 MB
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink">
                  Download
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>

          </div>

          <div className="mt-4 grid gap-4 rounded-2xl border border-line/30 bg-canvas/40 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
            <div className="min-w-0">
              <p className="label-mono text-muted">Just need one receipt?</p>
              <p className="mt-1 text-[0.9375rem] leading-[1.7] text-muted">
                Pick a page from the source CV and download the original scan.
              </p>
            </div>
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
              <Select
                label="Choose a CV page"
                value={String(pageNumber)}
                onValueChange={(next) => setPageNumber(Number(next))}
                className="h-11 min-w-0 bg-surface py-0"
                options={archivePages.map((archivePage) => ({
                  value: String(archivePage.page),
                  label: `Page ${String(archivePage.page).padStart(2, '0')} — ${archivePage.label}`,
                }))}
              />
              <a
                href={page.src}
                download={`cielo-magno-cv-page-${page.page}.jpeg`}
                className="btn btn-primary btn-sm justify-center"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Download page
              </a>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line/30 bg-line/25">
            {[
              ['19', 'pages, start to finish'],
              ['0', 'edits to the source'],
              ['2', 'download formats'],
            ].map(([value, label]) => (
              <div key={label} className="bg-canvas px-3 py-4 text-center">
                <p className="font-display text-xl font-extrabold text-ink">{value}</p>
                <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[0.8125rem] leading-[1.6] text-muted">
            Source: Dr. Cielo Magno&apos;s 19-page curriculum vitae (2026). The scans are the
            source of record. Editorial summaries elsewhere on this site are clearly labeled and
            are not part of the original CV.
          </p>
        </div>
      </div>
    </ModalShell>
  )
}
