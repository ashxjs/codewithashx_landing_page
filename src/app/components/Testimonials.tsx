import { useTranslations } from "next-intl";
import Image from "next/image";

const testimonials = [
  {
    name: "Veechal R.",
    text: "Cette formation m'a permis d'apprendre les bases de la programmation avec JavaScript, je recommande à 100% !",
    avatar: "/avatars/avatar2.webp",
  },
  {
    name: "Léana H.",
    text: "Grâce à cette formation JavaScript, j'ai pu maîtriser les bases de la programmation et développer mon propre site web !",
    avatar: "/avatars/avatar1.webp",
  },
  {
    name: "Florent D.",
    text: "Cette formation m'a aidé à créer et lancer mon premier site e-commerce avec JavaScript",
    avatar: "/avatars/avatar3.webp",
  },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="avis"
      className="py-20 flex flex-col items-center justify-center"
    >
      <h2 className="pt-3 text-3xl font-bold text-center md:pt-0">
        {t("title")}
      </h2>
      <p className="px-3 text-md text-gray-50/50 mt-2 text-center md:text-xl md:px-0">
        {t("description")}
      </p>

      <div className="snap-container mt-20 px-6 flex overflow-x-auto snap-x snap-mandatory w-full gap-6 pb-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 flex flex-col gap-y-4 justify-center items-center rounded-xl shadow-md hover:shadow-lg transition flex-shrink-0 w-[90%] md:w-[calc(33.333%-1rem)] snap-center"
          >
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className="mx-auto rounded-full"
              width={64}
              height={64}
            />
            <p className="mt-4 text-gray-50/50 font-semibold">{`"${t(
              `testimonials.${index}.text`
            )}"`}</p>
            <h3 className="mt-3 font-semibold self-start">
              {t(`testimonials.${index}.name`)}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
