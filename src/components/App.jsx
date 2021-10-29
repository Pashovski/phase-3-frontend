import {useEffect, useState} from 'react'
import MessageList from "./MessageList"
import MessageForm from './MessageForm';



function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/messages")
    .then(res => res.json())
    .then(messages => setMessages(messages))
  }, []);

  function handleUpdateMessage(updatedMessage) {
    const updatedMessages = messages.map((message) =>
    message.id === updatedMessage.id ? updatedMessage : message
    );
    setMessages(updatedMessages)
  }

  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage])
  }

  return (
    <div className="App">
      <MessageList
      messages={messages}
      onUpdateMessage={handleUpdateMessage}
      />
      <MessageForm onAddMessage={handleAddMessage} />
    </div>
  );
}

export default App;
