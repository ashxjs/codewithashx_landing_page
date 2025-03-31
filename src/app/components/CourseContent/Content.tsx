import { Module } from "./Module";
import { useTranslations } from "next-intl";
import { modules as modulesMock } from "@/mock/module.mock";

export const Content = () => {
  const t = useTranslations("content");

  const translatedModules = modulesMock.map((module) => ({
    ...module,
    title: t(`modules.${module.order}.title`),
    chapters: module.chapters.map((chapter) => ({
      ...chapter,
      title: t(`modules.${module.order}.chapters.${chapter.order}.title`),
    })),
  }));

  return (
    <section
      id="content"
      className="py-20 p-5 flex flex-col items-center justify-center"
    >
      <h2 className="pt-3 text-3xl font-bold text-center md:pt-0">
        {t("title")}
      </h2>
      <div className="mt-20 flex flex-col border-2 border-dashed border-gray-900">
        {translatedModules.map((module) => (
          <Module key={module.title} {...module} />
        ))}
      </div>
    </section>
  );
};

Content.displayName = "Content";
