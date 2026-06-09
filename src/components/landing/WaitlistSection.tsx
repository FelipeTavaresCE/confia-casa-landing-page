import { useEffect, useRef } from 'react'
import type { FormEvent } from 'react'
import { FeatureIcon } from './FeatureIcon'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'

type WaitlistSectionProps = {
  isSubmitting: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  submissionStatus: 'idle' | 'success' | 'error'
}

const inputClassName =
  'rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-900/10 transition duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring'

export function WaitlistSection({ isSubmitting, onSubmit, submissionStatus }: WaitlistSectionProps) {
  const feedbackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (submissionStatus === 'idle') return

    feedbackRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }, [submissionStatus])

  return (
    <SectionReveal id="lista-espera" className="py-16" as="section">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Lista de espera"
                title="Ajude a construir o ConfiaCasa"
                description="Estamos ouvindo clientes e profissionais para criar uma plataforma de reputação verificável para serviços residenciais."
              />

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    <FeatureIcon name="sparkles" className="h-4 w-4" />
                    Projeto em validação em Fortaleza.
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
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">Entre na lista de espera</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Vamos priorizar clientes e profissionais das primeiras turmas, começando por quem está ajudando a validar o problema agora.
              </p>

              {submissionStatus === 'success' ? (
                <div
                  ref={feedbackRef}
                  aria-live="polite"
                  className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium leading-relaxed text-emerald-900"
                >
                  Recebemos seu cadastro. Em breve entraremos em contato pelo WhatsApp.
                </div>
              ) : null}

              {submissionStatus === 'error' ? (
                <div
                  ref={feedbackRef}
                  aria-live="polite"
                  className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium leading-relaxed text-rose-900"
                >
                  Não conseguimos salvar agora. Tente novamente em instantes.
                </div>
              ) : null}

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Nome
                    <input name="name" type="text" required className={inputClassName} />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    WhatsApp
                    <input name="phone" type="tel" required className={inputClassName} />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Cidade
                    <input name="city" type="text" required className={inputClassName} />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                    Tipo
                    <select name="type" required defaultValue="Cliente" className={inputClassName}>
                      <option value="Cliente">Cliente</option>
                      <option value="Profissional">Profissional</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  Categoria de interesse (opcional)
                  <select name="service" defaultValue="" className={inputClassName}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Energia solar">Energia solar</option>
                    <option value="Móveis planejados">Móveis planejados</option>
                    <option value="Marmoraria">Marmoraria</option>
                    <option value="Ar-condicionado">Ar-condicionado</option>
                    <option value="Automação residencial">Automação residencial</option>
                    <option value="Elétrica residencial">Elétrica residencial</option>
                    <option value="Reforma">Reforma</option>
                    <option value="Outro">Outro</option>
                  </select>
                </label>

                <label
                  htmlFor="description"
                  className="flex flex-col gap-2 rounded-[24px] border border-blue-200 bg-blue-50/70 p-4 text-sm font-medium text-blue-950 shadow-sm shadow-blue-100/40"
                >
                  Qual sua maior dor ao contratar ou prestar serviços residenciais?
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    placeholder="Ex: tenho medo de contratar por indicação e descobrir que o profissional não entrega."
                    className={`${inputClassName} min-h-[132px] border-blue-200 bg-white`}
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Enviando...' : 'Entrar na lista de espera'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
