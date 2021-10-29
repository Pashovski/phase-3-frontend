import React from "react"
import Message from "./Message"



export default MessageList

function MessageList({
    messages,
    onMessageDelete,
    onUpdateMessage,
  }) {
    return (
        //I have to grab the messages
        //I have to .map over them
      <div className="list">
        <ul>
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
            //   currentUser={currentUser} 
              onMessageDelete={onMessageDelete}
              onUpdateMessage={onUpdateMessage}
            />
          ))}
        </ul>
      </div>
    );
  }

//   function MessageList({ messages, onUpdateMessage}) {
//     const message = messages.map((chicken) => (
//         <Message
//         key={chicken.id}
//         chicken={chicken}
//         onUpdateMessage={onUpdateMessage}
//         />
//     ))

//     return (
//         // I have to grab the messages
//         // have to .map over them
//         <div>{message}</div>        
//     )
// }