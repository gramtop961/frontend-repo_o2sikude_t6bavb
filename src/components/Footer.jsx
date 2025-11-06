export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-fuchsia-500 grid place-items-center text-white font-black mb-3">H</div>
            <p className="text-sm text-slate-600">La place de marché moderne pour monétiser l'influence. Sécurisée, élégante et pensée pour la performance.</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-slate-900">Découvrir</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Catégories</li>
              <li>Services en vedette</li>
              <li>Créateurs</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-slate-900">Support</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Centre d'aide</li>
              <li>Protection acheteur</li>
              <li>Confidentialité</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-slate-900">Entreprise</div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>À propos</li>
              <li>Carrières</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} HiverMarket. Tous droits réservés.</span>
          <div className="space-x-4">
            <a>CGU</a>
            <a>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
