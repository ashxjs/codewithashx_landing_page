import { FunctionComponent } from "react";

type ChapterProps = {
  title: string;
  order: number;
};

export const Chapter: FunctionComponent<ChapterProps> = ({ title, order }) => (
  <div key={title} className="mt-1 flex items-start gap-x-2">
    <span className="border border-blue-700 bg-blue-900/50 h-8 w-8 flex items-center justify-center rounded-md text-md font-semibold md:text-lg">
      {order}
    </span>
    <span className="text-md font-semibold md:text-lg">{title}</span>
  </div>
);

Chapter.displayName = "Chapter";
