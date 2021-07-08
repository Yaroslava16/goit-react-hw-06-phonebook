import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../Contacts/Contacts.module.css';
import { deleteContact } from '../../redux/actions';

const Contacts = ({ contacts }) => (
  <>
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.itemContact} key={id}>
          <span>
            {name}: {number}
          </span>
          <button className={styles.btn} onClick={deleteContact}>
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

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return { onDelete: () => dispatch(deleteContact()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
