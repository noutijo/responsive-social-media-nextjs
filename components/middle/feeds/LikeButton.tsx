import React, { useState } from "react"

export default function LikeButton() {
const [isLiked, setLiked] = useState<boolean>(false)

  return (
    <>
      <div
        className="flex items-center heart"
        onClick={() => setLiked(!isLiked)}>
        <label className="-ml-[18px]">
          <div
            className={`like-btn-svg ${isLiked ? "animate-like" : ""} `}></div>
        </label>
      </div>
    </>
  )
}
