import PrincipalLayout from "@components/layouts/PrincipalLayout"
import ThemeSettings from "@components/theme"
import Head from "next/head"

export default function Theme() {
  return (
    <>

      <Head>
        <title>Theme</title>
        <meta name="description" content="Generated by create next app" />
      </Head>    

      <ThemeSettings />
      
      </>
  )
}

Theme.Layout = PrincipalLayout