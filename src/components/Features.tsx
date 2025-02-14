const features = [
  {
    icon: "🚀",
    title: "Apprenez en pratiquant",
    description:
      "Chaque module inclut des projets concrets pour appliquer immédiatement ce que vous apprenez.",
  },
  {
    title: "Accès à vie",
    description:
      "Une fois inscrit, vous avez accès à la formation sans limite de temps.",
    icon: "🔒",
  },
  {
    icon: "🎓",
    title: "1 langage, 3 usages",
    description:
      "Avec JavaScript, vous pouvez créer vos propres applications web (site vitrine, site e-commerce, etc.), des applications mobiles (pour IOs et Android) et des serveurs (API, etc.)",
  },
];

export default function Features() {
  return (
    <section
      id="formation"
      className="py-20 flex flex-col items-center justify-center"
    >
      <h2 className="pt-3 text-2xl font-bold text-center md:pt-0 xs:text-3xl">
        Pourquoi choisir cette formation ?
      </h2>
      <p className="text-sm text-gray-600 mt-2 text-center xs:text-lg">
        Un apprentissage structuré et accessible à tous.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-600 mt-2 font-semibold">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
