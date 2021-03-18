import cn from "classnames";
import s from "./style.module.css";

const Navbar = ({ isOpen, bgActive = false, onClickHamburg }) => {
  return (
    <nav
      className={cn(
        {
          [s.bgActive]: bgActive,
        },
        s.root
      )}
    >
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          className={cn(s.menuButton, {
            [s.active]: isOpen,
          })}
          onClick={onClickHamburg}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
