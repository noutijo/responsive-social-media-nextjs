import Image from "next/image"
import { notificationType } from "@/types/types"
import NotificationPoPover from "./NotificationPoPover"

export default function NotificationItem({ data }: { data: notificationType }) {
  const { name, profile_img, message, date } = data
  return (
    <>
      <div className="p-4 mt-1">
        <div className="flex gap-2 items-center justify-between">
          <div className="rounded-full overflow-hidden flex">
            <Image
              width={50}
              height={50}
              placeholder="blur"
              blurDataURL={`/images/${profile_img}`}
              src={`/images/${profile_img}`}
              alt={`${name} profile`}
            />
          </div>
          <div className="text-sm w-full ml-2 flex items-center flex-wrap">
          <div className="mr-2">
            <b className="mr-2">{name}</b>
            {message}
          </div>
            <small className="text-colorGray">{date} ago</small>
          </div>
          <span className="edit relative">
            <NotificationPoPover/>
          </span>
        </div>
      </div>
    </>
  )
}
