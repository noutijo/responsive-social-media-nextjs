import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="sticky w-full bg-colorWhite p-[0.7rem_0] top-0 z-10">
        <div className="w-[80%] m-auto flex justify-between items-center">
          <h2 className="font-bold text-md">nooutidev</h2>
          <div className="bg-colorLight rounded-full p-3 hidden md:block">
            <i className="bi bi-search text-colorGray"></i>
            <input
              className="outline-none bg-transparent w-[30vw] ml-4 text-colorDark placeholder:text-colorGray text-sm"
              type="search"
              placeholder="Search for Creators, inspirations, and projetcs"
            />
          </div>
          <div className="flex items-center gap-8">
            <label
              className="bg-colorPrimary text-white px-6 py-3 rounded-full cursor-pointer font-medium transition duration-30 ease-out inline-block text-sm"
              htmlFor="create-post">
              Create
            </label>
            <div className="rounded-full overflow-hidden aspect-[1/1]">
              <Image
                width={36}
                height={36}
                src="/images/me.jpeg"
                alt="Oreol Profile"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
