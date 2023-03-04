import Section from "./Section";

const Summary = ({ items }) => {
  return (
    <Section name="Summary" type="longText">
      {items.join(" ")}
    </Section>
  );
};

export default Summary;
