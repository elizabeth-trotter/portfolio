'use client';

// External imports
import { Card } from "flowbite-react";

// Internal imports
import { customCardTheme } from "@/app/styles/themes/CustomCardTheme";
import { getTextLogoColor } from "@/app/utils/LogoColorSwitch";
import CarouselComponent from "./CarouselComponent";

export default function ProjectCardComponent(props: ProjectCardProps) {
  let textColorClass = getTextLogoColor(props.title);

  return (
    <Card theme={customCardTheme} className={`min-w-sm`} imgSrc={props.image}>
      {/* <img src="./Proptrac.png" alt={props.title} className={`w-full ${props.grayscale ? 'grayscale' : ''}`} /> */}

      {/* <CarouselComponent /> */}
      <h5 className=" font-josefin-sans text-xl font-semibold text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <div className="flex gap-2">
        {props.icons.map((Icon, index) => (
          <Icon key={index} className={`h-7 w-7 ${textColorClass} dark:text-white`} />
        ))}
      </div>
    </Card>
  );
}