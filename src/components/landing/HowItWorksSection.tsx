import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const resolveSteps = [
  { icon: 'user-check' as const, title: 'Passo 1', description: 'Identidade validada.' },
  { icon: 'briefcase' as const, title: 'Passo 2', description: 'Histórico de serviços.' },
  { icon: 'contract' as const, title: 'Passo 3', description: 'Contrato digital.' },
  { icon: 'chart' as const, title: 'Passo 4', description: 'Reputação baseada em entregas reais.' },
  { icon: 'shield' as const, title: 'Passo 5', description: 'Proteção financeira por etapas (em breve).' },
]

export function HowItWorksSection() {
  return (
    <SectionReveal className="border-y border-slate-200 bg-white py-16" as="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Como resolve"
          title="Como o ConfiaCasa resolve"
          description="Cada etapa foi pensada para transformar uma contratação informal em um processo mais claro, verificável e seguro."
          align="center"
        />

        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {resolveSteps.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100/50"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                <FeatureIcon name={item.icon} className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">{item.title}</p>
              <p className="mt-3 text-base font-semibold leading-relaxed text-emerald-950">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionReveal>
  )
}
