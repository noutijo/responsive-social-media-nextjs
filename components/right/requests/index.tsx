import RequestItem from "./RequestItem";
import { mutualFriendsData } from "@data/data";

export default function FriendsRequests() {
  return (
    <>
      <div className="mt-4">
        <h4 className="font-bold text-colorGray my-4">Requests</h4>

        {/** get all requests and display*/}
        {mutualFriendsData.map((item, __) => (
          <RequestItem key={__} data={item} />
        ))}
      </div>
    </>
  );
}
