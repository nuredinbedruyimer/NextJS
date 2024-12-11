import Link from "next/link";

export default function Consulting() {
  return (
    <div className=" mt-12 container mx-auto">
      <h1>Consulting Page</h1>
      <p className="text-blue-500 text-md font-bold">
        <Link href="/">Back To Home Page</Link>
      </p>
    </div>
  );
}
