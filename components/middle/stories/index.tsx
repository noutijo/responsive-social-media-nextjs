import StoryItem from "./StoryItem"
import { storiesData } from "@data/data"

export default function Stories() {
  return (
    <div className="flex justify-between h-48 w-[92vw] gap-2 md:w-fit">
      {/** get all stories and display*/}
      {storiesData.map((item, __) => (
        <StoryItem key={__} data={item} />
      ))}
    </div>
  )
}
