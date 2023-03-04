import Section from "./Section";

const Courses = ({ items }) => {
  return (
    <Section name="Courses" type="columnBlock">
      {items.map((item, i) => {
        return (
          <div key={i}>
            <div>
              <div>{item.title}</div>
              <div>{item.period}</div>
            </div>
            <div>{item.description}</div>
          </div>
        );
      })}
    </Section>
  );
};

export default Courses;
