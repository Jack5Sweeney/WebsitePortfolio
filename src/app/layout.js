import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar"; // ✅ adjust the path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jack Sweeney | Portfolio",
  description: "Portfolio showcasing technical projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <NavBar /> {/* ✅ Always visible on every route */}
        <main className="pt-20 px-4">{children}</main> {/* pt-20 offsets the fixed navbar */}
      </body>
    </html>
  );
}
