const Languages = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
};

export default Languages;
