import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const protectionSides = [
  {
    title: 'CLIENTE',
    color: 'blue',
    description: 'Mais previsibilidade para contratar com segurança e acompanhar o serviço com clareza.',
    icon: 'shield' as const,
    items: ['Identidade validada', 'Histórico de entregas', 'Contratos digitais', 'Menor risco financeiro'],
  },
  {
    title: 'PROFISSIONAL',
    color: 'emerald',
    description: 'Mais credibilidade para fechar negócios melhores e reduzir conflitos por inadimplência.',
    icon: 'briefcase' as const,
    items: ['Mais credibilidade', 'Clientes mais qualificados', 'Menos inadimplência', 'Histórico profissional validado'],
  },
]

const flowSteps = ['Cliente deposita', 'Valor protegido', 'Serviço entregue', 'Pagamento liberado']

export function ProtectionSection() {
  return (
    <SectionReveal className="py-16" as="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Proteção"
              title="Proteção para os dois lados"
              description="O ConfiaCasa está sendo desenhado para proteger quem contrata e também quem entrega o serviço, com incentivos mais saudáveis para as duas partes."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {protectionSides.map((side) => {
                const palette =
                  side.color === 'blue'
                    ? 'border-blue-200 bg-blue-50/80 text-blue-950'
                    : 'border-emerald-200 bg-emerald-50/80 text-emerald-950'
                const accent = side.color === 'blue' ? 'text-blue-700 bg-white' : 'text-emerald-700 bg-white'
                const body = side.color === 'blue' ? 'text-blue-900/80' : 'text-emerald-900/80'

                return (
                  <article key={side.title} className={`rounded-[28px] border p-6 shadow-sm ${palette}`}>
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ${accent}`}>
                      <FeatureIcon name={side.icon} className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-sm font-semibold tracking-[0.24em]">{side.title}</p>
                    <p className={`mt-3 text-sm leading-relaxed ${body}`}>{side.description}</p>
                    <ul className="mt-5 space-y-3 text-sm font-medium">
                      {side.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
                            <FeatureIcon name="checklist" className="h-3.5 w-3.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/10 sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              <FeatureIcon name="balance" className="h-4 w-4" />
              Fluxo financeiro protegido
            </div>
            <p className="mt-5 text-3xl font-bold tracking-tight">Mais clareza do início ao pagamento.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A lógica é simples: alinhar expectativa, registrar o combinado e só liberar o valor conforme a entrega.
            </p>

            <div className="mt-8 space-y-4">
              {flowSteps.map((item, index) => (
                <div key={item}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur-sm">
                    {item}
                  </div>
                  {index < flowSteps.length - 1 && <p className="py-2 text-center text-lg text-emerald-300">↓</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
