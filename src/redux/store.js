import { createStore } from 'redux';
import shortid from 'shortid';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const reducer = (state = initialState, action) => {
  const items = state.contacts.items;
  const { name, number, id } = items;

  switch (action.type) {
    case 'contact/ADD_CONTACT':
      const item = { name, number, id: shortid.generate() };

      return { contacts: [...items, item] };

    case 'contact/DELETE_CONTACT':
      return { items: items.filter(item => item.id !== id) };

    case 'contact/FILTER_CONTACT':
      return {};

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
