import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

const protectionSides = [
  {
    title: 'CLIENTE',
    color: 'blue',
    description: 'Mais segurança para escolher antes de contratar.',
    icon: 'shield' as const,
    items: ['Profissionais com dados mais claros', 'Portfólio organizado', 'Selos de confiança', 'Menos dependência de indicação informal'],
  },
  {
    title: 'PROFISSIONAL',
    color: 'emerald',
    description: 'Mais credibilidade para se diferenciar dos aventureiros.',
    icon: 'briefcase' as const,
    items: ['Perfil profissional validado', 'Histórico de entregas', 'Mais confiança para fechar serviços maiores', 'Diferenciação por reputação'],
  },
]

export function ProtectionSection() {
  return (
    <SectionReveal className="py-16" as="section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Proteção"
              title="Confiança para clientes. Credibilidade para profissionais."
              description="O ConfiaCasa está sendo desenhado para reduzir insegurança de quem contrata e valorizar profissionais sérios com mais clareza de reputação."
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
              <FeatureIcon name="user-check" className="h-4 w-4" />
              Exemplo de perfil verificado
            </div>
            <p className="mt-5 text-3xl font-bold tracking-tight">João Marmoraria</p>
            <p className="mt-2 text-sm font-medium text-slate-300">Fortaleza - CE</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              CNPJ ativo • 8 anos de mercado • 23 serviços cadastrados
            </p>
            <p className="mt-3 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
              Nível de confiança: Ouro
            </p>
            <p className="mt-3 text-sm font-medium text-slate-200">Histórico em validação</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Identidade validada', 'Empresa ativa', 'Portfólio comprovado', 'Contrato claro', 'Histórico em construção'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              Os níveis e selos serão evoluídos conforme a plataforma amadurecer e os primeiros serviços forem acompanhados.
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
