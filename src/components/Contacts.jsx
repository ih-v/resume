const Contacts = ({ data }) => {
  return (
    <div>
      <div>{data.email}</div>
      <div>{data.tel}</div>
      <div>{data.address}</div>
    </div>
  );
};

export default Contacts;
