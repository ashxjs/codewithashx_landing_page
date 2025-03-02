type Module = {
  title: string;
  order: number;
  chapters: Chapter[];
};

type Chapter = {
  title: string;
  order: number;
};

const modules: Module[] = [
  {
    title: "Introduction",
    order: 1,
    chapters: [
      {
        title: "Introduction",
        order: 0,
      },
      {
        title: "Variables",
        order: 1,
      },
      {
        title: "Numbers",
        order: 2,
      },
      {
        title: "Strings",
        order: 3,
      },
      {
        title: "Conditions",
        order: 4,
      },
      {
        title: "Arrays",
        order: 5,
      },
      {
        title: "Functions",
        order: 6,
      },
      {
        title: "Quizz - Valides tes connaissances !",
        order: 7,
      },
      {
        title: "Projet 1 - Créer une carte de jeux en 2D",
        order: 8,
      },
    ],
  },
  {
    title: "Javascript avancée",
    order: 2,
    chapters: [
      {
        title: "Les objets",
        order: 8,
      },
      {
        title: "La P.O.O",
        order: 9,
      },
      {
        title: "La P.O.O avancée ⌛️",
        order: 10,
      },
      {
        title: "Exercices pratiques ⌛️",
        order: 11,
      },
    ],
  },
  {
    title: "Le Web",
    order: 3,
    chapters: [
      {
        title: "Comment ça marche ? ⌛️",
        order: 12,
      },
      {
        title: "Le HTML ⌛️",
        order: 13,
      },
      {
        title: "Le CSS ⌛️",
        order: 14,
      },
      {
        title: "Le DOM ⌛️",
        order: 15,
      },
      {
        title: "Manipulation du DOM avec Javascript ⌛️",
        order: 16,
      },
      {
        title: "Créer ton premier site de e-commerce ⌛️",
        order: 17,
      },
    ],
  },
];

export const Content = () => {
  return (
    <section
      id="content"
      className="py-20 p-5 flex flex-col items-center justify-center"
    >
      <h2 className="pt-3 text-3xl font-bold text-center md:pt-0">
        Contenus de la formation
      </h2>
      <div className="mt-20 flex flex-col border-2 border-dashed border-gray-900">
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
                  <span className="border border-blue-700 bg-blue-900/50 h-8 w-8 flex items-center justify-center rounded-md text-md font-semibold md:text-lg">
                    {chapter.order}
                  </span>
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
