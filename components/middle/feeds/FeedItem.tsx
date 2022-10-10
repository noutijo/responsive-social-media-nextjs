import { storiesData } from "@data/data";
import Image from "next/image";

export default function FeedItem() {
  return (
    <div className="bg-colorWhite rounded-2xl p-4 my-4">
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

      <div className="flex justify-between items-center m-2">
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

      <div className="liked-by">
        <span>
          <Image
            width={30}
            height={30}
            src="/images/profile-12.jpg"
            alt="Oreol Profile"
          />
        </span>
        <span>
          <Image
            width={30}
            height={30}
            src="/images/profile-10.jpg"
            alt="Oreol Profile"
          />{" "}
        </span>
        <span>
          <Image
            width={30}
            height={30}
            src="/images/profile-10.jpg"
            alt="Oreol Profile"
          />{" "}
        </span>
        
      </div>

      <div className="caption">
        <p>
          <b>Franky Levy</b> dolor sit amet consectetur adipisicing{" "}
          <span className="hash-tag">#coding</span>.
        </p>
      </div>
      <div className="comments text-muted">View all 345 commments</div>
    </div>
  );
}
