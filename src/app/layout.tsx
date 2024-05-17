import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss"
import { AppHeader } from "@/components/Header/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moonshine",
  description: "Welcome to the home of breathable shirts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
        </body>
    </html>
  );
}
