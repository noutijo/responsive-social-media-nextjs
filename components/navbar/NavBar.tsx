import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="container">
          <h2 className="logo font-bold">nooutidev</h2>
          <div className="search-bar">
            <i className="uil uil-search"></i>
            <input
              className="outline-none"
              type="search"
              placeholder="Search for Creators, inspirations, and projetcs"
            />
          </div>
          <div className="create">
            <label className="btn btn-primary" htmlFor="create-post">
              Create
            </label>
            <div className="profile-photo">
              <Image
                width={100}
                height={100}
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
