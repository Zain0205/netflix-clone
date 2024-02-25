
function Navbar() {
  return (
    <header className="flex justify-between items-center w-full font-bold p-4 z-[100] absolute md:p-8">
      <h1 className="text-red-600 text-4xl cursor-pointer">NETFLIX</h1>
      <div>
        <button className="text-white px-4 cursor-pointer py-2 rounded md:px-6">SingIn</button>
        <button className="bg-red-600 text-white px-4 py-2 r cursor-pointer ounded md:px-6">SingUp</button>
      </div>
    </header>
  )
}

export default Navbar
