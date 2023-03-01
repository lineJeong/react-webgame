import styles from "./UsersList.module.css";
import Card from "../UI/Card";

function UsersList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
