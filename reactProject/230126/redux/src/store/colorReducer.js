// 1. 액션명 생성
// const 액션명 = "파일명(구별명) / 액션명"
const ORANGE = "colorReducer/ORANGE";
const TEAL = "colorReducer/TEAL";
const SALMON = "colorReducer/SALMON";

// 2. 액션 내보내기- 사용할 때
// dispatch(콜백함수); 콜백함수 {type: 값}
export const orange = () => ({ type: ORANGE });
export const teal = () => ({ type: TEAL });
export const salmon = () => ({ type: SALMON });

// 3. 초기값 설정
const initialState = { color: "#ddd" };

// 4. 리듀서 생성. 리듀서 함수(순수함수)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORANGE:
      return { color: "orange" };
    case TEAL:
      return { color: "teal" };
    case SALMON:
      return { color: "salmon" };

    default:
      return state;
  }
};

export default reducer;
