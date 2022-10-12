import Image from "next/image";
import { notificationType } from "@/types/types";

export default function NotificationItem({ data }: { data: notificationType }) {
  const { name, profile_img, message, date } = data;
  return (
    <>
      <div className="p-4 mt-1">
        <div className="flex gap-2 items-center justify-between">
          <div className="rounded-full overflow-hidden flex">
            <Image
              width={50}
              height={50}
              src={`/images/${profile_img}`}
              alt={`${"profile"}`}
            />
          </div>
          <div className="text-sm w-full">
            <b className="mr-2">{name}</b>
            {message}
            <small className="text-colorGray ml-2">{date} AGO</small>
          </div>
          <span className="edit">
            <i className="bi bi-three-dots"></i>
          </span>
        </div>
      </div>
    </>
  );
}
