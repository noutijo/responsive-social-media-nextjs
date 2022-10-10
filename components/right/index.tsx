import AllMessages from "./messages";
import FriendsRequests from "./requests";

export default function RightSide() {
  return (
    <>
      <div className="h-max stycky top-[-18rem] b-0 hidden md:block">

        <AllMessages/>
        <FriendsRequests/>

      </div>
    </>
  );
}
