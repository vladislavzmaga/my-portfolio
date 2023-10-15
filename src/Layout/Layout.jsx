import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <AppBar />
    </>
  );
};
