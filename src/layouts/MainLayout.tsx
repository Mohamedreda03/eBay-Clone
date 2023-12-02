"use client";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import SubMenu from "@/components/SubMenu";
import TopMenu from "@/components/TopMenu";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      id="MainLayout"
      className="min-w-[1050px] w-full max-w-[1300px] mx-auto"
    >
      <TopMenu />
      <MainHeader />
      <SubMenu />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
