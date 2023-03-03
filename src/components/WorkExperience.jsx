const WorkExperience = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.title}</div>
            <div>{item.position}</div>
            <div>{item.period}</div>
            <div>{item.description}</div>
          </div>
        );
      })}
    </>
  );
};

export default WorkExperience;
