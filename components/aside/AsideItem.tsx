import { menuItemType } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDrawer } from "@hooks/AsideBarHook"

export default function AsideBarItem({
  title,
  iconName,
  url,
  notifications = 0,
}: menuItemType) {
  const [isSelected, SetIsSelected] = useState<string>("init");
  const [totalNotifications, SetIsTotalNotifications] =
    useState<number>(notifications);
  const router = useRouter();

  // get drawer contex
  const drawer = useDrawer();

  //handle displaying drawer
  const showAsideBarMenu = () => {
    drawer.setMenuStatus((state) => {
      return !state;
    });
  };

  useEffect(() => {
    //get current path and add to state as selected menu item
    SetIsSelected(router.pathname.slice(1).toString());
  }, [router.pathname]);

  return (
    <>
      <Link href={url}>
        <a
          className={`flex h-14 transition-all duration-300 ease-out relative items-center cursor-pointer hover:bg-colorLight gap-6 text-md first:rounded-tl-2xl last:rounded-bl-2xl overflow-hidden ${
            url.slice(1) === isSelected ? "active-menu" : ""
          }`}
          onClick={() => {
            showAsideBarMenu();
            SetIsTotalNotifications(0);
          }}>
          <span>
            <i className={`bi ${iconName} text-colorGray ml-8 relative`}>
              {totalNotifications > 0 ? (
                <small className="bg-colorDanger text-white text-xs w-fit rounded-full p-[0.1rem_0.4rem] absolute top-[-0.5rem] right-[-0.7rem]">
                  {totalNotifications > 9 ? "+9" : `${totalNotifications}`}
                </small>
              ) : (
                ""
              )}
            </i>
          </span>
          <h3 className="font-medium md:hidden lg:block">{title}</h3>
        </a>
      </Link>
    </>
  );
}
