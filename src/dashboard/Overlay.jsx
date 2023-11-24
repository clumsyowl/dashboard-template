import React from "react";
import { useDashboardContext } from "./Provider";

function Overlay() {
  const { closeSidebar, sidebarOpen } = useDashboardContext();
  return (
    <div
      onClick={closeSidebar}
      className={
        sidebarOpen
          ? "fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40 lg:bg-transparent"
          : ""
      }
    />
  );
}

export default Overlay;
