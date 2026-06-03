export function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>ConfiaCasa © 2026</p>
          <p>Projeto em validação em Fortaleza</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>contato@confiacasa.com.br</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-300 transition duration-300 hover:text-white">
              Termos
            </a>
            <a href="#" className="text-slate-300 transition duration-300 hover:text-white">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
