import { useState } from 'react'
import type { FormEvent } from 'react'

type UserType = 'Cliente' | 'Profissional'

type WaitlistFormData = {
  name: string
  email: string
  whatsapp: string
  city: string
  userType: UserType
  painPoint: string
}

const problems = [
  'Golpes após pagamento antecipado',
  'Profissionais sem histórico confiável',
  'Avaliações falsas na internet',
  'Falta de contrato claro',
  'Cliente e profissional desprotegidos',
]

const solutions = [
  'Identidade validada',
  'Histórico real de serviços',
  'Contratos digitais por etapas',
  'Reputação baseada em entregas reais',
  'Futuramente: proteção financeira por etapas',
]

const initialForm: WaitlistFormData = {
  name: '',
  email: '',
  whatsapp: '',
  city: '',
  userType: 'Cliente',
  painPoint: '',
}

function App() {
  const [formData, setFormData] = useState<WaitlistFormData>(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const existingData = localStorage.getItem('confiaCasaWaitlist')
    const parsedData: WaitlistFormData[] = existingData ? JSON.parse(existingData) : []

    localStorage.setItem('confiaCasaWaitlist', JSON.stringify([...parsedData, formData]))

    setIsSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-950">ConfiaCasa</p>
            <p className="text-sm text-slate-600">
              A confiança que faltava na contratação de serviços residenciais.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="#clientes" className="rounded-full border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-50">
              Sou cliente
            </a>
            <a href="#profissionais" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Sou profissional
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-12 sm:gap-20">
        <section className="rounded-3xl bg-gradient-to-br from-blue-950 to-blue-900 px-6 py-14 text-white sm:px-10">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            Nunca mais perca dinheiro contratando um profissional.
          </h1>
          <p className="mt-5 max-w-3xl text-base text-blue-100 sm:text-lg">
            Estamos criando uma plataforma para ajudar clientes e profissionais honestos a fecharem serviços com mais confiança, contrato claro e reputação validada.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#lista-espera" className="rounded-full bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-blue-950 transition hover:bg-emerald-400">
              Quero contratar com segurança
            </a>
            <a href="#lista-espera" className="rounded-full border border-blue-200 px-6 py-3 text-center text-sm font-semibold transition hover:bg-blue-800">
              Quero ser profissional parceiro
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">Problemas enfrentados hoje</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <li key={problem} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                {problem}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">Soluções oferecidas pela ConfiaCasa</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {solutions.map((solution) => (
              <li key={solution} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                {solution}
              </li>
            ))}
          </ul>
        </section>

        <section id="clientes" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-950">Exclusivo para clientes</h2>
          <p className="mt-3 text-slate-700">
            Tenha acesso a profissionais com identidade validada, histórico real de entregas e segurança na contratação por etapas.
          </p>
        </section>

        <section id="profissionais" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-950">Exclusivo para profissionais</h2>
          <p className="mt-3 text-slate-700">
            Ganhe credibilidade com perfil verificado, reputação baseada em entregas reais e mais oportunidades com clientes confiáveis.
          </p>
        </section>

        <section id="lista-espera" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">Lista de espera ConfiaCasa</h2>
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900"
            />
            <input
              required
              type="tel"
              placeholder="WhatsApp"
              value={formData.whatsapp}
              onChange={(event) => setFormData({ ...formData, whatsapp: event.target.value })}
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900"
            />
            <input
              required
              type="text"
              placeholder="Cidade"
              value={formData.city}
              onChange={(event) => setFormData({ ...formData, city: event.target.value })}
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900"
            />
            <select
              required
              value={formData.userType}
              onChange={(event) => setFormData({ ...formData, userType: event.target.value as UserType })}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-900"
            >
              <option value="Cliente">Cliente</option>
              <option value="Profissional">Profissional</option>
            </select>
            <textarea
              required
              placeholder="Qual sua maior dor ao contratar ou prestar serviços residenciais?"
              value={formData.painPoint}
              onChange={(event) => setFormData({ ...formData, painPoint: event.target.value })}
              className="min-h-28 rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-900"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
            >
              Entrar na lista de espera
            </button>
          </form>
          {isSubmitted && (
            <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-800">
              Cadastro recebido. Você estará entre os primeiros a conhecer o ConfiaCasa.
            </p>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>ConfiaCasa © 2026</p>
          <p>Contrate com confiança.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
