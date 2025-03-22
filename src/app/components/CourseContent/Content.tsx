import { modules as modulesMock } from "@/mock/module.mock";
import { Module } from "./Module";

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
        {modulesMock.map((module) => (
          <Module key={module.title} {...module} />
        ))}
      </div>
    </section>
  );
};
