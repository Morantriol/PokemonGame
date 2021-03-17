import cn from 'classnames';
import s from "./style.module.css";

const Navbar = ({ isActive, onClickMenuButton }) => {
    const HandleClickMenuButton = () => {
        onClickMenuButton && onClickMenuButton();
    };
  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a 
        href="/#"
        onClick={HandleClickMenuButton}
        className={cn(s.menuButton, { [s.active]:isActive})}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;