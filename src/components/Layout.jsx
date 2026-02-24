import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site-root">
      <main className="page-main">
        <Outlet />
      </main>
    </div>
  );
}
