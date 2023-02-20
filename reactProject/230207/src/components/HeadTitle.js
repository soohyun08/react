function HeadTitle({ title = "무제", description = "", children }) {
  // title = "" 값이 없을 때를 대비해서 미리 설정
  return (
    <>
      <header>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <main>{children}</main>
      {/* {children} 상위 모두 가져 옴 */}
    </>
  );
}

export default HeadTitle;
