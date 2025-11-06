import { Search, User, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-fuchsia-500 grid place-items-center text-white font-black">
            H
          </div>
          <span className="text-xl font-semibold tracking-tight">HiverMarket</span>
        </div>

        <div className="hidden md:flex items-center gap-2 w-full max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher des services (pub, partenariat, UGC...)"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
            />
          </div>
          <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">Rechercher</button>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 transition">
            <Star className="h-4 w-4 text-amber-500" />
            Devenir vendeur
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
            <User className="h-4 w-4" />
            Se connecter
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher des services"
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
          />
        </div>
      </div>
    </header>
  );
}
