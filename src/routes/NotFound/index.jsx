import {useHistory} from 'react-router-dom';

import s from "./style.module.css";

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <div className={s.gameBlock}>ERROR 404</div>
      <button className={s.gameBtn} onClick={handleClick}>Return on Home Page</button>
    </>
  );
};

export default NotFound;