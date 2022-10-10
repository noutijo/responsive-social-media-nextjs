import { storiesData } from "@data/data";
import Image from "next/image";

export default function FeedItem() {
  return (
    <div className="bg-colorWhite rounded-2xl p-4 my-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden flex">
            <Image
              width={30}
              height={30}
              src="/images/me.jpeg"
              alt="Oreol Profile"
            />
          </div>
          <div className="info-user">
            <h3 className="text-sm">Dika Rose</h3>
            <small className="text-colorGray text-xs">
              USA, 12 minutes ago
            </small>
          </div>
        </div>
        <span className="edit">
          <i className="bi bi-three-dots"></i>
        </span>
      </div>
      {/**feeds */}
      <div className="rounded-2xl overflow-hidden my-3 w-full">
        <img src="./images/feed-1.jpg" alt="feed image" />
      </div>

      <div className="flex justify-between items-center m-2 text-lg">
        <div className="flex items-center gap-4">
          <span>
            <i className="bi bi-heart"></i>
          </span>
          <span>
            <i className="bi bi-chat-dots"></i>
          </span>
          <span>
            <i className="bi bi-share"></i>
          </span>
        </div>
        <div className="bookmark">
          <i className="bi bi-bookmark"></i>
        </div>
      </div>

      <div className="flex">
        {/** profiles */}
        {["profile-12.jpg", "profile-10.jpg", "profile-11.jpg"].map(
          (item, __) => (
            <span key={__} className="rounded-full w-6 h-6 overflow-hidden border-2 border-colorWhite flex -ml-3 first:ml-0">
              <Image width={18} height={18} src={`/images/${item}`} alt={item} />
            </span>
          )
        )}
        <p className="ml-2">
          Liked by <b>Tykio Blache</b> and <b>122 orthers</b>
        </p>
      </div>

      <div className="text-sm">
        <p>
          <b>Franky Levy</b> dolor sit amet consectetur adipisicing{" "}
          <span className="hash-tag">#coding</span>.
        </p>
      </div>
      <div className="text-sm mt-2 text-colorGray">View all 345 commments</div>
    </div>
  );
}
