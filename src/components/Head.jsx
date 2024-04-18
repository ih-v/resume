import s from "./Head.module.scss";
import { MdAlternateEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsGithub, BsBrowserChrome } from "react-icons/bs";

const Head = ({ fullName, position, photo, contacts }) => {
  return (
    <section className={s["section"]}>
      <div className={s["text"]}>
        <div className={s["text__headers"]}>
          <div className={s["text__headers__name"]}>{fullName}</div>
          <div className={s["text__headers__position"]}>{position}</div>
          <div className={s["text__headers__underline"]} />
        </div>
        <div className={s["text__contacts"]}>
          {contacts?.email && (
            <div>
              <MdAlternateEmail />
              <div>{contacts.email}</div>
            </div>
          )}
          {contacts?.tel && (
            <div>
              <MdPhone />
              <div>{contacts.tel}</div>
            </div>
          )}
          {contacts?.address && (
            <div>
              <MdLocationOn />
              <div>{contacts.address}</div>
            </div>
          )}
          {contacts?.gitHub && (
            <div>
              <BsGithub />
              <a href={contacts.gitHub}>{contacts.gitHub}</a>
            </div>
          )}
          {contacts?.site && (
            <div>
              <BsBrowserChrome />
              <a href={contacts.site}>{contacts.site}</a>
            </div>
          )}
        </div>
      </div>
      <div className={s["photo-container"]}>
        <img src={photo} />
      </div>
    </section>
  );
};

export default Head;
