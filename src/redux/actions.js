export const addContact = value => {
  return {
    type: 'contact/ADD_CONTACT',
    payload: value,
  };
};

export const deleteContact = value => {
  return {
    type: 'contact/DELETE_CONTACT',
    payload: value,
  };
};

export const filter = value => {
  return {
    type: 'contact/FILTER_CONTACT',
    payload: value,
  };
};
