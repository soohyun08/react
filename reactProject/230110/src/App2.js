import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page1/Main";
import Nav from "./page1/Nav";
import NotFoundPage from "./page1/NotFoundPage";
import Sub1 from "./page1/Sub1";
import Sub2 from "./page1/Sub2";
import Sub3 from "./page1/Sub3";
import Sub4 from "./page1/Sub4";

function App2() {
  return (
    <BrowserRouter>
      <>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub2" element={<Sub2 />} />
          <Route path="/sub3" element={<Sub3 />} />
          {/* 잘못된 페이지 연결시 */}
          <Route path="/" element={<Sub4 />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* '*' -> 모든 페이지에서 */}
        </Routes>

        {/* 네비게이션 */}
        <Nav />
      </>
    </BrowserRouter>
  );
}

export default App2;
