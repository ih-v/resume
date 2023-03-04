import s from "./Section.module.scss";

const Section = ({ name, type, children }) => {
  const getChildrenClass = () => {
    switch (type) {
      case "longText":
        return s["section__children__text-long"];
      case "rowText":
        return s["section__children__text-row"];
      case "rowBordered":
        return s["section__children__bordered-row"];
      case "columnBlock":
        return s["section__children__block-column"];
      default:
        return "";
    }
  };

  return (
    <section className={s["section"]}>
      <h3 className={s["section__name"]}>{name}</h3>
      <div className={`${s["section__children"]} ${getChildrenClass()}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
