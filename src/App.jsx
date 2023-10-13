import "./App.css";
import contacts from "./contacts.json";
import {useState} from "react"

function App() {
  const initContacts = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(initContacts);


  const SortAsc = () => {
   
  contacts.sort((a,b) => b.popularity - a.popularity)
}
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
      <button onClick={()=>addContact()} >Add Random Contact</button>
      <button onClick={()=> SortAsc()}>Sort by Popularity</button>
      <button >Sort by Name</button>

      <table> 
      <thead> 
      <th>
          Index
        </th>
        <th>
          Picture
        </th>
        <th>
          Name
        </th>
        <th>
          Popularity
        </th>
        <th>
        won Oscar
        </th>
        <th>
        won Emmy
        </th>
      </thead>
      <tbody>
      {contactList.map((contact,index) => (
    
        <tr key={index}>
        <td>{index+1}</td>
        <td><img className="contactImage" src={contact.pictureUrl} alt={contact.name}/></td>
        <td>{contact.name}</td>
          <td>{(contact.popularity).toFixed(2)}</td>
         {contact.wonOscar? <td>🏆</td>:<td></td>}
          {contact.wonEmmy? <td>🌟 </td>:<td></td>}
          
          
        </tr> 
        ))}
      
      </tbody>

      </table>
    </div>
  );
}

export default App;
