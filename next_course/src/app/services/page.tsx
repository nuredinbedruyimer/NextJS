import Link from "next/link";

export default function Services() {
  return (
    <div className=" mt-12 container mx-auto">
      <h1>Consulting Page</h1>
      <p className=" text-md font-bold">
        {" "}
        It is Our
        <Link
          href="/services/development"
          className="text-blue-500 italic mx-2"
        >
          Development
        </Link>{" "}
        Services
      </p>
      <p className=" text-md font-bold">
        {" "}
        It is Our
        <Link href="/services/consulting" className="text-blue-500 italic mx-2">
          Consulting
        </Link>{" "}
        Services
      </p>
    </div>
  );
}
