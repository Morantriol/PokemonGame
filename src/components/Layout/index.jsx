import cn from 'classnames';
import s from "./Layout.module.css";

const Layout = ({ title, urlBg, colorBg, children }) => {
  const style = {};
  if (urlBg) {
    style.backgroundImage = `url(${urlBg})`;
  }
  if (colorBg) {
    style.backgroundColor = colorBg;
  }
  return (
    <section className={s.root} style={style}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.descr, s.full)}>
          {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
