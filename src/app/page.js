import style from "./page.module.css";
import { Iframe } from "./components/Iframe";
import { ResponContainer } from "./components/ResponContainer";
import { Study } from "./components/Study";


const Home = () => {
  return (
    <div className={style.hg}>
      <div className={style.box}>
        <h1 className={style.title}>
          {/* Supercharge your<br/> cybersecurity career */}
          Расширьте возможности<br/> своей карьеры <br/>в сфере кибербезопасности
        </h1>

        <button className={style.button} type="button">
          <a
            target="_blank"
            href="https://discord.gg/cyberinfo"
            class={style.join_community}
            rel="noreferrer"
          >
            Присоединяйтесь к нашему сообществу
          </a>
        </button>
        <ResponContainer/>
        <Iframe src="https://cybermap.kaspersky.com/en/widget/dynamic/light"/>
        <Study/>
      
      </div>
    </div>
  );
};

export default Home;
