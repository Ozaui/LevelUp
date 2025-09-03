import styles from "../styles/pages/MainPage.module.css";
import Header from "../components/Header";
import MainArea from "../components/MainArea";
import { useState } from "react";

const MainPage = () => {
  const [menuVisible, setmenuVisible] = useState(false);
  return (
    <div
      className={`${styles.MainPage} ${
        menuVisible ? styles.WithSidebar : styles.NoSidebar
      }`}
    >
      <Header menuVisible={menuVisible} setmenuVisible={setmenuVisible} />
      <MainArea />
    </div>
  );
};

export default MainPage;
