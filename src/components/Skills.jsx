import Section from "./Section";

const Skills = ({ items }) => {
  return (
    <Section name="Skills" type="rowBordered">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </Section>
  );
};

export default Skills;
