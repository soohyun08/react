import { Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import About from "./layout/About";
import Product from "./layout/Product";
import Service from "./layout/Service";
import Board from "./layout/Board";
import NotFoundPage from "./layout/NotFoundPage";
import Main from "./layout/Main";
import UserUtill from "./components/UserUtill";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/board" element={<Board />} />
          <Route path="/" element={<UserUtill />} />
          {/* '*' 모든 경로를 포함하는 페이지 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
