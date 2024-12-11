import Navbar from "../components/Navbar";
import "../styles/tailwind.css";

// app/layout.tsx
export const metadata = {
  title: "I Comming NextJS",
  description: "This is a Next.js 13 app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className=" border-2 border-purple-700">
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
