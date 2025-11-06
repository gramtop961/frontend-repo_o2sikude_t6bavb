import { Rocket, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-indigo-600/10 text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Place de marché pour influenceurs
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Vendez vos services d'influence, partout dans le monde
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Monétisez votre audience avec des offres claires: placements, partenariats, UGC, reviews, stories sponsorisées et plus. Acheteurs et créateurs, tout en un seul endroit inspiré par l'élégance d'Hiver.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
                <Rocket className="h-4 w-4" />
                Lancer ma boutique
              </button>
              <button className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-white transition bg-white">
                Découvrir les services
              </button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="font-semibold text-slate-900">Paiements sécurisés</div>
                <div className="text-sm text-slate-600 flex items-center gap-2 mt-1">
                  <Shield className="h-4 w-4 text-emerald-500" />
                  Escrow, factures et garanties inclues
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="font-semibold text-slate-900">Notation transparente</div>
                <div className="text-sm text-slate-600">Avis vérifiés et profils détaillés</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec2cfb3?q=80&w=1670&auto=format&fit=crop"
                alt="Influence marketing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
