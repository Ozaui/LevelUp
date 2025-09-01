import styles from "../styles/pages/MainPage.module.css";
import Header from "../components/Header";
import { MainArea } from "../components/MainArea";

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
      <MainArea />
    </div>
  );
};

export default MainPage;
