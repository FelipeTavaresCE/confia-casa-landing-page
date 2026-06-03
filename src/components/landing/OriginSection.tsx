import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

export function OriginSection() {
  return (
    <SectionReveal className="border-y border-slate-200 bg-white py-16" as="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Origem"
          title="Por que o ConfiaCasa nasceu?"
          description="Após observarmos inúmeros casos de clientes que perderam dinheiro em reformas e profissionais honestos que também sofreram prejuízos por falta de contratos claros, percebemos um problema comum: falta confiança na contratação de serviços."
        />

        <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-900 p-8 text-white shadow-2xl shadow-slate-900/10 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <FeatureIcon name="home" className="h-4 w-4" />
                Da dor real para uma solução nacional
              </div>
              <p className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                Hoje existem plataformas que conectam pessoas. O ConfiaCasa está sendo criado para proteger pessoas.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                Em vez de depender apenas de avaliações superficiais, queremos construir uma camada de confiança que
                combine identidade validada, contratos claros e reputação baseada em entregas reais.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                'Clientes precisam de previsibilidade para contratar com segurança.',
                'Profissionais honestos precisam de mais credibilidade e menos inadimplência.',
                'O mercado precisa de regras claras para reduzir conflitos antes que eles aconteçam.',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-slate-200 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
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
