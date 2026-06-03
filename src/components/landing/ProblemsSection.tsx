import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const familiarCards = [
  { icon: 'wallet' as const, text: 'Paguei e o profissional sumiu.' },
  { icon: 'briefcase' as const, text: 'O cliente recebeu e não quis pagar.' },
  { icon: 'clock' as const, text: 'O serviço atrasou meses.' },
  { icon: 'star' as const, text: 'A avaliação na internet era falsa.' },
  { icon: 'contract' as const, text: 'Não existia contrato.' },
  { icon: 'receipt' as const, text: 'O orçamento dobrou durante a obra.' },
]

const realCases = [
  {
    title: 'Cliente paga entrada para reforma.',
    description: 'O profissional desaparece e o prejuízo fica todo com quem contratou.',
  },
  {
    title: 'Profissional conclui serviço.',
    description: 'O cliente atrasa ou não paga e o trabalho entregue vira uma disputa sem proteção.',
  },
  {
    title: 'Obra sem contrato.',
    description: 'Prazo, escopo e orçamento ficam abertos a conflito, sem uma base clara para resolver o problema.',
  },
]

export function ProblemsSection() {
  return (
    <SectionReveal className="py-16" as="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problema"
          title="Tudo isso parece familiar?"
          description="Essas situações acontecem todos os dias porque a contratação ainda depende de confiança informal, prints e promessas difíceis de comprovar."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {familiarCards.map((item, index) => (
            <article
              key={item.text}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <FeatureIcon name={item.icon} className="h-5 w-5" />
              </div>
              <p className="mt-5 text-base font-semibold leading-relaxed text-slate-800">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <SectionHeader
            eyebrow="Casos reais"
            title="Casos reais que acontecem todos os dias"
            description="Quando não existe uma estrutura de confiança, os dois lados ficam expostos a perdas financeiras, atrasos e conflitos difíceis de resolver."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {realCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg hover:shadow-emerald-100/40"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <FeatureIcon name="alert" className="h-5 w-5" />
                </div>
                <p className="mt-5 text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-lg font-semibold text-slate-900">
            O ConfiaCasa nasceu para reduzir situações como essas.
          </p>
        </div>
      </div>
    </SectionReveal>
  )
}
