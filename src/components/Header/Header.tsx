import { Link } from "react-router";

import styles from "./Header.module.scss";

import logoIcon from "../../assets/img/logo.svg";
import logoText from "../../assets/img/logoText.svg";
import likeIcon from "../../assets/img/icons/like.svg";
import notification from "../../assets/img/icons/notification.svg";
import profileImg from "../../assets/img/profileImg.png";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logoIcon} alt="Logo" />
            <img src={logoText} alt="Company Name" />
          </div>
        </Link>
        <div className={styles.options}>
          <div className={styles.icons}>
            <button type="button" aria-label="поставить лайк">
              <img src={likeIcon} aria-hidden="true" />
            </button>
            <button type="button" aria-label="уведомления">
              <img src={notification} aria-hidden="true" />
            </button>
          </div>
          <div className={styles.user}>
            <img src={profileImg} alt="иконка профиля" />
            <span>Ivan1234</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
