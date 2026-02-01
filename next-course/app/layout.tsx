import type { Metadata } from "next";
import "./globals.css";
import {Inter, Roboto_Mono} from 'next/font/google';

const roboto = Roboto_Mono({ subsets: ['latin']});

export const metadata: Metadata = {
  title: {
    template: '%s | Next Course',
    default: 'Next Course',
  },
  description: "Mastering Next.js Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `
            ${roboto.className} 
            antialiased bg-gray-50 text-lg sm:text-xl`
        }
      >
        {children}
      </body>
    </html>
  );
}
