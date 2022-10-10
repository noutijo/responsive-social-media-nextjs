import Image from "next/image";
import { menuItemsData } from "@data/data"
import AsideBarItem from "./AsideItem"

export default function Aside() {
  return (
    <>
      <aside className="h-max sticky top-8">
        <div className="p-4 flex bg-colorWhite rounded-2xl items-center gap-4 w-full">
          <div className="rounded-full aspect-[1/1] overflow-hidden">
            <Image width={40} height={40} src="/images/me.jpeg" alt="" />
          </div>
          <div className="handle">
            <h3 className="text-md font-medium">Oreol Noumodong</h3>
            <p className="text-colorGray text-sm">@oreol</p>
          </div>
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

        <div className="mt-4 w-full text-center bg-colorPrimary text-white px-6 py-3 rounded-full cursor-pointer font-medium transition duration-30 ease-out inline-block text-sm">
          <label className="cursor-pointer" htmlFor="create-post">
            Create Post
          </label>
        </div>
      </aside>
    </>
  );
}