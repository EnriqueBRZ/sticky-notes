import React from "react";

function Create() {
    return (
        <form className="layout__create">
            <input className="create__title" type="text" name="title" placeholder="Title"/>
            <textarea className="create__content" name="content" rows="5" placeholder="Take a note..."/>
            <button className="create__submit">+</button>
        </form>
    );
}

export default Create;