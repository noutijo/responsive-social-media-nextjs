import { useEffect, useState } from "react";

export default function ThemeFontSize({ themeSize }: { themeSize: string }) {
  const [currentFontSize, setCurrentFontSize] = useState<string>("");

  //change font size theme
  const setFontSize = () => {
    localStorage.fontSize = themeSize;
    document.documentElement.classList.remove(currentFontSize.toString());
    document.documentElement.classList.add(themeSize);

    setCurrentFontSize(themeSize);
  };

  useEffect(() => {
    setCurrentFontSize(localStorage.fontSize);
  },[]);

  return (
    <>
      <span
        className={`${themeSize} w-4 h-4 ${
          currentFontSize === themeSize
            ? "bg-colorPrimary"
            : "bg-colorSecondary"
        } rounded-full cursor-pointer`}
        onClick={setFontSize}></span>
    </>
  );
}
