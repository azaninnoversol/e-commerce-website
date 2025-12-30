import React from "react";

// context-api
import { AppProvider } from "@/context-api/AppContext";

// components
import Topbar from "@/components/Topbar/Topbar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col justify-between">
      <AppProvider>
        <Topbar />
        <Header />
        {children}
        <Footer />
      </AppProvider>
    </div>
  );
}

export default React.memo(Layout);
