import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
} from '../phonebook/phonebook-types';

const addContact = createAction(ADD_CONTACT, data => ({
  payload: {
    ...data,
    id: shortid.generate(),
  },
}));

const deleteContact = createAction(DELETE_CONTACT);

const filter = createAction(FILTER_CONTACT);

export { addContact, deleteContact, filter };
