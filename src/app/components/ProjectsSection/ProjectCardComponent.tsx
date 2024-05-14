import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { customCardTheme } from "@/app/styles/themes/CustomCardTheme";
import { getTextLogoColor } from "@/app/utils/LogoColorSwitch";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { HiOutlineExternalLink } from "react-icons/hi";

// import CarouselComponent from "./CarouselComponent";
export default function ProjectCardComponent(props: ProjectCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imgSrc, setImgSrc] = useState<string>(props.image);

  useEffect(() => {
    const handleResize = () => {
      const newImgSrc = window.innerWidth < 480 ? props.imageMobile : props.image;
      setImgSrc(newImgSrc);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [props.image, props.imageMobile]);

  return (
    <motion.div whileInView={{ scale: 1.05 }} whileHover={{ scale: 1.1 }} className="flex flex-col items-center justify-center gap-2 3xl:gap-3">
      <Card theme={customCardTheme} className={`min-w-sm`} imgSrc={imgSrc}>
        <div className="flex justify-between items-center">
          <p className="font-josefin-sans text-xl 3xl:text-2xl 4xl:text-3xl font-semibold text-gray-900 dark:text-white">
            {props.title}
          </p>
          <Link href={props.github} target='_blank' aria-label="GitHub Icon Link" className="hidden 2xs:inline">
            <FontAwesomeIcon icon={faGithubSquare} className='text-black dark:text-slate-400 pt-2 sm:pt-0 text-3xl 3xl:text-4xl 4xl:text-5xl hover:text-slate-600 dark:hover:text-slate-300' />
          </Link>
        </div>
        <p className="text-balance 3xl:text-lg 4xl:text-xl font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <p className="font-semibold dark:font-medium 3xl:text-lg 4xl:text-xl">Built with:</p>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="grid grid-cols-3 grid-rows-2 3xs:grid-rows-1 3xs:grid-cols-6 gap-4">
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
                <Icon className={`${index < 3 ? '-mb-5' : ''} 3xs:mb-0 h-7 w-7 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10 ${getTextLogoColor(props.iconNames[index])} dark:text-white`} />
                {hoveredIndex === index && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white rounded-md p-2 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                    {props.iconNames[index]}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col items-center 3xs:flex-row 3xs:items-baseline">
            <div className="px-4 rounded sm:hover:border sm:hover:shadow-md flex gap-1 pt-6 sm:pt-0 sm:hidden">
              <Link className="dark:font-light" href={props.site} target="_blank">View Repo</Link>
              <HiOutlineExternalLink className="h-4 w-4 pt-1" />
            </div>
            <p className="hidden 3xs:inline">|</p>
            <div className="px-4 rounded sm:hover:border sm:hover:shadow-md flex gap-1 pt-2 3xs:pt-6 sm:pt-0">
              <Link className="dark:font-light" href={props.site} target="_blank">View Site</Link>
              <HiOutlineExternalLink className="h-4 w-4 pt-1" />
            </div>
          </div>

        </div>
      </Card>

    </motion.div>
  );
}
