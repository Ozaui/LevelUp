import style from "../styles/components/MainArea.module.css";
import NewPost from "./mainArea/NewPost";

const MainArea = () => {
  return (
    <div className={style.MainArea}>
      <NewPost />
    </div>
  );
};

export default MainArea;
