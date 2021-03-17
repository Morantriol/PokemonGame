import s from "./style.module.css";

const GamePage = ({onClickButton}) => {
  const handleClick = () => {
    onClickButton && onClickButton("app");
  };
  return (
    <>
      <div className={s.gameBlock}>This is Game Page!</div>
      <button className={s.gameBtn} onClick={handleClick}>Return on Home Page</button>
    </>
  );
};

export default GamePage;
