import styles from "../styles/components/Header.module.css";
import logo from "../assets/Logo.png";
import Badge from "@mui/material/Badge";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLocateOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);
  return (
    <>
      {!menuVisible && (
        <button
          className={styles.visiblityButton}
          onClick={() => setmenuVisible(true)}
          aria-pressed={menuVisible}
          aria-label="Open menu"
          title="Open menu"
        >
          {" "}
          <IoIosMenu size={24} />
        </button>
      )}

      {menuVisible && (
        <header>
          {/* Logo */}
          <img
            className={styles.logo}
            src={logo}
            alt="LevelUp! Logo"
            title="LevelUp!"
          />
          <button
            className={styles.menuCloseButton}
            onClick={() => setmenuVisible(false)}
            aria-label="Close menu"
            title="Close menu"
          >
            <IoIosMenu size={20} />
          </button>

          {/* Main Page Button */}
          <button title="Main Page">
            <Badge
              className={styles.icon}
              badgeContent={1}
              color="primary"
              variant="dot"
            >
              <IoHomeOutline size={24} />
            </Badge>
          </button>

          {/* Search Button */}
          <button title="Search">
            <IoSearch className={styles.icon} size={24} />
          </button>

          {/* Notification Button */}
          <button title="Notification">
            <Badge
              className={styles.icon}
              badgeContent={1}
              color="primary"
              variant="dot"
            >
              <IoNotificationsOutline size={24} />
            </Badge>
          </button>

          {/* Create Post Button */}
          <button title="Write a New Post">
            <IoLocateOutline className={styles.icon} size={24} />
          </button>

          {/* Frineds Button */}
          <button title="Frinends">
            <IoPeopleOutline className={styles.icon} size={24} />
          </button>

          {/* Game Review  Button */}
          <button title="Write a New Game Review">
            <IoGameControllerOutline className={styles.icon} size={24} />
          </button>

          {/* Profile  Button */}
          <button title="Profile">
            <IoPersonOutline className={styles.icon} size={24} />
          </button>

          {/* Setting   Button */}
          <button title="Settings">
            <IoSettingsOutline className={styles.icon} size={24} />
          </button>
        </header>
      )}
    </>
  );
};

export default Header;
