import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "A complete clone of the airbnb web application.",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
