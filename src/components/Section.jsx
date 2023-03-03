const Section = (name, renderContent) => {
  return (
    <section className="section">
      <div>
        <h2>
          <span>
            <em>{name}</em>
          </span>
        </h2>
        <div>{renderContent()}</div>
      </div>
    </section>
  );
};

export default Section;
