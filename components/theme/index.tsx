import ThemeFontSize from "./ThemeFontSize"
import ThemePrimaryColor from "./ThemePrimaryColor"
import ThemeBackgroundColor from "./ThemeBackgroundColor"
import { useEffect, useState } from "react"
import { fontSizes, primaryColorsTheme, bgColorsTheme } from "utilities/theme"

export default function ThemeSettings() {
  const [currentFontSize, setCurrentFontSize] = useState<string>("")
  const [currentBgColor, setCurrentBgColor] = useState<string>("")
  const [currentPrimaryColor, setCurrentPrimaryColor] = useState<string>("")

  //change font size theme
  const setFontSize = (themeSize: string) => {
    localStorage.fontSize = themeSize
    document.documentElement.classList.remove(currentFontSize.toString())
    document.documentElement.classList.add(themeSize)
    setCurrentFontSize(themeSize)
  }

  //change font size theme
  const setBgColor = (bgClassName: string) => {
    localStorage.bgColor = bgClassName
    document.documentElement.classList.remove(currentBgColor.toString())
    document.documentElement.classList.add(bgClassName)
    setCurrentBgColor(bgClassName)
  }

  //change font size theme
  const setPrimaryColor = (primaryColorClassName: string) => {
    localStorage.colorPrimary = primaryColorClassName
    document.documentElement.classList.remove(currentPrimaryColor.toString())
    document.documentElement.classList.add(primaryColorClassName)
    setCurrentPrimaryColor(primaryColorClassName)
  }

  useEffect(() => {
    setCurrentFontSize(localStorage.fontSize)
    setCurrentBgColor(localStorage.bgColor)
    setCurrentPrimaryColor(localStorage.colorPrimary)
  }, [])

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
                  <ThemeFontSize
                    key={__}
                    currentFontSize={currentFontSize}
                    setFontSize={setFontSize}
                    themeSize={themeSize}
                  />
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
                  primaryColorClassName={item.primaryColorClassName}
                  currentPrimaryColor={currentPrimaryColor}
                  setPrimaryColor={setPrimaryColor}
                  color={item.color}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium">Background</h4>
            <div className="flex flex-wrap items-center mt-1 gap-4">
              {/** display all custom bg colors */}
              {bgColorsTheme.map((item, __) => (
                <ThemeBackgroundColor
                  key={__}
                  bgClassName={item.bgClassName}
                  setBgColor={setBgColor}
                  currentBgColor={currentBgColor}
                  color={item.color}
                  themeName={item.themeName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
