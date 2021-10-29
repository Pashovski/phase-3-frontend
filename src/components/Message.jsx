import React from "react"

function Message({ message, onUpdateMessage}) {

    const {id, name, likes, text  } = message

    // t.text "text"
    // t.string "date"
    // t.integer "user_id"
    // t.integer "likes"

    function handleLikeClick() {
        const updateObj = {
            likes: message.likes + 1
        };

        fetch(`http://localhost:9292/messages/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then((r) => r.json())
        .then(onUpdateMessage)
    }
    
    return (
            <li>
                <span className="name">{name}</span>
                <p>{text}</p>
                <p>{likes} Likes </p>
                <button className="like-btn" onClick={handleLikeClick}>
                    Like {"<3"} 
                </button>
            </li>

    )
}

export default Message