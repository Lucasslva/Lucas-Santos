import { useEffect, useState } from "react";
import { Moon, Sun } from "phosphor-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <Sun weight="fill" size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-gray-800" />
      )}
    </button>
  );
}
