import { Route, Routes } from "react-router-dom";
import { Main, SignIn } from "./pages";

const Router = () => {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path="/" element={<SignIn />} />
      <Route path="main/" element={<Main.Main />}>
        {/* <Route index element={<Main.Home />} /> */}
        <Route path="foodManager/*" element={<Main.FoodManager />} />
        <Route path="analysis/*" element={<Main.NotFound />} />
        <Route path="transportManager/*" element={<Main.TransportManager />} />
      </Route>
    </Routes>
  );
};

export default Router;
