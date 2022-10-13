import { postType } from "@/types/types"
import Image from "next/image"
import { useState } from "react"
import FeedPopover from "./FeedPopover"
import LikeButton from "./LikeButton";

export default function FeedItem({ data }: { data: postType }) {
  const {
    user,
    post_img,
    like_by_profiles,
    like_by_name,
    post_desc,
    total_likes,
    location,
    date,
  } = data

  return (
    <div className="bg-colorWhite rounded-2xl p-4 my-4 first:mt-0 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden flex">
            <Image
              placeholder="blur"
              blurDataURL={`/images/${user.profile_img}`}
              width={30}
              height={30}
              src={`/images/${user.profile_img}`}
              alt={user.profile_img}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium">{user.name}</h3>
            <small className="text-colorGray text-xs">
              {location}, {date} ago
            </small>
          </div>
        </div>
        {/** edit dots */}
        <span className="edit relative">
          <FeedPopover />
        </span>
      </div>
      {/**feeds */}
      <div className="rounded-2xl overflow-hidden my-3 w-full">
        <Image
          placeholder="blur"
          blurDataURL={`/images/${post_img}`}
          width={1000}
          height={620}
          src={`/images/${post_img}`}
          alt={post_img}
          objectFit="cover"
        />
      </div>

      <div className="flex justify-between items-center m-2 text-lg">
        <div className="flex items-center gap-4 h-10">
          {/** Like button */}
          <span className="cursor-pointer w-5">
            <LikeButton />
          </span>
          <span className="cursor-pointer">
            <i className="bi bi-chat-dots"></i>
          </span>
          <span className="cursor-pointer">
            <i className="bi bi-share"></i>
          </span>
        </div>
        <div className="cursor-pointer">
          <i className="bi bi-bookmark"></i>
        </div>
      </div>

      <div className="flex">
        {/** profiles */}
        {like_by_profiles.map((item, __) => (
          <span
            key={__}
            className="rounded-full w-6 h-6 overflow-hidden border-2 border-colorWhite flex -ml-3 first:ml-0">
            <Image width={18} height={18} src={`/images/${item}`} alt={item} />
          </span>
        ))}

        <p className="ml-2 line-clamp-1">
          Liked by <b>{like_by_name}</b> and <b>{total_likes} orthers</b>
        </p>
      </div>

      <div className="text-sm">
        <p className="line-clamp-2">
          <b>{like_by_name}</b> {post_desc}
        </p>
      </div>

      <div className="text-sm mt-2 text-colorGray">View all 345 commments</div>
    </div>
  );
}
