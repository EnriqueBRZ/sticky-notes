import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

function Note(props) {

    return (
        <article className="notes__note">
            <div className="notes__note--head">
                <h2>{props.title}</h2>
                <button><EditIcon sx={{fontSize:27}} /></button>
            </div>
            <time>{props.date}</time>
            <p>{props.content}</p>
            <button onClick={() => (props.onDelete(props.id))}>
                <DeleteTwoToneIcon sx={{fontSize:27}}/>
            </button>
        </article>
    );
}

export default Note;