import ThemeFontSize from "./ThemeFontSize"
import ThemePrimaryColor from "./ThemePrimaryColor"
import ThemeBackgroundColor from "./ThemeBackgroundColor";

export default function ThemeSettings() {
  return (
    <>
      <div className="w-full">
        <div className="bg-colorWhite rounded-2xl p-8">
          <h2 className="text-xl font-bold">Customize you view</h2>
          <p className="text-colorGray mt-2">
            Manage your fontsize, color, and background
          </p>

          <div className="mt-8">
            <h4 className="text-sm font-medium">Font size</h4>
            <div className="flex justify-between items-center bg-colorLight rounded-2xl p-4 mt-1">
              <h6 className="text-xs">Aa</h6>
              <div className="bg-colorSecondary h-1 w-full mx-1 flex justify-between items-center">
                {/** display all custom sizes */}
                {fontSizes.map((themeSize, __) => (
                  <ThemeFontSize key={__} themeSize={themeSize} />
                ))}
              </div>
              <h3 className="text-lg">Aa</h3>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium">Color</h4>
            <div className="bg-colorLight p-4 mt-1 flex items-center justify-between rounded-2xl">
              {/** display all custom primary colors */}
              {primaryColorsTheme.map((item, __) => (
                <ThemePrimaryColor
                  key={__}
                  class_name={item.class_name}
                  color={item.color}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium">Background</h4>
            <div className="flex flex-col md:flex-row items-center justify-between mt-1">
              {/** display all custom bg colors */}
              {bgColorsTheme.map((item, __) => (
                <ThemeBackgroundColor
                  key={__}
                  class_name={item.class_name}
                  color={item.color}
                  themeName={item.themeName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// font size theme
const fontSizes =[
                  "font-size-1",
                  "font-size-2",
                  "font-size-3",
                  "font-size-4",
                  "font-size-5",
                ]

// primary colors theme
const primaryColorsTheme =[
                 {
                    class_name:"primary-color-1",
                    color:"hsl(252, 75%, 60%)"
                 },
                 {
                    class_name:"primary-color-2",
                    color:"hsl(52, 75%, 60%)"
                 },
                 {
                    class_name:"primary-color-3",
                    color:"hsl(352, 75%, 60%)"
                 },
                 {
                    class_name:"primary-color-4",
                    color:"hsl(152, 75%, 60%)"
                 },
                 {
                    class_name:"primary-color-5",
                    color:"hsl(202, 75%, 60%)"
                 },
                ]

// bg colors theme
const bgColorsTheme =[
                 {
                    class_name:"bg-color-1",
                    color:"white",
                    themeName:"Light"
                 },
                 {
                    class_name:"bg-color-2",
                    color:"hsl(252, 30%, 17%)",
                    themeName:"Dim"
                 },
                 {
                    class_name:"bg-color-3",
                    color:"hsl(252, 30%, 10%)",
                    themeName:"Light Out"
                 },
                ]

    