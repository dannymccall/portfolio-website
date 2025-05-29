"use client";

import Sidebar from "../ui/Sidebar";
import { SidebarProvider } from "../context/SidebarContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </div>
    </SidebarProvider>
  );
}
