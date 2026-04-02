import InfoBlock from "../../components/InfoBlock/InfoBlock";

import { useUserStore } from "../../state/userStore";
import styles from "./UsersPage.module.scss";

const UsersPage = () => {
  const { users, archivedUsersIds, invisibleUsersIds } = useUserStore();

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <InfoBlock
          title="Активные"
          items={users.filter(
            (user) =>
              !archivedUsersIds.includes(user.id) &&
              !invisibleUsersIds.includes(user.id),
          )}
        />
        <InfoBlock
          title="Архив"
          items={users.filter(
            (user) =>
              archivedUsersIds.includes(user.id) &&
              !invisibleUsersIds.includes(user.id),
          )}
        />
      </div>
    </div>
  );
};

export default UsersPage;
