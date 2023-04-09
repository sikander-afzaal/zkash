import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/Index";
import Token from "./pages/Token/Index";
import Overview from "./pages/Token/Overview";
import Personal from "./pages/Token/Personal";

const App = () => {
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
