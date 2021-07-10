import { combineReducers } from 'redux';
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './phonebook-types';
import shortid from 'shortid';

const contactsInitialState = [
  { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
  { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
  { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

const сontactsReduser = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case DELETE_CONTACT:
      return state.filter(item => item.id !== payload);

    case ADD_CONTACT:
      return [payload, ...state];

    default:
      return state;
  }
};

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

const phonebookReduser = combineReducers({
  contacts: сontactsReduser,
  filter: filterReduser,
});

export default phonebookReduser;
