const Courses = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.company}</div>
            <div>{item.name}</div>
            <div>{item.period}</div>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
