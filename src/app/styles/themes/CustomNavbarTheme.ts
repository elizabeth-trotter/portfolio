import { CustomFlowbiteTheme } from "flowbite-react";

export const customNavbarTheme: CustomFlowbiteTheme["navbar"] = 
{
    "collapse": {
      "base": "w-full 2xs:block 2xs:w-auto",
      "list": "mt-4 flex flex-col 2xs:mt-0 2xs:flex-row space-x-8 3xl:text-lg 4xl:text-xl md:text-sm 2xs:font-medium",
      "hidden": {
        "on": "hidden",
        "off": ""
      }
    },
    "link": {
      "base": "block py-2 pl-3 pr-4 2xs:p-0",
      "active": {
        "on": "bg-cyan-700 text-white dark:text-white 2xs:bg-transparent 2xs:text-cyan-700",
        "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 2xs:border-0 2xs:hover:bg-transparent 2xs:hover:text-cyan-700 2xs:dark:hover:bg-transparent 2xs:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 2xs:hidden",
      "icon": "h-6 w-6 shrink-0"
    }
  };