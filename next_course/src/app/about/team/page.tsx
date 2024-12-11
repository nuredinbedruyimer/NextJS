import Link from "next/link";

export default function Team() {
  return (
    <div className=" container mx-auto mt-12">
      <h1 className="text-lg font-bold ">Team Page</h1>
      <p className="text-xl font-bold text-blue-600">
        {" "}
        <Link href="/">Back To Home Page</Link>{" "}
      </p>
    </div>
  );
}
