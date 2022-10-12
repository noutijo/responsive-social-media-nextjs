import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

const items = [
  {
    name: "Delete",
    href: "/",
    icon: "bi-trash3",
  },
  {
    name: "Report",
    href: "/",
    icon: "bi-flag",
  },
];

export default function NotificationPoPover() {
  return (
    <div>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="outline-none">
              <i className="bi bi-three-dots"></i>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute right-[-5px] z-[100] mt-0 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-300 ring-opacity-[0.5]">
                  <div className="relative flex flex-col gap-1 bg-colorWhite p-3">
                    {items.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className="flex items-center rounded-lg cursor-pointer py-2 px-2 transition duration-150 ease-in-out hover:bg-colorLight dark:hover:bg-colorLight_DM outline-none">
                          <div className="flex items-center justify-center text-colorGrayLight sm:h-6 sm:w-6">
                            <i className={`bi text-md ${item.icon}`}></i>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-colorGrayLight">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
