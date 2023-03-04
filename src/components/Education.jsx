import Section from "./Section";

const Education = ({ items }) => {
  return (
    <Section name="Education" type="columnBlock">
      {items.map((item, i) => {
        return (
          <div key={i}>
            <div>
              <div>{item.title}</div>
              <div>{item.period}</div>
            </div>
            <div>{item.position}</div>
            <div>{item.description}</div>
          </div>
        );
      })}
    </Section>
  );
};

export default Education;
