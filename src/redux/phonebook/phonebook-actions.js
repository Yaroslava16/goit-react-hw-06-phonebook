import shortid from 'shortid';

const addContact = data => {
  return {
    type: 'contact/ADD_CONTACT',
    payload: {
      ...data,
      id: shortid.generate(),
    },
  };
};

const deleteContact = id => {
  return {
    type: 'contact/DELETE_CONTACT',
    payload: id,
  };
};

const filter = value => {
  return {
    type: 'contact/FILTER_CONTACT',
    payload: value,
  };
};

export { addContact, deleteContact, filter };
