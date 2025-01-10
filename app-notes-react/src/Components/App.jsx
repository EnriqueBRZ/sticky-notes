import React from "react";
import Header from "./Header";
import Create from "./Create";
import Note from "./Note";
import Footer from "./Footer";


function App() {
  return (
    <div className="layout">
      <Header />
      <Create />
      <div className="layout__notes">
        <Note />   
      </div>
      <Footer />
    </div>
  );
}

export default App;
