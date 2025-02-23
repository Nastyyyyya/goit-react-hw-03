import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => onDeleteContact(contact.id)}
          />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
