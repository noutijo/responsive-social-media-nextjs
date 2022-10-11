import { useEffect, useState } from "react";

export default function ThemeBackgroundColor({
  class_name,
  color,
  themeName
}: {
  class_name: string;
  color: string;
  themeName: string;
}) {
  const [currentBgColor, setCurrentBgColor] = useState<string>("");

  //change font size theme
  const setBgColor = () => {
    localStorage.bgColor = class_name;
    document.documentElement.classList.remove(currentBgColor.toString());
    document.documentElement.classList.add(class_name);

    setCurrentBgColor(class_name);
  };

  useEffect(() => {
    setCurrentBgColor(localStorage.bgColor);
  });
  return (
    <>
      <div
        style={{
          background: `${color}`,
        }}
        className={`${class_name} flex p-4 items-center font-medium rounded-lg cursor-pointer${
          currentBgColor === class_name ? "border-2 bg-colorPrimary" : ""
        } cursor-pointer`}
        onClick={setBgColor}>
        <span className="w-8 h-8 border-colorGray border-2 rounded-full mr-4"></span>
        <h5 className="text-colorGray">{themeName} </h5>
      </div>
    </>
  );
}
