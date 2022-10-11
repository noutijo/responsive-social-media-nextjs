import axios from "axios";
import { useEffect, useState } from "react";
import NotificationItem from "./NotificationItem";
import NotificationsSkeleton from "./NotificationsSkeleton";

export default function AllNotifications() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let reqOptions = {
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "GET",
    };

    setLoading(true);
    let data = await axios.request(reqOptions);
    setLoading(false);
    console.log(data);
  };

  return (
    <>
      <div className="w-full">
        <h2 className="text-md font-medium">All notifications</h2>

        <div className="bg-colorWhite rounded-2xl p-4 mt-2">
          {loading ? (
            <NotificationsSkeleton />
          ) : (
            <>
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
            </>
          )}
        </div>
      </div>
    </>
  );
}
