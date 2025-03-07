import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peperuney",
  description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time",
  openGraph: {
    title: "Peperuney",
    description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time",
    images: [
      {
        url: "/meta-tag.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
