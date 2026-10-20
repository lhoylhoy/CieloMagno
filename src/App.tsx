import { lazy, Suspense, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ImpactStrip } from './components/ImpactStrip'
import { Why2028 } from './components/Why2028'
import { ViralMoments } from './components/ViralMoments'
import { Platform2028 } from './components/Platform2028'
import { BudolDecoder } from './components/BudolDecoder'
import { YouthHub } from './components/YouthHub'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { MobileActionDock } from './components/MobileActionDock'
import { PrivatePreviewBadge } from './components/PrivatePreviewBadge'
import { ReleaseGuard } from './components/ReleaseGuard'
import { LanguageProvider } from './hooks/useLanguage'
import type { Topic } from './data/types'

const ArchiveHub = lazy(() =>
  import('./components/ArchiveHub').then((module) => ({ default: module.ArchiveHub })),
)
const CVDownload = lazy(() =>
  import('./components/CVDownload').then((module) => ({ default: module.CVDownload })),
)

export default function App() {
  const [cvOpen, setCvOpen] = useState(false)
  const [cvMounted, setCvMounted] = useState(false)
  const [cvPage, setCvPage] = useState<number | null>(null)
  const [researchTopic, setResearchTopic] = useState<Topic | undefined>(undefined)
  const [researchRequest, setResearchRequest] = useState(0)

  const openCV = () => {
    setCvMounted(true)
    setCvPage(null)
    setCvOpen(true)
  }

  const openArchivePage = (page: number) => {
    setCvMounted(true)
    setCvPage(page)
    setCvOpen(true)
  }

  const exploreTopic = (topic: Topic) => {
    setResearchTopic(topic)
    setResearchRequest((request) => request + 1)
    window.setTimeout(() => {
      document.getElementById('research')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 80)
  }

  return (
    <LanguageProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar onOpenCV={openCV} />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero onOpenCV={openCV} />
        <ImpactStrip onOpenCV={openCV} />
        <Why2028 onOpenCV={openCV} />
        <ViralMoments />
        <Platform2028 onExploreTopic={exploreTopic} />
        <BudolDecoder />
        <YouthHub onOpenArchivePage={openArchivePage} />
        <Suspense
          fallback={
            <section
              aria-busy="true"
              aria-label="Loading Resibo Vault"
              className="border-b border-line/25 py-20"
            >
              <div className="shell">
                <p className="label-mono text-muted" role="status">
                  Loading Resibo Vault…
                </p>
              </div>
            </section>
          }
        >
          <ArchiveHub
            onOpenCV={openCV}
            onOpenArchivePage={openArchivePage}
            initialTopic={researchTopic}
            initialTopicKey={researchRequest}
          />
        </Suspense>
        <ContactSection />
      </main>

      <Footer onOpenCV={openCV} />

      {cvMounted ? (
        <Suspense fallback={null}>
          <CVDownload
            open={cvOpen}
            onClose={() => setCvOpen(false)}
            initialPage={cvPage}
          />
        </Suspense>
      ) : null}

      <PrivatePreviewBadge />
      <ReleaseGuard />
      <MobileActionDock />
    </LanguageProvider>
  )
}
