import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import styles from './App.module.css';
// import shortid from 'shortid';

class App extends Component {
  render() {
    return (
      <div className={styles.conteiner}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form />
        <h2 className={styles.secondTitle}>Contacts</h2>
        <Filter />
        {/* <Contacts contacts={this.getVisibleContacts()} /> */}
        <Contacts />
      </div>
    );
  }
}

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
