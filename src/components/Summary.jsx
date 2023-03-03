const Summary = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

export default Summary;
