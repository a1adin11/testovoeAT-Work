import styles from "./SuccessModal.module.scss";

import checkedBox from "../../../assets/img/icons/Checked-box.svg";
import type { FC } from "react";

const SuccessModal: FC = () => {
  return (
    <div className={styles.root}>
      <img src={checkedBox} alt="успешно" />
      <p>Изменения сохранены!</p>
    </div>
  );
};

export default SuccessModal;
