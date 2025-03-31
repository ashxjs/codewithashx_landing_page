import { Module as ModuleType } from "@/types/course.type";

export const modules: ModuleType[] = [
  {
    title: "Introduction",
    order: 1,
    chapters: [
      {
        title: "Introduction",
        order: 0,
        inProgress: false,
      },
      {
        title: "Variables",
        order: 1,
        inProgress: false,
      },
      {
        title: "Numbers",
        order: 2,
        inProgress: false,
      },
      {
        title: "Strings",
        order: 3,
        inProgress: false,
      },
      {
        title: "Conditions",
        order: 4,
        inProgress: false,
      },
      {
        title: "Arrays",
        order: 5,
        inProgress: false,
      },
      {
        title: "Functions",
        order: 6,
        inProgress: false,
      },
      {
        title: "Quizz - Valides tes connaissances !",
        order: 7,
        inProgress: false,
      },
      {
        title: "Projet 1 - Créer une carte de jeux en 2D",
        order: 8,
        inProgress: false,
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
        inProgress: false,
      },
      {
        title: "La P.O.O",
        order: 9,
        inProgress: false,
      },
      {
        title: "La P.O.O avancée",
        order: 10,
        inProgress: true,
      },
      {
        title: "Exercices pratiques",
        order: 11,
        inProgress: true,
      },
    ],
  },
  {
    title: "Le Web",
    order: 3,
    chapters: [
      {
        title: "Comment ça marche ?",
        order: 12,
        inProgress: true,
      },
      {
        title: "Le HTML",
        order: 13,
        inProgress: true,
      },
      {
        title: "Le CSS",
        order: 14,
        inProgress: true,
      },
      {
        title: "Le DOM",
        order: 15,
        inProgress: true,
      },
      {
        title: "Manipulation du DOM avec Javascript",
        order: 16,
        inProgress: true,
      },
      {
        title: "Créer ton premier site de e-commerce",
        order: 17,
        inProgress: true,
      },
    ],
  },
];
