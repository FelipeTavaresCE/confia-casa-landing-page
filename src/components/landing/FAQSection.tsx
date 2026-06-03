import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const faqItems = [
  {
    question: 'O ConfiaCasa garante que o profissional não dará problema?',
    answer:
      'Não prometemos garantia total. A proposta da plataforma é reduzir riscos oferecendo mais informação, reputação verificável, portfólio organizado, selos e contratos mais claros.',
  },
  {
    question: 'Vocês são iguais ao GetNinjas?',
    answer:
      'Não. Marketplaces tradicionais normalmente focam em conectar clientes e profissionais. O ConfiaCasa quer focar em confiança, reputação verificável e histórico profissional.',
  },
  {
    question: 'O profissional paga para aparecer?',
    answer:
      'Na fase inicial, não. O objetivo é validar o mercado, ouvir clientes e cadastrar bons profissionais.',
  },
  {
    question: 'Como vocês evitam avaliações falsas?',
    answer:
      'A proposta é evoluir para avaliações vinculadas a serviços reais, com histórico, contrato e evidências, evitando comentários soltos e manipuláveis.',
  },
  {
    question: 'Por que começar por Fortaleza?',
    answer:
      'Porque é onde estamos validando o problema de perto, ouvindo clientes e profissionais antes de expandir.',
  },
]

export function FAQSection() {
  return (
    <SectionReveal className="border-t border-slate-200 bg-white py-16" as="section">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Respondemos aqui os pontos mais importantes para quem quer acompanhar a construção do ConfiaCasa desde o começo."
          align="center"
        />

        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 open:bg-white open:shadow-sm">
              <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-slate-900">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
