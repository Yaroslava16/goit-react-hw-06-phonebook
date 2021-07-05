import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Contacts/Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => (
  <>
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.itemContact} key={id}>
          <span>
            {name}: {number}
          </span>
          <button className={styles.btn} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
