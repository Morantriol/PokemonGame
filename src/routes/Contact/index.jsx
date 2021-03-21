import { useHistory } from "react-router-dom";

import s from "./style.module.css";

const ContactPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div className={s.gameBlock}>This is CONTACT Page!</div>
      <button className={s.gameBtn} onClick={handleClick}>
        Return on Home Page
      </button>
    </>
  );
};

export default ContactPage;
