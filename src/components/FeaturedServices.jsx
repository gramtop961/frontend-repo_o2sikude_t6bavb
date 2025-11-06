import { Star, ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Story Instagram sponsorisée (100k+)",
    creator: "@lea.fashion",
    price: 250,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Intégration YouTube 60s (200k)",
    creator: "@alextech",
    price: 750,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "UGC 30s TikTok / Reels",
    creator: "@marionugc",
    price: 180,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Photo packshot x10",
    creator: "@studioframe",
    price: 120,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1550867428-2c6777d9182d?q=80&w=1670&auto=format&fit=crop",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Services en vedette</h2>
            <p className="text-slate-600 mt-1">Sélection soignée d'offres performantes</p>
          </div>
          <button className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
            Voir plus <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.id} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
              <div className="aspect-video overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-slate-900">{s.title}</div>
                    <div className="text-sm text-slate-600">par <span className="font-medium">{s.creator}</span></div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span className="text-sm font-medium">{s.rating}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold text-slate-900">{s.price}€</div>
                  <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-sm">Voir l'offre</button>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" /> Paiement sécurisé & protection achat
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
