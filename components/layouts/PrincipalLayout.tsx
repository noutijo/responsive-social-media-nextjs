import Aside from "@components/aside"
import RightSide from "@components/right"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative mt-8">
        <div className="grid grid-cols-[1fr] md:grid-cols-[8vw_auto_27vw] lg:grid-cols-[17vw_auto_20vw] w-[92vw] gap-4 lg:w-[80vw] m-auto">
          <Aside />
          {children}
          <RightSide />
        </div>
      </main>
    </>
  );
}