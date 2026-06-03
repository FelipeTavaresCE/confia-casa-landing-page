import { useState } from 'react'
import type { FormEvent } from 'react'
import { FAQSection } from './components/landing/FAQSection'
import { Footer } from './components/landing/Footer'
import { HeroSection } from './components/landing/HeroSection'
import { HowItWorksSection } from './components/landing/HowItWorksSection'
import { OriginSection } from './components/landing/OriginSection'
import { ProblemsSection } from './components/landing/ProblemsSection'
import { ProtectionSection } from './components/landing/ProtectionSection'
import { ReputationSection } from './components/landing/ReputationSection'
import { WaitlistSection } from './components/landing/WaitlistSection'

type WaitlistType = 'Cliente' | 'Profissional'

type WaitlistEntry = {
  nome: string
  email: string
  whatsapp: string
  cidade: string
  tipo: WaitlistType
  dorPrincipal: string
  createdAt: string
}

const STORAGE_KEY = 'confiaCasaWaitlist'

function parseStoredEntries(): WaitlistEntry[] {
  const existingEntries = localStorage.getItem(STORAGE_KEY)

  if (!existingEntries) return []

  try {
    const parsedEntries = JSON.parse(existingEntries)
    return Array.isArray(parsedEntries) ? (parsedEntries as WaitlistEntry[]) : []
  } catch {
    return []
  }
}

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const entry: WaitlistEntry = {
      nome: String(formData.get('nome') ?? ''),
      email: String(formData.get('email') ?? ''),
      whatsapp: String(formData.get('whatsapp') ?? ''),
      cidade: String(formData.get('cidade') ?? ''),
      tipo: String(formData.get('tipo') ?? 'Cliente') as WaitlistType,
      dorPrincipal: String(formData.get('dorPrincipal') ?? ''),
      createdAt: new Date().toISOString(),
    }

    const parsedEntries = parseStoredEntries()
    parsedEntries.push(entry)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedEntries))
    form.reset()
    setIsSubmitted(true)
  }

  const handleReturnHome = () => {
    setIsSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-900">ConfiaCasa</p>
            <p className="text-xs text-slate-500 sm:text-sm">A confiança que faltava na contratação de serviços residenciais.</p>
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            <a
              href="#lista-espera"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400"
            >
              Entrar na lista de espera
            </a>
            <a
              href="#lista-espera"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Sou profissional
            </a>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <OriginSection />
        <ProblemsSection />
        <HowItWorksSection />
        <ProtectionSection />
        <ReputationSection />
        <WaitlistSection isSubmitted={isSubmitted} onBackToTop={handleReturnHome} onSubmit={handleSubmit} />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
