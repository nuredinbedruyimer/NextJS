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
      <body>{children}</body>
    </html>
  );
}
