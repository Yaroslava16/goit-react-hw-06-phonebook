import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
} from '../phonebook/phonebook-types';
import shortid from 'shortid';

const addContact = data => {
  return {
    type: ADD_CONTACT,
    payload: {
      ...data,
      id: shortid.generate(),
    },
  };
};

const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

const filter = value => {
  return {
    type: FILTER_CONTACT,
    payload: value,
  };
};

export { addContact, deleteContact, filter };
