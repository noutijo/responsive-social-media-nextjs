export default function NotificationsSkeleton() {
  return (
    <>
      {/** generate notifications skeletons */}
      {["", "", "", "", "", "", ""].map((_, __) => (
        <div key={__} className="bg-colorWhite rounded-md p-4 w-full mx-auto">
          <div className="animate-pulse flex space-x-4 items-center">
            <div className="rounded-full bg-colorLight h-10 w-10"></div>
            <div className="flex-1 space-y-4 ">
              <div className="h-2 bg-colorLight rounded"></div>
              <div className="space-y-3">
                <div className="h-2 bg-colorLight rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
