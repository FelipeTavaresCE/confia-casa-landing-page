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

const problemPoints = [
  'Golpes após pagamento antecipado',
  'Profissionais sem histórico confiável',
  'Avaliações falsas na internet',
  'Falta de contrato claro',
  'Cliente e profissional desprotegidos',
]

const solutionPoints = [
  'Identidade validada',
  'Histórico real de serviços',
  'Contratos digitais por etapas',
  'Reputação baseada em entregas reais',
  'Futuramente: proteção financeira por etapas',
]

function App() {
  const [successMessage, setSuccessMessage] = useState('')

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

    const existingEntries = localStorage.getItem('confiaCasaWaitlist')
    let parsedEntries: WaitlistEntry[] = []

    if (existingEntries) {
      try {
        parsedEntries = JSON.parse(existingEntries) as WaitlistEntry[]
      } catch {
        parsedEntries = []
      }
    }

    parsedEntries.push(entry)
    localStorage.setItem('confiaCasaWaitlist', JSON.stringify(parsedEntries))

    form.reset()
    setSuccessMessage('Cadastro recebido. Você estará entre os primeiros a conhecer o ConfiaCasa.')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-2xl font-bold text-slate-900">ConfiaCasa</p>
            <p className="text-sm text-slate-600">A confiança que faltava na contratação de serviços residenciais.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#clientes"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Sou cliente
            </a>
            <a
              href="#profissionais"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Sou profissional
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Nunca mais perca dinheiro contratando um profissional.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Estamos criando uma plataforma para ajudar clientes e profissionais honestos a fecharem serviços com
              mais confiança, contrato claro e reputação validada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#lista-espera"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Quero contratar com segurança
              </a>
              <a
                href="#lista-espera"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                Quero ser profissional parceiro
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Problemas enfrentados hoje</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {problemPoints.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Soluções oferecidas pela ConfiaCasa</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {solutionPoints.map((item) => (
                <li key={item} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="clientes" className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Exclusivo para clientes</h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Encontre profissionais verificados, acompanhe histórico real de entregas e feche serviços com contrato
              digital claro em cada etapa.
            </p>
          </div>
        </section>

        <section id="profissionais" className="py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Exclusivo para profissionais</h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Construa reputação com entregas comprovadas, seja reconhecido por clientes sérios e aumente sua
              credibilidade no mercado.
            </p>
          </div>
        </section>

        <section id="lista-espera" className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Lista de espera</h2>
            <p className="mt-3 text-slate-600">Deixe seus dados para ser avisado no lançamento da plataforma.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Nome
                  <input
                    name="nome"
                    type="text"
                    required
                    className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-900/10 focus:ring"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-900/10 focus:ring"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  WhatsApp
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-900/10 focus:ring"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Cidade
                  <input
                    name="cidade"
                    type="text"
                    required
                    className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-900/10 focus:ring"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Tipo
                <select
                  name="tipo"
                  required
                  className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-900/10 focus:ring"
                  defaultValue="Cliente"
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
                  className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-slate-900/10 focus:ring"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Entrar na lista de espera
              </button>
            </form>

            {successMessage && <p className="mt-4 font-medium text-emerald-700">{successMessage}</p>}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-8 text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p>ConfiaCasa © 2026</p>
          <p>Contrate com confiança.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
