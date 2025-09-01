import styles from "../styles/Header.module.css";
import logo from "../assets/Logo.png";
import Badge from "@mui/material/Badge";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLocateOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="LevelUp! Logo" />
      <Badge
        className={styles.icon}
        badgeContent={1}
        color="primary"
        variant="dot"
      >
        <IoHomeOutline size={24} />
      </Badge>

      <IoSearch className={styles.icon} size={24} />

      <Badge
        className={styles.icon}
        badgeContent={1}
        color="primary"
        variant="dot"
      >
        <IoNotificationsOutline size={24} />
      </Badge>

      <IoLocateOutline className={styles.icon} size={24} />
      <IoGameControllerOutline className={styles.icon} size={24} />
      <IoPersonOutline className={styles.icon} size={24} />
      <IoSettingsOutline className={styles.icon} size={24} />
    </div>
  );
};

export default Header;
