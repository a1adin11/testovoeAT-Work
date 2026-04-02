import styles from "./EditUserPage.module.scss";

import arrowImg from "../../assets/img/icons/Arrow.svg";
import profileImg from "../../assets/img/profileImg.png";
import EditUserForm from "../../components/forms/EditUserForm/EditUserForm";

import { useNavigate } from "react-router";

const EditUserPage = () => {
  const navigate = useNavigate();
  const menuOptions = [
    { label: "Данные профиля", route: "###", isActive: true },
    { label: "Рабочее пространство", route: "###", isActive: false },
    { label: "Приветность", route: "###", isActive: false },
    { label: "Безопасность", route: "###", isActive: false },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.topControl}>
          <div className={styles.prev} onClick={() => navigate("/")}>
            <img src={arrowImg} alt="Назад" />
            <span>Назад</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.profile}>
            <img src={profileImg} alt="" />
            <div className={styles.profileMenu}>
              {menuOptions.map((option) => (
                <div key={option.label} className={styles.optionWrapper}>
                  <span
                    className={
                      option.isActive
                        ? `${styles.option} ${styles.activeOption}`
                        : styles.option
                    }
                  >
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.form}>
            <h2>Данные профиля</h2>
            <EditUserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserPage;
