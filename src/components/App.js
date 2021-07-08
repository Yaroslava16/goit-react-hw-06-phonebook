import { Component } from 'react';
// import { connect } from 'react-redux';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
// import Filter from './Filter/Filter';
import styles from './App.module.css';
// import shortid from 'shortid';

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // addContact = ({ name, number }) => {
  //   const contact = { name, number, id: shortid.generate() };
  //   this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  // };

  render() {
    // const { filter } = this.state;
    return (
      <div className={styles.conteiner}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form addContact={this.addContact} />
        <h2 className={styles.secondTitle}>Contacts</h2>
        {/* <Filter filter={filter} filterContacts={this.changeFilter} /> */}
        {/* <Contacts contacts={this.getVisibleContacts()} /> */}
        <Contacts />
      </div>
    );
  }
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) => {
  //     return name.toLowerCase().includes(normalizedFilter);
  //   });
}

// filterContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizeFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) => {
//     return name.toLowerCase().includes(normalizeFilter);
//   });
// };

// deleteContact = id => {
//   this.setState(({ contacts }) => ({
//     contacts: contacts.filter(contact => contact.id !== id),
//   }));
// };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

export default App;
