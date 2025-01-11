import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';

function Create(props) {
    const [newNote, setNote] = useState({
        title:"",
        content:""
    })

    const data = new Date().toLocaleString()

    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
                data,
            };
        });
    }

    return (
        <form className="layout__create">
            {isExpanded && 
            <input 
            onChange={handleChange} 
            className="create__title" 
            type="text" 
            name="title" 
            placeholder="Title"
            value={newNote.title}/>}
            <textarea 
            onClick={() => setExpanded(true)}
            onChange={handleChange} 
            className="create__content" 
            name="content" 
            rows={isExpanded ? "5" : "1"} 
            placeholder="Take a note..." 
            value={newNote.content}/>
            <Zoom in={isExpanded}>
                <button onClick={(event) => {
                    props.onAdd(newNote);
                    setNote({
                        title:"",
                        content:"",
                    });
                    event.preventDefault();
                }} className="create__submit">+</button>
            </Zoom>
        </form>
    );
}

export default Create;