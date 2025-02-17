// import Image from "next/image";

import Image from "next/image";

const testimonials = [
  {
    name: "Veechal R.",
    text: "Cette formation m'a permis d'apprendre les bases de la programmation avec JavaScript, je recommande à 100% !",
    avatar: "/avatars/avatar2.webp",
  },
  {
    name: "Léana H.",
    text: "J'avais envie de comprendre comment fonctionnent les sites web, cette formation m'a permis de comprendre les bases de la programmation avec JavaScript et de créer mon premier site web en moins d'une semaine !",
    avatar: "/avatars/avatar1.webp",
  },
  {
    name: "Florent D.",
    text: "J'ai appris JavaScript avec cette formation, j'ai pu créer mon premier et mettre en ligne mon premier site de e-commerce",
    avatar: "/avatars/avatar3.webp",
  },
];

export default function Testimonials() {
  return (
    <section
      id="avis"
      className="py-20 flex flex-col items-center justify-center"
    >
      <h2 className="pt-3 text-3xl font-bold text-center md:pt-0">
        Les avis de nos élèves
      </h2>
      <p className="text-lg text-gray-600 font-semibold mt-2 text-center">
        Des dixaines d&apos;apprenants ont déjà transformé leur avenir !
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className="mx-auto rounded-full"
              width={64}
              height={64}
            />
            <p className="mt-4 text-gray-600 font-semibold">{`"${testimonial.text}"`}</p>
            <h4 className="mt-3 font-semibold">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
