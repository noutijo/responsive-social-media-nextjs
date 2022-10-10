import Image from "next/image";
import { storiesData } from "@data/data";
import FeedItem from "./FeedItem";

export default function Feeds() {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-4 mt-4 bg-colorWhite p-[0.6rem_1rem] rounded-2xl">
        <div className="rounded-full overflow-hidden flex">
          <Image
            width={36}
            height={36}
            src="/images/me.jpeg"
            alt="Oreol Profile"
          />
        </div>
        <input
          className="w-full bg-transparent outline-none text-colorDark placeholder:text-colorGray text-sm"
          type="text"
          placeholder="What's your nind, Oreol?"
          id="create-post"
        />
        <input
          type="submit"
          className="bg-colorPrimary text-white px-6 py-3 rounded-full cursor-pointer font-medium transition duration-30 ease-out inline-block text-sm"
          value="Post"
        />
      </div>

      <div className="mt-4">
        <FeedItem />
      </div>
    </>
  );
}
