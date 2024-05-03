import { CustomFlowbiteTheme } from "flowbite-react";

export const customNavbarTheme: CustomFlowbiteTheme["navbar"] = 
{
    "collapse": {
      "base": "w-full 3xs:block 3xs:w-auto",
      "list": "mt-4 flex flex-col 3xs:mt-0 3xs:flex-row space-x-6 sm:space-x-8 md:text-sm 3xs:font-medium",
      "hidden": {
        "on": "hidden",
        "off": ""
      }
    },
    "link": {
      "base": "block py-2 pl-3 pr-4 3xs:p-0",
      "active": {
        "on": "bg-cyan-700 text-white dark:text-white 3xs:bg-transparent 3xs:text-cyan-700",
        "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 3xs:border-0 3xs:hover:bg-transparent 3xs:hover:text-cyan-700 3xs:dark:hover:bg-transparent 3xs:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 3xs:hidden",
      "icon": "h-6 w-6 shrink-0"
    }
  };