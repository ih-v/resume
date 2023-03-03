import s from "./Head.module.scss";

const Head = ({ fullName, position, photo }) => {
  console.log(photo);
  return (
    <section className="heading-section zone--header">
      <div className="cvc-wrapp cvc-section block--headinfo">
        <div className="cvc-head-section cvc-content">
          <div className="text-holder">
            <h2 className="h1 cvc-element cvc-text-elem cvc-data js-fullname editor cvc-placeholder -realdata-">
              <span className="realdata ql-container">
                <div className="ql-editor">
                  <p>{fullName}</p>
                </div>
              </span>
            </h2>
            <div className="cvc-head-item">
              <h2 className="h2 cvc-element cvc-text-elem cvc-data js-position editor cvc-placeholder -realdata-">
                <span className="realdata ql-container">
                  <div className="ql-editor">
                    <p>{position}</p>
                  </div>
                </span>
              </h2>
            </div>
          </div>
          <div className="cropper">
            <div className="cropper-container">
              <div className="img-holder">
                <div className="cvc-img-box cropp-img-box">
                  <img className="image" src={photo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
