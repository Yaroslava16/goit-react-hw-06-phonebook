import { combineReducers } from 'redux';
import shortid from 'shortid';

const filterInitialState = {
  filter: '',
};

const contactsInitialState = [
  { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
  { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
  { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

const addContactReduser = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case 'contact/ADD_CONTACT':
      return [payload, ...state];

    default:
      return state;
  }
};

const deleteContactsReduser = (
  state = contactsInitialState,
  { type, payload },
) => {
  switch (type) {
    case 'contact/DELETE_CONTACT':
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReduser = (state = filterInitialState, { type }) => {
  switch (type) {
    case 'contact/FILTER_CONTACT':
      return {};

    default:
      return state;
  }
};

const phonebookReduser = combineReducers({
  newContact: addContactReduser,
  contacts: deleteContactsReduser,
  filter: filterReduser,
});

export default phonebookReduser;
