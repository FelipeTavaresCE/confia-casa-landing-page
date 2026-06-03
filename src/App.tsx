import { useState } from 'react'
import type { FormEvent } from 'react'

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
const BASE_INTERESTED_COUNT = 1284

const familiarCards = [
  'Paguei e o profissional sumiu.',
  'O cliente recebeu e não quis pagar.',
  'O serviço atrasou meses.',
  'Não havia contrato.',
  'A avaliação era falsa.',
]

const resolveSteps = [
  'Identidade validada.',
  'Histórico de serviços.',
  'Contrato digital.',
  'Reputação baseada em entregas reais.',
  'Proteção financeira por etapas (em breve).',
]

const faqItems = [
  {
    question: 'O ConfiaCasa já está disponível no Brasil inteiro?',
    answer:
      'Ainda não. Estamos validando o produto com usuários reais em Fortaleza para garantir uma experiência segura antes da expansão nacional.',
  },
  {
    question: 'Como a reputação é calculada?',
    answer:
      'A reputação é baseada em entregas reais concluídas com contrato digital e confirmação das duas partes, reduzindo o risco de avaliações manipuladas.',
  },
  {
    question: 'O pagamento fica protegido?',
    answer:
      'Sim. O modelo do ConfiaCasa prevê proteção financeira por etapas: o valor fica reservado e só é liberado com a entrega validada.',
  },
  {
    question: 'Sou profissional. Posso entrar na lista de espera?',
    answer:
      'Pode. Selecione “Profissional” no formulário para receber novidades sobre verificação de perfil e priorização no onboarding.',
  },
]

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
  const [successMessage, setSuccessMessage] = useState('')
  const [interestedCount, setInterestedCount] = useState(() => BASE_INTERESTED_COUNT + parseStoredEntries().length)

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
    setInterestedCount(BASE_INTERESTED_COUNT + parsedEntries.length)

    form.reset()
    setSuccessMessage('Cadastro recebido. Você estará entre os primeiros a conhecer o ConfiaCasa.')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-900">ConfiaCasa</p>
            <p className="text-xs text-slate-500 sm:text-sm">A confiança que faltava na contratação de serviços residenciais.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#lista-espera"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              Sou cliente
            </a>
            <a
              href="#lista-espera"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Sou profissional
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Fundadores validando o mercado em Fortaleza
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Quantas pessoas você conhece que já perderam dinheiro em uma reforma?
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              O ConfiaCasa está construindo a primeira plataforma brasileira focada em proteger clientes e
              profissionais através de reputação validada, contratos inteligentes e contratação segura.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#lista-espera"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Entrar na lista de espera
              </a>
              <a
                href="#lista-espera"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
              >
                Sou profissional
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-up rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-blue-900 p-6 text-white shadow-xl shadow-blue-900/20 sm:p-8">
            <div className="absolute -right-10 -top-10 h-24 w-24 animate-float-slow rounded-full bg-emerald-300/20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-24 w-24 animate-float-slow rounded-full bg-blue-300/20 blur-2xl" />
            <p className="text-sm text-blue-100">Confiança validada em cada etapa</p>
            <p className="mt-3 text-3xl font-bold">{interestedCount.toLocaleString('pt-BR')} interessados</p>
            <p className="mt-2 text-sm text-blue-100">Entradas priorizadas para os primeiros cadastros.</p>
            <div className="mt-8 space-y-3">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-blue-100">Risco médio em contratação informal</p>
                <p className="mt-1 text-lg font-semibold">Alto e imprevisível</p>
              </div>
              <div className="rounded-2xl bg-emerald-400/20 p-4">
                <p className="text-sm text-emerald-100">Com ConfiaCasa</p>
                <p className="mt-1 text-lg font-semibold">Processo rastreável e protegido</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Isso parece familiar?</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {familiarCards.map((item) => (
                <article
                  key={item}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 8v5m0 3h.01" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M3.27 18l7.5-13a1.4 1.4 0 0 1 2.46 0l7.5 13A1.4 1.4 0 0 1 19.5 20h-15a1.4 1.4 0 0 1-1.23-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Como o ConfiaCasa resolve</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {resolveSteps.map((item, index) => (
                <li
                  key={item}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 text-sm text-emerald-900 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Passo {index + 1}</p>
                  <p className="mt-2 font-medium">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Proteção para os dois lados</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5">
                  <p className="font-semibold text-blue-900">Cliente protegido</p>
                  <p className="mt-2 text-sm text-blue-800">
                    Contrata com identidade validada, histórico real e pagamento condicionado à entrega.
                  </p>
                </article>
                <article className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
                  <p className="font-semibold text-emerald-900">Profissional protegido</p>
                  <p className="mt-2 text-sm text-emerald-800">
                    Trabalha com contrato digital e garantia de liberação de pagamento após validação do serviço.
                  </p>
                </article>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-xl shadow-slate-900/15 sm:p-8">
              <p className="text-sm font-medium text-slate-300">Fluxo financeiro protegido</p>
              <div className="mt-5 space-y-3">
                <p className="rounded-xl bg-white/10 px-4 py-3 text-sm">Cliente deposita</p>
                <p className="text-center text-emerald-300">↓</p>
                <p className="rounded-xl bg-white/10 px-4 py-3 text-sm">Valor protegido</p>
                <p className="text-center text-emerald-300">↓</p>
                <p className="rounded-xl bg-white/10 px-4 py-3 text-sm">Serviço entregue</p>
                <p className="text-center text-emerald-300">↓</p>
                <p className="rounded-xl bg-emerald-400/20 px-4 py-3 text-sm font-medium text-emerald-100">
                  Pagamento liberado
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">FAQ</h2>
            <div className="mt-8 space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm">
                  <summary className="cursor-pointer list-none pr-6 font-semibold text-slate-900">{item.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lista-espera" className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Entre na lista de espera</h2>
              <p className="mt-3 text-slate-600">Vamos priorizar clientes e profissionais das primeiras turmas.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Nome
                    <input
                      name="nome"
                      type="text"
                      required
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-blue-900/10 transition focus:ring"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-blue-900/10 transition focus:ring"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    WhatsApp
                    <input
                      name="whatsapp"
                      type="tel"
                      required
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-blue-900/10 transition focus:ring"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Cidade
                    <input
                      name="cidade"
                      type="text"
                      required
                      className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-blue-900/10 transition focus:ring"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Tipo
                  <select
                    name="tipo"
                    required
                    defaultValue="Cliente"
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-blue-900/10 transition focus:ring"
                  >
                    <option value="Cliente">Cliente</option>
                    <option value="Profissional">Profissional</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Qual sua maior dor ao contratar ou prestar serviços residenciais?
                  <textarea
                    name="dorPrincipal"
                    required
                    rows={4}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-blue-900/10 transition focus:ring"
                  />
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Entrar na lista de espera
                </button>
              </form>

              {successMessage && <p className="mt-4 font-medium text-emerald-700">{successMessage}</p>}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-8 text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p>ConfiaCasa © 2026</p>
          <p>Contrate com confiança.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
