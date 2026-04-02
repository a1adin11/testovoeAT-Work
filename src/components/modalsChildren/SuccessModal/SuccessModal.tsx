import styles from "./SuccessModal.module.scss";

import checkedBox from "../../../assets/img/icons/Checked-box.svg";

const SuccessModal = () => {
  return (
    <div className={styles.root}>
      <img src={checkedBox} alt="успешно" />
      <p>Изменения сохранены!</p>
    </div>
  );
};

export default SuccessModal;
