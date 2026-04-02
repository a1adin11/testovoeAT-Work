import { type FC } from "react";

import styles from "./InfoBlock.module.scss";
import type { IUser } from "../../api/usersApi";
import UserCard from "../UserCard/UserCard";
import { useUserStore } from "../../state/userStore";

interface IUserProps {
  title: string;
  items: IUser[];
}

const InfoBlock: FC<IUserProps> = ({ title, items }) => {
  console.log(items);
  const { archivedUsersIds } = useUserStore();

  return (
    <>
      <div className={styles.root}>
        <h1>{title}</h1>
        {items.length > 0 ? (
          <div className={styles.itemsGrid}>
            {items.slice(0, 6).map((user) => (
              <UserCard
                key={user.id}
                isArchived={archivedUsersIds.includes(user.id)}
                {...user}
              />
            ))}
          </div>
        ) : (
          <span className={styles.empty}>Пусто</span>
        )}
      </div>
    </>
  );
};

export default InfoBlock;
