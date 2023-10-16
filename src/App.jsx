import "./App.css";
import contacts from "./contacts.json";
import {useState} from "react"

function App() {
  const initContacts = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(initContacts);

 
  const deleteContact = (contactId) => {
    const filteredContacts = contactList.filter((contact) => contact.id !== contactId);
    setContactList(filteredContacts);
  };

  const SortPop = () => {
    const sortedContacts = [...contactList];
    sortedContacts.sort((a,b) => b.popularity - a.popularity)
    setContactList(sortedContacts);
}

const SortName = () => {
  const sortedName = [...contactList];
  sortedName.sort((a,b) =>a.name.localeCompare(b.name))
  setContactList(sortedName);

}

// const addContact = () => {
//   const remainingContacts = contacts.filter(contact => !contactList.includes(contact));

//   if (remainingContacts.length >= 5) {
//     const newContacts = [];
//     for (let i = 0; i < 5; i++) {
//       // Ensure the random contact is not already in newContacts
//       let randomContact;
//       do {
//         randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
//       } while (newContacts.includes(randomContact));

//       newContacts.push(randomContact);
//     }
//     setContactList(prevContacts => [...prevContacts, ...newContacts]);
//   }
// };

  const addContact = () => {
    const remainingContacts = contacts.filter(contact => !contactList.includes(contact));

    if (remainingContacts.length >=5 ) {
      const newContacts = [];
      for (let i = 0; i < 5; i++) {
      const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      newContacts.push(randomContact);
      }
      setContactList(newContacts);
    }

  

  };
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="buttons">
      <button onClick={()=>addContact()} >Add Random Contact</button>
      <button onClick={()=> SortPop()}>Sort by Popularity</button>
      <button onClick={()=> SortName()}>Sort by Name</button>
      </div>
      <table className="styled-table"> 
      <thead> 
      <tr>
      <th>Index</th>
        <th> Picture</th>
        <th> Name </th>
        <th>Popularity</th>
        <th>won Oscar</th>
        <th> won Emmy</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {contactList.map((contact,index) => (
    
        <tr key={index} className="active-row">
        <td>{index+1}</td>
        <td><img className="contactImage" src={contact.pictureUrl} alt={contact.name}/></td>
        <td>{contact.name}</td>
          <td>{(contact.popularity).toFixed(2)}</td>
         {contact.wonOscar? <td>🏆</td>:<td></td>}
          {contact.wonEmmy? <td>🌟 </td>:<td></td>}
          
          <td><button style={{background:"#009879"}} onClick={() => deleteContact(contact.id)}>Delete</button></td>
          
        </tr> 
        ))}
      
      </tbody>

      </table>
    </div>
  );
}

export default App;
