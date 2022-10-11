import { useEffect, useState } from "react";

export default function ThemePrimaryColor({
  class_name,
  color,
}: {
  class_name: string;
  color: string;
}) {
  const [currentPrimaryColor, setCurrentPrimaryColor] = useState<string>("");

  //change font size theme
  const setPrimaryColor = () => {
    localStorage.colorPrimary = class_name;
    document.documentElement.classList.remove(currentPrimaryColor.toString());
    document.documentElement.classList.add(class_name);

    setCurrentPrimaryColor(class_name);
  };

  useEffect(() => {
    setCurrentPrimaryColor(localStorage.colorPrimary);
  });
  return (
    <>
      <span
        style={{
          background: `${color}`,
        }}
        className={`${class_name} w-8 h-8 ${
          currentPrimaryColor === class_name ? "border-4 bg-white" : ""
        } rounded-full cursor-pointer`}
        onClick={setPrimaryColor}></span>
    </>
  );
}
