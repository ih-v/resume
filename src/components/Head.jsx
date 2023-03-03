const Head = ({ fullName, position, photo }) => {
  return (
    <div>
      <div>{fullName}</div>
      <div>{position}</div>
      <div>{photo}</div>
    </div>
  );
};

export default Head;
