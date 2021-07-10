import { Component } from 'react';
// import { connect } from 'react-redux';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
// import Filter from './Filter/Filter';
import styles from './App.module.css';
// import shortid from 'shortid';

class App extends Component {
  render() {
    // const { filter } = this.state;
    return (
      <div className={styles.conteiner}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form />
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
