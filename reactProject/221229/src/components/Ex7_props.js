/* 
    (props)
    컴포넌트에 전달할 정보를 담고 있는 자바스크립트 객체이자 리액트 컴포넌트 속성
    부모 -> 자식 컴포넌트 전달
    객체형으로 속성을 키로 인식

    <자식 컴포넌트 props = 전달값 />
    전달값: {숫자}, '문자', {논리연산}, {state}, {function} ...

    */

// 컴포넌트 생성
// props = {name : '아메리카노'} 객체형태로 받아오기 때문에 객체 방식으로 읽음

const Coffee = (props) => {
  return (
    <>
      <h3>{props.name} 컴포넌트</h3>
    </>
  );
};

// 구조 분해, 비구조할당
const Tea = (props) => {
  const { name } = props;

  return (
    <>
      <h3>{name} 컴포넌트</h3>
    </>
  );
};

// 실제 가장 많이 사용하는 방법
const Drink = ({ name }) => {
  return (
    <>
      <h3>{name} 컴포넌트</h3>
    </>
  );
};

const Ex7_props = () => {
  return (
    <div>
      {/* 자식 컴포넌트 : Coffee Tea Drink */}
      {/* <자식 컴포넌트 속성 = 값 /> */}
      <Coffee name="아메리카노" />
      <Tea name="녹차" />
      <Drink name="탄산수" />
    </div>
  );
};

export default Ex7_props;
