import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReplicateProvider } from "@/lib/client/use-replicate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReplicateProvider>
        <body className={inter.className}>{children}</body>
      </ReplicateProvider>
    </html>
  );
}