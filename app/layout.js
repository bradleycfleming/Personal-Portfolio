import { Geist, Geist_Mono, Roboto } from "next/font/google";
import { Lato } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights if needed
});


export const metadata = {
  title: "Bradley Fleming",
  description:
    "Bradley Fleming's portfolio website built with Next.js 14 and Tailwind CSS.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
    other: [
      {
        rel: "icon",
        url: "/icon.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="emerald" lang="en" className="scroll-smooth">
      <body className={lato.className}> 
        {children}
      </body>
    </html>
  );
}
