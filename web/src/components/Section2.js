import styled from "styled-components";
import img1 from "../assets/images/sec2bg.jpg";

const Container = styled.div`
  /* background: url({img1}) no-repeat 50% / cover; */
  border: 1px solid #000;
  width: 70%;
  height: 50vh;
  margin: 0 auto;
  margin-bottom: 100px;
  position: relative;
  z-index: 9;
  section {
    border: 1px solid #ddd;
    width: 65%;
    height: 80%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    .txt {
      position: absolute;
      top: 10vh;
      left: 5vw;
      color: #555;
      line-height: 1.2;
      h2 {
        font-size: 2.2em;
        margin-bottom: 20px;
      }
      p {
        font-size: 1.2em;
        font-weight: 300;
      }
    }
    .btn {
      display: flex;
      position: absolute;
      left: 5vw;
      bottom: 6vh;
      a {
        color: #fff;
        width: 120px;
        height: 40px;
        line-height: 40px;
        border-radius: 7px;
        background-color: #a0937d;
        text-align: center;
        margin-right: 20px;
        &:last-of-type {
          background-color: #3a6351;
        }
      }
    }
  }
`;

function Section2(props) {
  return (
    <Container>
      <section>
        <div className="txt">
          <h2>
            인테리어 케이와 <br />
            함께하는 <strong>좋은 집 프로젝트</strong>
          </h2>
          <p>
            2022년 인테리어 케이와 함께하는
            <br />
            새로운 라이프스타일 트렌드를 만나보세요
          </p>
        </div>
        <div className="btn">
          <a href="#">공유하기</a>
          <a href="#">상담신청</a>
        </div>
      </section>
    </Container>
  );
}

export default Section2;
