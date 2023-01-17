import { Routes, Route } from "react-router-dom";
import Home from "./page1/Home";
import About from "./page1/About";
import Product from "./page1/Product";
import Service from "./page1/Service";
import Nav from "./page1/Nav";
import NotFoundPage from "./page1/NotFoundPage";

function App1() {
  return (
    <>
      <Nav />

      {/* 화면에 보이는 영역 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App1;
