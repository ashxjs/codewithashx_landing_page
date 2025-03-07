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
    title: "3 types d'applications",
    description:
      "Avec Javascript, tu peux créer des applications web, mobiles et serveurs.",
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
      <p className="text-xs text-gray-50/50 mt-2 text-center xs:text-lg md:text-xl">
        Un apprentissage structuré et accessible à tous.
      </p>
      <div className="snap-container mt-20 px-6 flex overflow-x-auto snap-x snap-mandatory w-full gap-6 pb-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition flex-shrink-0 w-[90%] md:w-[calc(33.333%-1rem)] snap-center"
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-50/50 mt-2 font-semibold">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
