import './App.css';
import React, {useState} from 'react';


function App() {

  const [items, setItems] = useState([
    { name: "Do washing", isPriority: false },
    { name: "Go shopping", isPriority:  false },
    { name: "Sleep", isPriority: true }
  ])

  const [newItem, setNewItem] = useState("item state")
  


  const itemNodes = items.map((item, index) => { 
    return(
        <li key={index} className={item.isComplete ? "completed" : "not-completed"}>
          
        <span>{item.name}</span>
        </li> 
    )
})

const handleItemInput = (event) =>{
  setNewItem(event.target.value)
}

const handleItemInput2 = (event) =>{
  setNewItem(event.target.value)
}

const saveNewItem = ((event) =>{
  event.preventDefault()
  const copyItem = [...items]
  copyItem.push({name: newItem, isPriority: false})
  setItems(copyItem)
  setNewItem("")
})


  return (
    <div className="App">

    <h1>Todo List</h1>
    <hr></hr>
    <form onSubmit={saveNewItem}>
      <label htmlFor="new-item">Add a new item:</label>   
      <input id="new-item" type="text" onChange ={handleItemInput} value={newItem}/>  
                  

            
      <input type="submit" value="Save New Item" />       
    </form>
    <ul>
   {itemNodes}
    </ul>



  </div>
  );
}

export default App;
