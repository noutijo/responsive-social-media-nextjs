import Image from "next/image";
import { menuItemsData } from "@data/data";
import AsideBarItem from "./AsideItem";
import { useDrawer } from "@hooks/AsideBarHook";

export default function Aside() {
  // get drawer context
  const drawer = useDrawer();

  // display aside bar menu
  const hideAsideBarMenu = () => {
    drawer.setMenuStatus((state) => {
      return !state;
    });
  };

  return (
    <>
      <aside
        className={`fixed h-screen bg-colorLight top-0 p-4 w-[84vw] land sm:landscape:w-[47vw] overflow-y-auto  md:landscape:w-max !left-[-0%] md:left-[0%] animate-showmenu md:animate-none lg:overflow-y-hidden md:w-max md:bg-transparent md:p-0 md:h-max z-[10] md:z-[1] md:sticky md:top-[6.5rem] md:block ${
          drawer.isopen ? "block" : "hidden"
        }`}>
        <div className="p-4 flex bg-colorWhite rounded-2xl items-center gap-4 w-full">
          <div className="rounded-full aspect-[1/1] overflow-hidden">
            <Image width={40} height={40} src="/images/me.jpeg" alt="" />
          </div>
          <div className="md:hidden lg:block">
            <h3 className="text-md font-medium">Oreol Noumodong</h3>
            <p className="text-colorGray text-sm">@oreol</p>
          </div>
          <button
            className="md:hidden   w-[3rem] h-[3rem] absolute top-50 right-6"
            onClick={hideAsideBarMenu}>
            <i className="bi bi-x text-3xl"> </i>
          </button>
        </div>
        <div className="mt-4 bg-colorWhite rounded-2xl">
          {/** get all menu items and display*/}
          {menuItemsData.map((item, __) => (
            <AsideBarItem
              key={__}
              title={item.title}
              iconName={item.iconName}
              notifications={item?.notifications}
              url={item.url}
            />
          ))}
        </div>

        <div className="hidden lg:block mt-4 w-full text-center bg-colorPrimary text-white px-6 py-3 rounded-full cursor-pointer font-medium transition duration-30 ease-out text-sm">
          <label className="cursor-pointer" htmlFor="create-post">
            Create Post
          </label>
        </div>
      </aside>
    </>
  );
}
