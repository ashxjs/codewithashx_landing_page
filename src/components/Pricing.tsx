const pricingPlans = [
  {
    title: "Formation Standard",
    price: "Free",
    features: [
      "Accès à vie",
      "Cours en vidéo HD",
      "Accès au mise à jours",
      "Projets pratiques avancés",
    ],
    buttonText: "Choisir cette offre",
    mostPopular: false,
  },
  {
    title: "Formation Premium",
    price: "299€",
    features: [
      "Accès à vie",
      "Accès au formation Git (à venir)",
      "Accès au formation React (à venir)",
      "Accès à une communauté privée",
      "Tout ce qui est inclus dans Standard",
      "Support par email, DM instagram & discord",
    ],
    buttonText: "Meilleure Offre",
    mostPopular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 text-center px-5 md:px-0">
      <h2 className="pt-3 text-2xl font-bold text-center md:pt-0 xs:text-3xl">
        Nos Tarifs
      </h2>
      <p className="text-sm text-gray-600 mt-2 text-center xs:text-lg">
        Choisissez l&apos;offre qui correspond à vos besoins.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-lg border-2 border-dashed border-gray-900 hover:border-blue-600 transition-all duration-300 ${
              plan.mostPopular
                ? "bg-gray-900 border-gray-800 text-white"
                : "text-white"
            }`}
          >
            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}</p>
            <ul className="mt-6 space-y-2 text-base xs:text-lg">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-left text-white">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 px-6 py-3 font-semibold rounded-lg transition ${
                plan.mostPopular
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
