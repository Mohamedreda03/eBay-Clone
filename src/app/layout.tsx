import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const metadata: Metadata = {
  title: "eBay Clone",
  description: "eBay Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
