import { storiesData } from "@data/data";

export default function FeedItem() {
  return (
    <div className="bg-colorWhite rounded-2xl p-4">
      <div className="head">
        <div className="user">
          <div className="profile-photo">
            <img src="./images/profile-4.jpg" alt="" />
          </div>
          <div className="info-">
            <h3>Dika Rose</h3>
            <small className="text-muted">USA, 12 MINUTES AGO</small>
          </div>
        </div>
        <span className="edit">
          <i className="bi bi-ellipsis-h"></i>
        </span>
      </div>

      <div className="photo">
        <img src="./images/feed-1.jpg" alt="" />
      </div>

      <div className="action-buttons">
        <div className="interaction-buttons">
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
          <img src="./images/profile-10.jpg" alt="" />
        </span>
        <span>
          <img src="./images/profile-4.jpg" alt="" />
        </span>
        <span>
          <img src="./images/profile-15.jpg" alt="" />
        </span>
        <p>
          Liked by <b>Tykio Blache</b> and <b>122 orthers</b>
        </p>
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
