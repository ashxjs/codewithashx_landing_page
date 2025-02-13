type Module = {
  title: string;
  order: number;
  description: string;
  icon: string;
  chapters: Chapter[];
};

type Chapter = {
  title: string;
  order: number;
  icon: string;
  description: string;
};

const modules: Module[] = [
  {
    title: "Introduction",
    order: 1,
    description: "Les bases de JavaScript",
    icon: "🚀",
    chapters: [
      {
        title: "Introduction",
        order: 0,
        icon: "👋",
        description: "Introduction à JavaScript",
      },
      {
        title: "Variables",
        order: 1,
        icon: "1️⃣",
        description: "Introduction à JavaScript",
      },
      {
        title: "Numbers",
        order: 2,
        icon: "2️⃣",
        description: "Introduction à JavaScript",
      },
      {
        title: "Strings",
        order: 3,
        icon: "3️⃣",
        description: "Introduction à JavaScript",
      },
      {
        title: "Conditions",
        order: 4,
        icon: "4️⃣",
        description: "Introduction à JavaScript",
      },
      {
        title: "Arrays",
        order: 5,
        icon: "5️⃣",
        description: "Introduction à JavaScript",
      },
      {
        title: "Functions",
        order: 6,
        icon: "6️⃣",
        description: "Introduction à JavaScript",
      },
      {
        title: "Quiz - Valides tes connaissances !",
        order: 7,
        icon: "🧠",
        description: "Introduction à JavaScript",
      },
      {
        title: "Projet 1 - Créer une carte de jeux en 2D",
        order: 8,
        icon: "🕹️",
        description: "Introduction à JavaScript",
      },
    ],
  },
  {
    title: "Javascript avancée",
    order: 2,
    description: "Notions avancées de JavaScript",
    icon: "🔥",
    chapters: [
      {
        title: "Les objets",
        order: 8,
        icon: "⏳",
        description: "Introduction à JavaScript",
      },
      {
        title: "La P.O.O",
        order: 9,
        icon: "⏳",
        description: "Introduction à la P.O.O",
      },
    ],
  },
];

export const Content = () => {
  return (
    <section
      id="content"
      className="py-20 flex flex-col items-center justify-center"
    >
      <h2 className="pt-3 text-3xl font-bold text-center md:pt-0">
        Contenu de la formation
      </h2>
      <div className="mt-10 flex flex-col border-2 border-dashed border-gray-900">
        {modules.map((module) => (
          <div
            key={module.title}
            className="relative h-fit px-4 py-6 lg:px-16 border-b-2 border-dashed border-gray-900 flex-col lg:flex-row flex"
          >
            <div className="absolute inset-x-0 top-[-14px] flex items-center justify-center">
              <span className="inline-flex items-center rounded-md font-medium forced-colors:outline bg-gray-900 text-white group-data-hover:bg-gray-800 px-1.5 py-0.5 text-md sm:text-lg/5 gap-x-1.5">{`Module ${module.order}`}</span>
            </div>
            <div className="flex flex-col p-5">
              {module.chapters.map((chapter) => (
                <div
                  key={chapter.title}
                  className="mt-1 flex items-start gap-x-2"
                >
                  <span>{chapter.icon}</span>
                  <span className="text-md font-semibold md:text-lg">
                    {chapter.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
