import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" flex container mx-auto flex-row justify-between items-center p-4">
      <div className="">
        <h1 className="text-2xl font-extrabold text-orange-700">
          <Link href="/">Logo Here</Link>
        </h1>
      </div>
      <div className="  flex flex-row w-1/3 justify-between">
        <Link href="/about" className=" text-md font-extrabold text-purple-800">
          About
        </Link>
        <Link
          href="/product"
          className=" text-md font-extrabold text-purple-800"
        >
          Product
        </Link>
        <Link
          href="/services"
          className=" text-md font-extrabold text-purple-800"
        >
          Services
        </Link>
        <Link
          href="/profile"
          className=" text-md font-extrabold text-purple-800"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}
