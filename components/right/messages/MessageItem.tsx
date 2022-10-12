import Image from "next/image"
import { messageType } from "@/types/types"

export default function MessageItem({ data }: { data: messageType }) {
  const {user, message}=data
  return (
    <>
      <div className="flex gap-4 items-center mb-4 last:mb-0">
        <div className="relative">
          <div className="rounded-full overflow-hidden flex">
            <Image
              width={35}
              height={35}
              placeholder="blur"
              blurDataURL={`/images/${user.profile_img}`}
              src={`/images/${user.profile_img}`}
              alt={`${user.name} profile`}
            />
          </div>
          <div className={`${user.connected ? "active-user" : ""}`}></div>
        </div>
        <div className="w-full">
          <h5 className="text-sm font-medium">{user.name}</h5>
          <p
            className={`${
              message.new ? "text-colorPrimary font-bold" : "text-colorGray"
            } text-xs line-clamp-1`}>
            {message.content}
          </p>
        </div>
      </div>
    </>
  );
}
