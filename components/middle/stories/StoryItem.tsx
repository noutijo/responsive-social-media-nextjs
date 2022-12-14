import Image from "next/image"
import { storyType } from "@/types/types"

export default function StoryItem({ data }: { data: storyType }) {
  const { name, profile_img, story_img } = data

  return (
    <div
      className="p-3 rounded-2xl flex flex-col justify-between items-center text-white text-xs bg-colorDanger relative overflow-hidden story-overlay w-[38%] last:hidden md:last:flex ring-1 ring-gray-200/10"
      style={{
        background: `url(/images/${story_img}) no-repeat center center/cover`,
      }}>
      <div className="rounded-full overflow-hidden flex self-start border-2 border-colorPrimary">
        <Image
          width={30}
          height={30}
          placeholder="blur"
          blurDataURL={`/images/${profile_img}`}
          src={`/images/${profile_img}`}
          alt={`${"profile"}`}
        />
      </div>
      <p className="z-[2] font-medium">{name}</p>
    </div>
  )
}
