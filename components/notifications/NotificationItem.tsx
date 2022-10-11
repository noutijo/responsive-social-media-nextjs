import Image from "next/image";

export default function NotificationItem() {
  return (
    <>
      <div className="p-4 mt-1">
        <div className="flex gap-2 items-center justify-between">
          <div className="rounded-full overflow-hidden flex">
            <Image
              width={35}
              height={35}
              src={`/images/${"profile-12.jpg"}`}
              alt={`${"profile"}`}
            />
          </div>
          <div className="text-sm w-full">
            <b>Youtchom Parfait</b> accepted your friend request et le jour de
            la grande fête mon bro.
            <small className="text-colorGray ml-2">2 DAYS AGO</small>
          </div>
          <span className="edit">
            <i className="bi bi-three-dots"></i>
          </span>
        </div>
      </div>
    </>
  );
}
