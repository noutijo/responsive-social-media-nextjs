import AllMessages from "./messages";
import FriendsRequests from "./requests";

export default function RightSide() {
  return (
    <>
      <div className="h-max sticky top-[-18rem] bottom-0 hidden md:block">

        <AllMessages/>
        <FriendsRequests/>

      </div>
    </>
  );
}
