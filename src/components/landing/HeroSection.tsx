import { FeatureIcon } from './FeatureIcon'
import { SectionReveal } from './SectionReveal'

const trustHighlights = [
  'Mais seguro que depender apenas de avaliações na internet.',
  'Diferente de Google, Instagram e marketplaces que apenas conectam.',
  'Construído para validar identidade, histórico e contratos antes da contratação.',
]

export function HeroSection() {
  return (
    <SectionReveal className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8" as="section">
      <div>
        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm shadow-emerald-100">
          🚀 Validando o mercado em Fortaleza.
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Quantas pessoas você conhece que já perderam dinheiro em uma reforma?
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          O ConfiaCasa está construindo a primeira plataforma brasileira focada em proteger clientes e
          profissionais através de reputação validada, contratos inteligentes e contratação segura.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          Estamos construindo o ConfiaCasa junto com clientes e profissionais para criar a forma mais segura de
          contratar serviços residenciais no Brasil.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#lista-espera"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Entrar na lista de espera
          </a>
          <a
            href="#lista-espera"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400"
          >
            Sou profissional
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {trustHighlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm leading-relaxed text-slate-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 p-6 text-white shadow-2xl shadow-blue-950/15 sm:p-8">
        <div className="absolute -right-12 -top-10 h-28 w-28 animate-float-slow rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-12 -left-10 h-28 w-28 animate-float-slow rounded-full bg-blue-300/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
            <FeatureIcon name="shield" className="h-4 w-4" />
            Confiança validada desde o primeiro contato
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Menos risco. Mais clareza. Mais proteção.</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
            Hoje as pessoas usam Google, Instagram ou indicações soltas para contratar. O ConfiaCasa está sendo
            criado para ir além da conexão e estruturar a confiança na contratação residencial.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-blue-100">Cenário atual</p>
              <p className="mt-2 text-lg font-semibold">Avaliações soltas, sem contrato e risco financeiro imprevisível.</p>
            </div>
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-emerald-100">Com o ConfiaCasa</p>
              <p className="mt-2 text-lg font-semibold">Identidade validada, histórico real e contratação mais segura.</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-blue-100">Infraestrutura de confiança</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Reputação validada, contratos digitais e proteção financeira por etapas para reduzir golpes,
                  disputas e insegurança.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                <FeatureIcon name="sparkles" className="h-4 w-4" />
                Solução pensada para escalar no Brasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
