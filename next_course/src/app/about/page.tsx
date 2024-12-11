import Link from "next/link";

export default function About() {
  return (
    <div className=" container mx-auto">
      <h1>About Page</h1>
      <p>
        Let us See Our Intersting{" "}
        <Link
          href="/about/team"
          className=" text-md font-extrabold text-blue-600 italic"
        >
          Team
        </Link>{" "}
      </p>
    </div>
  );
}
