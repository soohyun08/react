import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./page1/Main";
import Sub1 from "./page1/Sub1";
import Sub2 from "./page1/Sub2";
import Sub3 from "./page1/Sub3";
import Sub4 from "./page1/Sub4";

function App1() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">a링크</a>
            </li>
            <li>
              <Link to="/">main</Link>
            </li>
            <li>
              {/* a태그와 비슷하게 링크를 걸어주나 새로고침 없이 컴포넌트만 바꿔줌 */}
              <Link to="/sub1">sub1</Link>
            </li>
            <li>
              <Link to="sub2">sub2</Link>
            </li>
            <li>
              <Link to="sub3">sub3</Link>
            </li>
            <li>
              <Link to="/sub4">sub4</Link>
            </li>
          </ul>
        </nav>

        {/* 화면에 보이는 영역 */}
        <Routes>
          {/* <Route path="경로" element={<보여주고 싶은 컴포넌트>} /> */}
          {/* 루트상대경로 기반 */}
          <Route path="/" element={<Main />} />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub4" element={<Sub4 />} />

          {/* 상대경로 기반 -> 루트상대경로 읽어줌 */}
          <Route path="sub2" element={<Sub2 />} />
          <Route path="sub3" element={<Sub3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App1;
