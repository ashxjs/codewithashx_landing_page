import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqs = [
  {
    question: "La formation JavaScript est-elle adaptée à mon niveau ?",
    answer:
      "Oui, absolument ! Cette formation est conçue pour les débutants qui souhaitent apprendre à coder avec JavaScript",
  },
  {
    question: "Quelle est la durée d'accès à la formation JavaScript ?",
    answer:
      "Tu auras un accès à vie à la formation ! Pas de limite de temps ⏳, tu peux avancer à ton rythme et revenir sur les cours autant de fois que tu le souhaites",
  },
  {
    question:
      "Des projets pratiques sont-ils inclus dans la formation JavaScript ?",
    answer:
      "À la fin de chaque module, tu devras compléter un quiz et réaliser un projet ! Ils te permettront de valider l'ensemble des notions vues au cours du module",
  },
  {
    question: "La formation JavaScript est-elle éligible au CPF ?",
    answer:
      "Pour l'instant ce n'est pas le cas, mais peut-être que dans le futur !",
  },
  {
    question:
      "Quels outils sont nécessaires pour suivre la formation JavaScript ?",
    answer:
      "Nous n'utiliserons que des outils gratuits, comme Visual Studio Code, Git, GitHub et Node.js ",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold text-center">FAQ</h2>
      <Accordion type="single" collapsible className="mt-20 w-[90%]">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
