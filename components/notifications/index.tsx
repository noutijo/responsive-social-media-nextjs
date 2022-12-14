import axios from "axios"
import { useEffect, useState } from "react"
import { notificationsData } from "@data/data"
import NotificationItem from "./NotificationItem"
import NotificationsSkeleton from "./NotificationsSkeleton"

export default function AllNotifications() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let reqOptions = {
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "GET",
    }
    
    //simulate skeleton
    setLoading(true)
    await axios.request(reqOptions)
    setLoading(false)
  }

  return (
    <>
      <div className="w-full">
        <h2 className="text-md font-medium">All notifications</h2>

        <div className="bg-colorWhite rounded-2xl p-4 mt-2 ring-1 ring-gray-200/10">
          {loading ? (
            <NotificationsSkeleton />
          ) : (
            <>
              {/** get all notifications and display*/}
              {notificationsData.map((item, __) => (
                <NotificationItem key={__} data={item} />
              ))}{" "}
            </>
          )}
        </div>
      </div>
    </>
  )
}
