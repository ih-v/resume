const KeyProjects = ({ items }) => {
  return (
    <div>
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
    </div>
  );
};

export default KeyProjects;
