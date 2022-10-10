import Image from "next/image"
import { storyType } from "@/types/types"

export default function StoryItem({ data }: { data: storyType }) {
    const { name, profile_img, story_img } = data

  return (
    <div
      className="p-2 rounded-2xl flex flex-col justify-between items-center text-white text-xs w-full bg-colorDanger relative overflow-hidden story-overlay"
      style={{
        background: `url(/images/${story_img}) no-repeat center center/cover`,
      }}>
      <div className="rounded-full overflow-hidden flex self-start border-2 border-colorPrimary">
        <Image
              width={30}
              height={30}
              src={`/images/${profile_img}`}
              alt={`${"profile"}`}
            />
      </div>
      <p className="z-[2] font-medium">{name}</p>
    </div>
  )
}
