type propsType = {
  themeSize: string;
  currentFontSize: string;
  setFontSize: (themeSize: string) => void;
};
export default function ThemeFontSize({
  themeSize,
  setFontSize,
  currentFontSize,
}: propsType) {
  return (
    <>
      <span
        className={`${themeSize} w-4 h-4 ${
          currentFontSize === themeSize
            ? "bg-colorPrimary"
            : "bg-colorSecondary"
        } rounded-full cursor-pointer`}
        onClick={() => setFontSize(themeSize)}></span>
    </>
  );
}
