import { Outlet } from "react-router";
import styled from "styled-components";
import { SideBar } from "~/components/common";

const Inner = styled.div`
  margin-left: 150px;
`;

const Main = () => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      {/* <Header /> */}
      <SideBar />
      <Inner>
        {/* this is for nested routing */}
        <Outlet />
      </Inner>
    </>
  );
};

export default Main;
