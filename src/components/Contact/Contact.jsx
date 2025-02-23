import styles from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <p className={styles.icons}>
          <IoPersonSharp />
          {name}
        </p>
        <p className={styles.icons}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
