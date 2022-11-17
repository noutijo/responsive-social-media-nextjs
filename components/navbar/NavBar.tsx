import Image from "next/image"
import Link from "next/link"
import { useDrawer } from "@hooks/AsideBarHook"

export default function NavBar() {
  // get drawer contex
  const drawer = useDrawer()

  //handle displaying drawer
  const showAsideBarMenu = () => {
    drawer.setMenuStatus((state) => {
      return !state
    })
  }

  return (
    <>
      <nav className="sticky w-screen bg-colorWhite p-[0.7rem_0] top-0 z-10 ring-1 ring-gray-200/10">
        <div className="w-[92vw] lg:w-[80vw] m-auto flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Image
                width={45}
                height={30}
                src={`/logo.png`}
                alt={`${"logo"}`}
                priority
              />
              <h2 className="font-bold text-xl cursor-pointer hidden lg:block">
                nooutidev
              </h2>
            </div>
          </Link>
          <div className="bg-colorLight rounded-full p-3 hidden md:block ring-1 ring-gray-200/10">
            <i className="bi bi-search text-colorGray"></i>
            <input
              className="outline-none bg-transparent w-[30vw] ml-4 text-colorDark placeholder:text-colorGray text-sm"
              type="search"
              placeholder="Search for Creators, inspirations, and projetcs"
            />
          </div>
          <div className="flex items-center gap-8">
            <label
              className="bg-colorPrimary text-white px-6 py-3 rounded-full cursor-pointer font-medium transition duration-30 ease-out inline-block text-sm"
              htmlFor="create-post">
              Create
            </label>
            {/** button to display aside bar menu */}
            <div
              className="rounded-full overflow-hidden aspect-[1/1]"
              onClick={showAsideBarMenu}>
              <Image
                placeholder="blur"
                blurDataURL={`/images/me.jpeg`}
                width={36}
                height={36}
                src="/images/me.jpeg"
                alt="Oreol Profile"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
