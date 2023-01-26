import "./section3.scss";

function Section3({ start, scrolled }) {
  const position = scrolled - start || 0;

  return (
    <section className="section3 secBox">
      <h3 style={{ left: 100 + position / 3 }}>section3</h3>
      <p style={{ left: -100 + position / 2 }}>box</p>
    </section>
  );
}

export default Section3;
