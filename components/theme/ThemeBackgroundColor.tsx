type propsType = {
  bgClassName: string;
  currentBgColor: string;
  color: string;
  themeName: string;
  setBgColor: (bgClassName: string) => void;
};

export default function ThemeBackgroundColor({
  bgClassName,
  color,
  themeName,
  setBgColor,
  currentBgColor,
}: propsType) {
  return (
    <>
      <div
        style={{
          background: `${color}`,
        }}
        className={`${bgClassName} flex p-4 items-center font-medium rounded-lg border-2 ${
          currentBgColor === bgClassName
            ? "border-colorPrimary"
            : "border-colorGray"
        } cursor-pointer`}
        onClick={() => setBgColor(bgClassName)}>
        <span className="w-8 h-8 border-colorGray border-2 rounded-full mr-4"></span>
        <h5 className="text-colorGray">{themeName} </h5>
      </div>
    </>
  );
}
