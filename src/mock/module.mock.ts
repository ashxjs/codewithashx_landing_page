import { Module as ModuleType } from "@/types/course.type";

export const modules: ModuleType[] = [
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
