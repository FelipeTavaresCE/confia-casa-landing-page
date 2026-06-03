import type { FormEvent } from 'react'
import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

type WaitlistSectionProps = {
  isSubmitted: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onBackToTop: () => void
}

const inputClassName =
  'rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-900/10 transition duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring'

export function WaitlistSection({ isSubmitted, onSubmit, onBackToTop }: WaitlistSectionProps) {
  return (
    <SectionReveal id="lista-espera" className="py-16" as="section">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Lista de espera"
                title="Ajude a construir o ConfiaCasa."
                description="Queremos entender as maiores dores de quem contrata e presta serviços para lançar algo realmente útil, claro e seguro."
              />

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    <FeatureIcon name="sparkles" className="h-4 w-4" />
                    Projeto em validação.
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-emerald-950">
                    Estamos ouvindo clientes e profissionais para construir algo realmente útil antes do lançamento oficial.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
                  As respostas desta lista de espera vão orientar prioridades de produto, onboarding e mecanismos de
                  confiança desde o primeiro lançamento.
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-7">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">Entre na lista de espera</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Vamos priorizar clientes e profissionais das primeiras turmas, começando por quem está ajudando a validar o problema agora.
                  </p>

                  <form onSubmit={onSubmit} className="mt-8 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                        Nome
                        <input name="nome" type="text" required className={inputClassName} />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                        Email
                        <input name="email" type="email" required className={inputClassName} />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                        WhatsApp
                        <input name="whatsapp" type="tel" required className={inputClassName} />
                      </label>
                      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                        Cidade
                        <input name="cidade" type="text" required className={inputClassName} />
                      </label>
                    </div>

                    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                      Tipo
                      <select name="tipo" required defaultValue="Cliente" className={inputClassName}>
                        <option value="Cliente">Cliente</option>
                        <option value="Profissional">Profissional</option>
                      </select>
                    </label>

                    <label className="flex flex-col gap-2 rounded-[24px] border border-blue-200 bg-blue-50/70 p-4 text-sm font-medium text-blue-950 shadow-sm shadow-blue-100/40">
                      <span className="text-sm font-semibold">Qual sua maior dor ao contratar ou prestar serviços residenciais?</span>
                      <textarea
                        name="dorPrincipal"
                        required
                        rows={5}
                        placeholder="Conte o que mais gera insegurança, atraso, prejuízo ou conflito na sua experiência."
                        className={`${inputClassName} min-h-[132px] border-blue-200 bg-white`}
                      />
                    </label>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                    >
                      Entrar na lista de espera
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex h-full flex-col justify-between rounded-[24px] border border-emerald-200 bg-white p-6 shadow-sm">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <FeatureIcon name="shield" className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">Obrigado por participar.</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      Você agora faz parte dos primeiros usuários do ConfiaCasa.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      Suas respostas vão ajudar a construir a plataforma.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onBackToTop}
                    className="mt-8 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400"
                  >
                    Voltar para o início
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
