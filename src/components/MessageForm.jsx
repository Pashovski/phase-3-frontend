import React, { useState } from 'react'

function MessageForm({ onAddMessage }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:9292/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: 0,
                text: text,
                
            }),
        })
            .then((r) => r.json())
            .then((newMessage) => {
                onAddMessage(newMessage);
                setText("")
                
            })
    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default MessageForm;