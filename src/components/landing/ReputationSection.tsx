import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const reputationFactors = [
  { icon: 'briefcase' as const, title: 'Serviços concluídos' },
  { icon: 'clock' as const, title: 'Cumprimento de prazo' },
  { icon: 'receipt' as const, title: 'Cumprimento de orçamento' },
  { icon: 'star' as const, title: 'Avaliações verificadas' },
  { icon: 'contract' as const, title: 'Contratos executados' },
  { icon: 'search' as const, title: 'Histórico de disputas' },
]

export function ReputationSection() {
  return (
    <SectionReveal className="border-y border-slate-200 bg-white py-16" as="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Reputação"
          title="Como será calculada a reputação?"
          description="A reputação não será baseada em comentários aleatórios. Ela será construída através de entregas reais."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reputationFactors.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-100/40"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <FeatureIcon name={item.icon} className="h-5 w-5" />
              </div>
              <p className="mt-5 text-base font-semibold text-slate-900">{item.title}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              <FeatureIcon name="sparkles" className="h-4 w-4" />
              Nosso compromisso
            </div>
            <p className="mt-5 text-3xl font-bold tracking-tight">Não queremos ser apenas mais um marketplace.</p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Queremos criar a infraestrutura de confiança para contratação de serviços residenciais no Brasil.
            </p>
          </div>

          <div className="rounded-[32px] border border-emerald-200 bg-emerald-50/70 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">O que isso significa</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                'Menos espaço para avaliações manipuladas.',
                'Mais previsibilidade para clientes e profissionais.',
                'Contratações com histórico real, e não promessas vagas.',
                'Mais transparência antes, durante e depois do serviço.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/60 bg-white/80 p-5 text-sm leading-relaxed text-emerald-950">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
