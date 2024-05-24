import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elizabeth's Portfolio",
  description: "Discover the work of Elizabeth, a full-stack developer specializing in web development projects. Explore her portfolio showcasing coding expertise and innovative solutions."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Flowbite>
        <body className={inter.className}>
          {children}
        </body>
        <GoogleAnalytics gaId="G-Z1KY9G174R" />
      </Flowbite>
    </html>
  );
}
