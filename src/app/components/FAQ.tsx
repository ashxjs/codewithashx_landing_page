import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");

  return (
    <section
      id="faq"
      className="py-20 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold text-center">FAQ</h2>
      <Accordion type="single" collapsible className="mt-20 w-[90%]">
        {Array.from({ length: 5 }).map((_, index) => (
          <AccordionItem key={index} value={`question-${index}`}>
            <AccordionTrigger>
              {t(`questions.${index}.question`)}
            </AccordionTrigger>
            <AccordionContent>
              {t(`questions.${index}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

FAQ.displayName = "FAQ";
