const Summary = ({ items }) => {
  return (
    <section className="section">
      <div>
        <h2>
          <span>
            <em>Summary</em>
          </span>
        </h2>
        <div>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
