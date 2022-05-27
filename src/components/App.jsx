import React from "react";
import Todoitem from "./Todoitem"

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteitem(id) {
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {return index!==id})});
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <Todoitem key={index} id={index} name={todoItem}  onChecked={deleteitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
