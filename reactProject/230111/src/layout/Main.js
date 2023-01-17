import "../assets/styles/fonts.css"; // 공통 스타일
import styles from "../assets/styles/main.module.css"; // 모듈 스타일
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Main({ children }) {
  return (
    <div className={styles.wrapper}>
      {/* {console.log(children)} App.js의 컴포넌트들 내려받기*/}
      <Nav />
      <div className={`${styles.border} bg`}>{children}</div>
      {/* 여러게 사용 className={`${styles.} :global`} */}
      {/* 여러게 사용 className={`${styles.} ${styles.}`} */}
      <Footer className={styles.footer} />
    </div>
  );
}

export default Main;
