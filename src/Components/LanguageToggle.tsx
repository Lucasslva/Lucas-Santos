import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useLanguage } from "../contexts/Language";
import { GlobeHemisphereWest } from "phosphor-react";

export default function LanguageToggle() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none cursor-pointer flex items-center gap-1 p-2 rounded-md bg-white dark:bg-gray-800 transition-colors duration-200 shadow-md">
        <GlobeHemisphereWest size={18} className="text-black dark:text-white" />
        <span className="text-sm text-black dark:text-white uppercase">{lang}</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="bg-white dark:bg-gray-700 rounded-md shadow-lg p-2 mt-2"
        sideOffset={5}
        align="end"
      >
        <DropdownMenu.Item
          onSelect={() => changeLanguage("pt")}
          className={`cursor-pointer px-4 py-2 text-sm text-lime-400 hover:bg-lime-100 dark:hover:bg-gray-600 rounded-md focus:outline-none ${
            lang === "pt" ? "font-semibold" : ""
          }`}
        >
          Português
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => changeLanguage("en")}
          className={`cursor-pointer px-4 py-2 text-sm text-blue-500 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-md focus:outline-none ${
            lang === "en" ? "font-semibold" : ""
          }`}
        >
          English
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => changeLanguage("es")}
          className={`cursor-pointer px-4 py-2 text-sm text-yellow-400 hover:bg-yellow-100 dark:hover:bg-gray-600 rounded-md focus:outline-none ${
            lang === "es" ? "font-semibold" : ""
          }`}
        >
          Español
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
