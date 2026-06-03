import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const reputationFactors = [
  { icon: 'user-check' as const, title: 'Identidade validada' },
  { icon: 'briefcase' as const, title: 'CNPJ ou CPF verificado' },
  { icon: 'receipt' as const, title: 'Portfólio comprovado' },
  { icon: 'clock' as const, title: 'Tempo de mercado' },
  { icon: 'chart' as const, title: 'Serviços cadastrados' },
  { icon: 'contract' as const, title: 'Contratos concluídos' },
  { icon: 'search' as const, title: 'Histórico de disputas' },
  { icon: 'star' as const, title: 'Recomendações verificadas' },
]

export function ReputationSection() {
  return (
    <SectionReveal className="border-y border-slate-200 bg-white py-16" as="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Reputação"
          title="Reputação verificável, não comentário solto."
          description="No ConfiaCasa, a reputação não deve depender apenas de estrelas ou comentários livres. A proposta é construir histórico com base em dados, portfólio, contratos e entregas reais."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

        <div className="mt-12 rounded-[32px] border border-slate-200 bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
            <FeatureIcon name="sparkles" className="h-4 w-4" />
            Selos ConfiaCasa
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Identidade Verificada',
              'CNPJ Ativo',
              'Portfólio Comprovado',
              'Contrato Claro',
              'Profissional em Validação',
              'Histórico Comprovado',
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-semibold text-slate-100">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-slate-300">
            Os selos foram pensados para recompensar bons profissionais, não para expor ou difamar pessoas.
          </p>
        </div>

      </div>
    </SectionReveal>
  )
}
