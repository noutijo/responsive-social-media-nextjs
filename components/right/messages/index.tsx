import MessageItem from "./MessageItem"
import { messagesData } from "@data/data"

export default function AllMessages() {
  return (
    <>
      <div className="bg-colorWhite rounded-2xl p-4 ring-1 ring-gray-200/10">
        <div className="flex justify-between items-center text-md font-bold">
          <h4>Messages</h4>
          <i className="bi bi-pencil-square"></i>
        </div>

        <div className="flex bg-colorLight rounded-full p-3 text-colorGray my-4">
          <i className="bi bi-search"></i>
          <input
            className="outline-none bg-transparent w-full ml-4 text-colorDark placeholder:text-colorGray text-sm"
            type="search"
            placeholder="Search Messages"
          />
        </div>

        <div className="flex justify-between text-xs items-center my-4 h-8 font-bold">
          <h6 className="w-full text-center border-b-4 pb-2 cursor-pointer active-message-tab">
            Primary
          </h6>
          <h6 className="w-full text-center border-b-4 border-colorLight pb-2 cursor-pointer ">
            General
          </h6>
          <h6 className="w-full text-center border-b-4 border-colorLight pb-2 cursor-pointer text-colorPrimary">
            Requests(3)
          </h6>
        </div>

        {/** get all messages and display*/}
        {messagesData.map((item, __) => (
          <MessageItem key={__} data={item} />
        ))}
      </div>
    </>
  );
}
