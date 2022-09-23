import { Route, Routes } from "react-router-dom";
import { Main, SignIn } from "./pages";

const Router = () => {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path="/" element={<SignIn />} />
      <Route path="main/*" element={<Main.Main />}>
        <Route index element={<Main.Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
