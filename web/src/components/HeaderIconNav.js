import "./HeaderIconNav.scss";

function HeaderIconNav() {
  return (
    <div className="HeaderIconNavStyle">
      <ul>
        <li className="mainTitle">
          <a href="#">메인페이지</a>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <a href="#">
            회사소개
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </a>
        </li>
        <li className="bold">
          <a href="#">회사소개</a>
        </li>
        <li>
          <a href="#">&middot; 회사소개 스타일1</a>
        </li>
        <li>
          <a href="#">&middot; 회사소개 스타일2</a>
        </li>
        <li>
          <a href="#">&middot; 회사소개 스타일3</a>
        </li>
        <li className="bold">
          <a href="#">회사비전</a>
        </li>
        <li>
          <a href="#">&middot; 회사비전 스타일1</a>
        </li>
        <li>
          <a href="#">&middot; 회사비전 스타일2</a>
        </li>
        <li>
          <a href="#">&middot; 회사비전 스타일3</a>
        </li>
        <li className="bold">
          <a href="#">회사연혁</a>
        </li>
        <li className="bold">
          <a href="#">조직소개</a>
        </li>
        <li className="bold">
          <a href="#">오시는길</a>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <a href="#">
            제품서비스
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </a>
        </li>
        <li className="bold">
          <a href="#">서비스소개</a>
        </li>
        <li>
          <a href="#">&middot; 서비스소개 스타일1</a>
        </li>
        <li>
          <a href="#">&middot; 서비스소개 스타일2</a>
        </li>
        <li>
          <a href="#">&middot; 서비스소개 스타일3</a>
        </li>
        <li className="bold">
          <a href="#">제품안내</a>
        </li>
        <li>
          <a href="#">&middot; 제품안내 스타일1</a>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <a href="#">
            갤러리
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </a>
        </li>
        <li className="bold">
          <a href="#"> 갤러리 스타일1</a>
        </li>
        <li className="bold">
          <a href="#"> 갤러리 스타일2</a>
        </li>
        <li className="bold">
          <a href="#"> 갤러리 스타일3</a>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <a href="#">
            고객센터
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </a>
        </li>
        <li className="bold">
          <a href="#">집꾸미기</a>
        </li>
        <li className="bold">
          <a href="#">인테리어 트랜드</a>
        </li>
        <li className="bold">
          <a href="#">자주묻는 질문</a>
        </li>
        <li className="bold">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderIconNav;
