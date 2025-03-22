import { Chapter } from "./Chapter";
import { FunctionComponent } from "react";
import { Module as ModuleType } from "@/types/course.type";

export const Module: FunctionComponent<ModuleType> = ({
  title,
  order,
  chapters,
}) => (
  <div
    key={title}
    className="relative h-fit px-4 py-6 lg:px-16 border-b-2 border-dashed border-gray-900 flex-col lg:flex-row flex"
  >
    <div className="absolute inset-x-0 top-[-14px] flex items-center justify-center">
      <span className="inline-flex items-center rounded-md font-medium forced-colors:outline bg-gray-900 text-white group-data-hover:bg-gray-800 px-1.5 py-0.5 text-md sm:text-lg/5 gap-x-1.5">{`Module ${order}`}</span>
    </div>
    <div className="flex flex-col p-5">
      {chapters.map(({ title, order }) => (
        <Chapter key={title} title={title} order={order} />
      ))}
    </div>
  </div>
);

Module.displayName = "Module";
