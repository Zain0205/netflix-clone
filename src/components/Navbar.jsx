import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center w-full font-bold p-4 z-[100] absolute md:p-8">
      {/* <h1 className="text-red-600 text-4xl cursor-pointer">NETFLIX</h1> */}
      <div className="w-40 cursor-pointer">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" />
      </div>
      <div>
        <Link to="/login">
          <button className="text-white px-4 cursor-pointer mr-1 py-2 rounded md:px-6">SingIn</button>
        </Link>
        <Link to="/register">
          <button className="bg-red-600 text-white px-4 py-2 r cursor-pointer ounded md:px-6">SingUp</button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
