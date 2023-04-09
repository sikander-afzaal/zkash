import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/Index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};

export default App;
