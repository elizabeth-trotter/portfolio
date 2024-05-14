// External imports
import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Internal imports
import { customCardTheme } from "@/app/styles/themes/CustomCardTheme";
import { getTextLogoColor } from "@/app/utils/LogoColorSwitch";
// import CarouselComponent from "./CarouselComponent";

export default function ProjectCardComponent(props: ProjectCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card theme={customCardTheme} className={`min-w-sm`} imgSrc={props.image}>
      <p className="font-josefin-sans text-xl font-semibold text-gray-900 dark:text-white">
        {props.title}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <p className="font-regular">Built with:</p>
      <div className="flex items-center gap-4">
        {props.icons.map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: -0, x: '50%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Icon className={`h-7 w-7 ${getTextLogoColor(props.iconNames[index])} dark:text-white`} />
            {hoveredIndex === index && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white rounded-md p-2 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                {props.iconNames[index]}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
