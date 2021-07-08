import { createStore } from 'redux';
import shortid from 'shortid';

const initialState = {
  contacts: {
    items: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  const items = state.contacts.items;
  // const { name, number, id } = items;

  switch (type) {
    case 'contact/ADD_CONTACT':
      return [payload, ...items];

    case 'contact/DELETE_CONTACT':
      return items.filter(item => item.id !== payload);

    case 'contact/FILTER_CONTACT':
      return {};

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
