import type { Metadata } from "next";
import "./globals.css";
import { montserrat, palanquin } from "./fonts";

export const metadata: Metadata = {
  title: "Nike",
  description: "Nike | The World's Most Premium Sporting Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${palanquin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
