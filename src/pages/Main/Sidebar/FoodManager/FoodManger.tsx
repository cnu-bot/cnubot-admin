import React, { FC } from "react";
import { Outlet } from "react-router";
import { Routes, Route } from "react-router-dom";
import { FirstStudentHall } from "./FirstStudentHall";
import { NotFound } from "../NotFound";
import { MuiNavbar } from "~/components/Mui/MuiNavbar";
import { Home } from "./Home";
import { Dorm } from "./Dorm";

export const locations = [
  {
    url: "dorm",
    name: "기숙사",
    component: Dorm
  },
  {
    url: "firstStudentHall",
    name: "1학생회관",
    component: FirstStudentHall
  },
  {
    url: "secondStudentHall",
    name: "2학생회관",
    component: NotFound
  },
  {
    url: "thirdStudentHall",
    name: "3학생회관",
    component: NotFound
  },
  {
    url: "fourthStudentHall",
    name: "4학생회관",
    component: NotFound
  },
  {
    url: "lifeScienceStudentHall",
    name: "생활과학대학",
    component: NotFound
  }
];
type pageType = {
  [key: string]: FC;
};

export const pages = {
  dorm: NotFound,
  firstStudentHall: FirstStudentHall,
  secondStudentHall: NotFound,
  thirdStudentHall: NotFound,
  fourthStudentHall: NotFound,
  lifeScienceStudentHall: NotFound
} as pageType;

const FoodManager = () => {
  const InnerPage = locations.map(location => {
    return (
      <Route
        path={location.url}
        element={<location.component />}
        key={location.name}
      />
    );
  });
  // url, component}, key)=><Route path={url} element={component} key={key}></Route>
  return (
    <>
      <MuiNavbar header={locations} />
      <Routes>
        <Route path="/" element={<Home />} />
        {InnerPage}
      </Routes>
      <Outlet />
    </>
  );
};

export default FoodManager;
