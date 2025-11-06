import { Megaphone, Handshake, Film, Camera, Instagram, Youtube } from "lucide-react";

const categories = [
  { icon: Megaphone, title: "Placements pub", desc: "Stories, posts, vidéos sponsorisées" },
  { icon: Handshake, title: "Partenariats", desc: "Ambassadeur, affiliation, codes promo" },
  { icon: Film, title: "UGC / Vidéos", desc: "Contenu sur-mesure pour vos marques" },
  { icon: Camera, title: "Shooting / Photos", desc: "Packshots, lifestyle, portraits" },
  { icon: Instagram, title: "Instagram", desc: "Créateurs spécialisés IG" },
  { icon: Youtube, title: "YouTube", desc: "Intégrations et dedicated" },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Explorez les catégories</h2>
          <button className="text-indigo-600 hover:text-indigo-700">Voir tout</button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <div key={c.title} className="group p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition bg-gradient-to-b from-slate-50 to-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-indigo-600/10 text-indigo-700">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{c.title}</div>
                  <div className="text-xs text-slate-600">{c.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
