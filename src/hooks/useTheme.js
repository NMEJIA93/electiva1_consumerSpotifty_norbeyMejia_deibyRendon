import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"

export const useTheme = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleTheme };
};