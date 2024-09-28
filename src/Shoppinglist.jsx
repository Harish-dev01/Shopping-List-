import React, { useState } from 'react';
import './index.css';

function Shoppinglist() {
  const [list, setList] = useState([{ id: 1, activity: 'Fruits' }]);
  const [input, setInput] = useState('');

  const handleInput = (evt) => {
    setInput(evt.target.value);
  };

  const handleAdd = () => {
    const newItem = { id: list.length + 1, activity: input }; // Add an object with id and activity
    setList([...list, newItem]);
    setInput('');
  };

  const handleDelete = (removId) => {
    var temparr = list.filter(function(item){
      if(item.id === removId){
        return false
      }
      else{
        return true
      }
    })
    setList(temparr);
  };

  return (
    <div className="shopping-container">
      <h1 className="title">Shopping List</h1>
      <div className="input-container">
        <input
          className="shopping-input"
          type="text"
          placeholder="Enter your list"
          value={input}
          onChange={handleInput}
        />
        <button className="add-button" onClick={handleAdd}>
          ADD
        </button>
      </div>
      <ul className="shopping-list">
        {list.map((item) => (
          <li key={item.id} className="shopping-item">
            {item.activity}{' '}
            <button className="delete-button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shoppinglist;
