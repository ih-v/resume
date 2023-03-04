import Section from "./Section";

const WorkExperience = ({ items }) => {
  return (
    <Section name="Work Experience" type="columnBlock">
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

export default WorkExperience;
