import type { Metadata } from "next";
import "./globals.css";
import Sider from "./components/sider/sider";
import Search from "./components/search/Search";
import Play from "./components/play/Play";
import { Suspense } from "react";



export const metadata: Metadata = {
  title: "Project 5",
  description: "Đây là dự án nghe nhạc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#292929]">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-[280px]">
              <Sider/>
            </div>
            <div className="flex-1 ml-[20px]">
              <Suspense>
                <Search/>
              </Suspense>
              <main className="mb-[120px] mt-[30px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <div className="">
          <Play/>
        </div>
      </body>
    </html>
  );
}
