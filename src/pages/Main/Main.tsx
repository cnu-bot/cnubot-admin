import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header, SideBar } from "@components/common";

const Inner = styled.div`
  margin-left: 300px;
`;

const Main = () => {
  return (
    <>
      <SideBar />
      <Header />
      <Inner>
        {/* this is for nested routing */}
        <Outlet />
      </Inner>
    </>
  );
};

export default Main;
