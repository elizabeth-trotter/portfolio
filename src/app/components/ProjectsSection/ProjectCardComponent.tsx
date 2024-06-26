// External imports
import { useEffect, useRef, useState } from "react";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Internal imports
import { customCardTheme } from "@/app/styles/themes/CustomCardTheme";
import { getTextLogoColor } from "@/app/utils/LogoColorSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { HiOutlineExternalLink } from "@/app/icons";

export default function ProjectCardComponent(props: ProjectCardProps) {
  const [hoveredCard, setHoveredCard] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imgSrc, setImgSrc] = useState<string>(props.image);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const newImgSrc = window.innerWidth <= 480 ? props.imageMobile : props.image;
      setImgSrc(newImgSrc);

      const isMobile = window.innerWidth <= 1024;
      setHoveredCard(isMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHoveredCard(true);
            } else {
              setHoveredCard(false);
            }
          });
        },
        { threshold: 0.6 }
      );

      const card = cardRef.current;
      if (card) {
        observer.observe(card);
      }

      return () => {
        if (card) {
          observer.unobserve(card);
        }
      };
    } else {
      setHoveredCard(true);
    }
  }, [cardRef]);

  return (
    <motion.div initial={{ scale: 0.90 }} whileInView={{ scale: 1 }} whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center gap-2 3xl:gap-3 overflow-hidden"
      ref={cardRef}
    >
      <Card theme={customCardTheme} className={`min-w-sm`}>
        <Link href={props.site} target="_blank" className="block -mt-6 -mx-6">
          <div className="relative">
            <img
              src={imgSrc}
              alt="Preview of application site"
              className="rounded-t-lg w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute rounded-t-lg inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white">
                View live project
              </span>
            </div>
          </div>
        </Link>
        <div className="flex justify-between items-center">
          <p className="font-josefin-sans text-xl 3xl:text-2xl 4xl:text-3xl font-semibold text-gray-900 dark:text-white">
            {props.title}
          </p>
          {/* <Link href={props.github} target='_blank' aria-label="GitHub Icon Link" className="hidden 2xs:inline">
            <FontAwesomeIcon icon={faGithubSquare} className='text-black dark:text-slate-400 pt-2 sm:pt-0 text-3xl 3xl:text-4xl 4xl:text-5xl hover:text-slate-600 dark:hover:text-slate-300' />
          </Link> */}
        </div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: hoveredCard ? 1 : 0, height: hoveredCard ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="3xl:text-lg 4xl:text-xl font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <p className="py-3 font-semibold dark:font-medium 3xl:text-lg 4xl:text-xl">Built with:</p>

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
                    <div className={`absolute z-1 ${window.innerWidth > 640 ? 'left-0' : 'left-1/2 transform -translate-x-1/2'} bottom-full bg-black text-white rounded-md p-2 pointer-events-none transition-opacity duration-300 whitespace-nowrap`}>
                      {props.iconNames[index]}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center 3xs:flex-row 3xs:items-baseline">
              <div className="px-4 rounded sm:hover:border sm:hover:shadow-md flex gap-1 pt-2 3xs:pt-6 sm:pt-0">
                <Link className="font-semibold" href={props.github} target="_blank">Learn more</Link>
                <HiOutlineExternalLink className="h-4 w-4 pt-1" />
              </div>
            </div>

          </div>
        </motion.div>
      </Card>

    </motion.div>
  );
}
