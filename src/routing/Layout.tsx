import { GridItem } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <GridItem area="nav"> */}
      <NavBar />
      {/* </GridItem> */}
      <Outlet />
    </>
  );
};

export default Layout;
