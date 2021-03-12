import s from'./Layout.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
    const bg = urlBg ? {backgroundImage : `url(${urlBg})`} : {backgroundColor : colorBg};
    return (
    <section className={s.root} style={bg}>
        <div className={s.wrapper}>
            <article>
                <div className={s.title}>
                    <h3>{title}</h3>
                    <span className={s.separator}></span>
                </div>
                <div className={s.descr + ' ' + s.full}>
                    <p>{descr}</p>
                </div>
            </article>
        </div>
    </section>)
  };
  
  export default Layout