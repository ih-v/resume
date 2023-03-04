import Section from "./Section";

const Languages = ({ items }) => {
  return (
    <Section name="Languages" type="rowText">
      {items.join(", ")}
    </Section>
  );
};

export default Languages;
