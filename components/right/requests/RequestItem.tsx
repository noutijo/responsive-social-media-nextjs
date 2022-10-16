import Image from "next/image"
import { requestType } from "@/types/types"

export default function RequestItem({ data }: { data: requestType }) {
  const { name, profile_img, mutual_friends } = data
  
  return (
    <>
      <div className="bg-colorWhite p-4 rounded-2xl mb-3 ring-1 ring-gray-200/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="rounded-full overflow-hidden flex">
            <Image
              width={35}
              height={35}
              placeholder="blur"
              blurDataURL={`/images/${profile_img}`}
              src={`/images/${profile_img}`}
              alt={`${"profile"}`}
            />
          </div>
          <div>
            <h5 className="text-sm font-medium">{name}</h5>
            <p className="text-colorGray text-xs">
              {mutual_friends} mutual friends
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-colorPrimary text-white px-4 py-3 rounded-full cursor-pointer font-medium transition duration-30 ease-out inline-block text-sm">
            Accept
          </button>
          <button className="bg-colorLight px-4 py-3 rounded-full cursor-pointer font-medium transition duration-30 ease-out text-sm">
            Decline
          </button>
        </div>
      </div>
    </>
  )
}
