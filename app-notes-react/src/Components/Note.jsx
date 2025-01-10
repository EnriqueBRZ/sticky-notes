import React from "react";

function Note() {
    const data = new Date().toLocaleString();

    return (
        <article className="notes__note">
            <div className="notes__note--head">
                <h2>Title</h2>
                <button>Del</button>
            </div>

            <p>Content</p>
            <time>{data}</time>

        </article>
    );
}

export default Note;