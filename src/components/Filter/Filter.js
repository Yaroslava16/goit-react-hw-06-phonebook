import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, filterContacts }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={filterContacts}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
