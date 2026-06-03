import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const faqItems = [
  {
    question: 'O ConfiaCasa já está disponível no Brasil inteiro?',
    answer:
      'Ainda não. Estamos validando o produto com usuários reais em Fortaleza para garantir uma experiência segura antes da expansão nacional.',
  },
  {
    question: 'O que diferencia o ConfiaCasa de Google, Instagram ou marketplaces tradicionais?',
    answer:
      'Essas plataformas ajudam a encontrar profissionais. O ConfiaCasa está sendo criado para estruturar confiança com identidade validada, histórico de serviços, contratos digitais e reputação baseada em entregas reais.',
  },
  {
    question: 'Como a reputação será calculada?',
    answer:
      'A reputação vai considerar serviços concluídos, prazo, orçamento, avaliações verificadas, contratos executados e histórico de disputas — não apenas comentários aleatórios.',
  },
  {
    question: 'O pagamento ficará protegido?',
    answer:
      'Esse é um dos pilares do produto. O modelo prevê proteção financeira por etapas para que o valor seja liberado conforme a entrega for validada.',
  },
  {
    question: 'Sou profissional. Posso entrar na lista de espera?',
    answer:
      'Pode. Selecione “Profissional” no formulário para receber novidades sobre verificação de perfil, onboarding e benefícios pensados para quem presta serviço com seriedade.',
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
