type propsType = {
  primaryColorClassName: string;
  currentPrimaryColor: string;
  color: string;
  setPrimaryColor: (primaryColorClassName: string) => void;
}

export default function ThemePrimaryColor({
  primaryColorClassName,
  currentPrimaryColor,
  color,
  setPrimaryColor,
}: propsType) {
  return (
    <>
      <span
        style={{
          background: `${color}`,
        }}
        className={`${primaryColorClassName} w-8 h-8 ${
          currentPrimaryColor === primaryColorClassName
            ? "border-4 border-white"
            : ""
        } rounded-full cursor-pointer`}
        onClick={() => setPrimaryColor(primaryColorClassName)}></span>
    </>
  )
}
