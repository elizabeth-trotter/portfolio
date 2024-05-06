'use client';

// External imports
import { Card } from "flowbite-react";

// Internal imports
import { customCardTheme } from "@/app/styles/themes/CustomCardTheme";
import { RiJavascriptFill, SiCsharp } from "@/app/icons";

export default function ProjectCardComponent() {
  return (
    <Card theme={customCardTheme} className="max-w-sm" imgSrc="./Proptrac.png" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Project Title
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, porro eaque! Eos voluptatem quasi et omnis aperiam porro sequi laborum unde perspiciatis eum! Officiis nostrum hic adipisci dolor provident quia!
      </p>
      <div className="flex gap-2">
        <RiJavascriptFill />
        <SiCsharp />
      </div>
    </Card>
  );
}