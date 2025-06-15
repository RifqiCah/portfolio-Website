import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";  
import AOSInit from "./components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Personal Website",
  description: "Welcome to my personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}>
        <AOSInit />
        <Navbar />  
        <main className="flex-grow">{children}</main>  
        <Footer className="m-0 p-0" />  
      </body>
    </html>
  );
}