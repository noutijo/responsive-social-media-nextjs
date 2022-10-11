import Image from "next/image";
import NotificationItem from "./NotificationItem";

export default function AllNotifications() {
  return (
    <>
      <div className="w-full">
        <h2 className="text-md font-medium">All notifications</h2>
       <div className="bg-colorWhite rounded-2xl p-4 mt-2">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
      </div>
    </>
  );
}
