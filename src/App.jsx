import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/Index";
import Token from "./pages/Token/Index";
import Overview from "./pages/Token/Overview";
import Personal from "./pages/Token/Personal";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Token />} path="/token">
          <Route element={<Overview />} path="" />
          <Route element={<Personal />} path="personal" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
