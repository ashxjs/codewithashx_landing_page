const faqs = [
  {
    question: "Cette formation est-elle faite pour moi ?",
    answer:
      "Oui, absolument ! Cette formation est conçue pour les débutants qui souhaitent apprendre à coder avec JavaScript",
  },
  {
    question: "Combien de temps ai-je accès à la formation ?",
    answer:
      "Tu auras un accès à vie à la formation ! Pas de limite de temps ⏳, tu peux avancer à ton rythme et revenir sur les cours autant de fois que tu le souhaites",
  },
  {
    question: "Y a-t-il des projets ?",
    answer:
      "À la fin de chaque module, tu devras compléter un quiz et réaliser un projet ! Ils te permettront de valider l'ensemble des notions vues au cours du module",
  },
  {
    question: "Cette formation est-elle prise en charge par le CPF ?",
    answer:
      "Pour l'instant ce n'est pas le cas, mais peut-être que dans le futur !",
  },
  {
    question:
      "De quels outils vais-je avoir besoin pour suivre cette formation ?",
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
      <div className="mt-10 w-[90%] ">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="max-w-2xl mx-auto mb-4 p-4 bg-gray-900 rounded-lg shadow-md"
          >
            <summary className="text-lg font-semibold cursor-pointer">
              {faq.question}
            </summary>
            <p className="pt-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
