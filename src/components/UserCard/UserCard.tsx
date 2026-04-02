import type { FC } from "react";
import React from "react";
import type { IUser } from "../../api/usersApi";
import Dropdown from "../ui-kit/Dropdown/Dropdown";
import styles from "./UserCard.module.scss";
import { useUIStore } from "../../state/uiStore";
import { useUserStore } from "../../state/userStore";
import { useNavigate } from "react-router";

interface IUserCardProps extends IUser {
  isArchived?: boolean;
}

const UserCard: FC<IUserCardProps> = ({
  id,
  imgUrl,
  username,
  company,
  city,
  isArchived,
}) => {
  const { archiveUser, unarchiveUser, createInvisibleUser } = useUserStore();
  const { isDropdownOpen, onClickDropdown } = useUIStore();

  const navigate = useNavigate();
  const relocateToEditPage = (id: number) => {
    navigate(`/edit/${id}`);
    onClickDropdown(null);
  };

  const dropdownOptions = !isArchived
    ? [
        { label: "Редактировать", method: relocateToEditPage },
        { label: "Архивировать", method: archiveUser },
        { label: "Скрыть", method: createInvisibleUser },
      ]
    : [{ label: "Активировать", method: unarchiveUser }];

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClickOnPoints = () => {
    onClickDropdown(id);
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.root} ${isArchived ? `${styles.filter}` : ""}`}>
      <img className={styles.img} src={imgUrl} alt="User" />
      <div className={styles.info}>
        <div className={styles.mainInfo}>
          <div className={styles.loginWrapper}>
            <span className={styles.login}>{username}</span>
            <button type="button">
              <svg
                onClick={() => onClickOnPoints()}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_11_6806)">
                  <path
                    d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
                    fill="#161616"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_6806">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <span className={styles.company}>{company}</span>
        </div>
        <span className={styles.city}>{city}</span>
      </div>
      <Dropdown
        options={dropdownOptions}
        isOpen={isDropdownOpen === id}
        id={id}
      />
    </div>
  );
};

export default UserCard;
