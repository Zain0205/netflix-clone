import { Link } from "react-router-dom";

function SingUp() {
  return (
    <div className="w-full h-screen">
      <img
        className="w-full h-full object-cover hidden md:block"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="bg-black/70 w-full h-screen absolute top-0" />

      <div className="w-full px-12 absolute top-16">
        <div className="w-full bg-black/75 md:px-10 py-20 md:max-w-[450px] h-[600px] mx-auto">
          <h1 className="text-white font-bold text-3xl mb-9 md:text-4xl">SingUp</h1>
          <form className="flex flex-col text-white">
            <input className="p-3 mb-6 bg-gray-700" type="text" placeholder="Email" />
            <input className="p-3 mb-6 bg-gray-700" type="password" placeholder="Password" />
            <button className="bg-red-600 text-white py-3 text-lg font-semibold">SingUp</button>

            <div className="flex justify-between items-center text-gray-600 mt-4">
              <p className="text-sm">
                <input className="mr-2" type="checkbox" />
                Remember Me
              </p>
              <p className="text-sm">Need Help?</p>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Already Subscribe To Netflix?<Link to="/login" className="text-white ml-1">SingIn</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
