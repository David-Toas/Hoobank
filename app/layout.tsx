import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Voyatex",
  description: "Assesment Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#010510]"
      >
        {children}
      </body>
    </html>
  );
}
