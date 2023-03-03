const Education = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.university}</div>
            <div>{item.degree}</div>
            <div>{item.specialty}</div>
            <div>{item.period}</div>
          </div>
        );
      })}
    </>
  );
};

export default Education;
