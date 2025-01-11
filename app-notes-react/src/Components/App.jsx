import React, { useState } from "react";
import Header from "./Header";
import Create from "./Create";
import Note from "./Note";
import Footer from "./Footer";


function App() {
  const [items, setItem] = useState([]);

  function addItem(newNote) {
      setItem((prevItems) => {
        return [...prevItems, newNote];
      });
  }

  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }
  
  return (
    <div className="layout">
      <Header />
      <Create onAdd={addItem} />
      <div className="layout__notes">
        {items.map((item, index) => (
          <Note 
          key={index} 
          id={index}
          title={item.title}
          content={item.content}
          date={item.data}
          onDelete={deleteItem}
            /> 
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
