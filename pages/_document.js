import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth font-sans">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      
    //init font size
    let localFontSize = localStorage.fontSize

    if (localFontSize) {
        document.documentElement.classList.add(localFontSize)
    }
    else {
      localStorage.fontSize ='font-size-3'
      document.documentElement.classList.add('font-size-3')
    }

     
    //init primary color theme
    let localColorPrimary = localStorage.colorPrimary

    if (localColorPrimary) {
        document.documentElement.classList.add(localColorPrimary)
    }
    else {
      localStorage.colorPrimary ='primary-color-3'
      document.documentElement.classList.add('primary-color-3')
    }

    //init bg theme
    let localBgColor = localStorage.bgColor

    if (localBgColor) {
        document.documentElement.classList.add(localBgColor)
    }
    else {
      localStorage.bgColor ='bg-color-1'
      document.documentElement.classList.add('bg-color-1')
    }
       
            `,
          }}></script>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <body className="w-screen h-screen overflow-x-hidden select-none text-colorDark dark:text-colorDark_DM bg-colorLight dark:bg-colorLight_DM font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
