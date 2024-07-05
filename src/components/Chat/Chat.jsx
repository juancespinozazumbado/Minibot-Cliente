
import React, { useState, useEffect } from 'react';
import { sendMessage } from '../../Service/ChatService.js';

const firstMessages = [
  { message: "Hola! mi nombre es Boty y soy tu asistente virtual, como puedo ayudarte?..", bot: true },
];

localStorage.setItem('messages', JSON.stringify(firstMessages));

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { message: input, bot: false };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));

      try {
        const response = await sendMessage(input);
        const botMessage = { message: response.respuesta, bot: true };
        const finalMessages = [...updatedMessages, botMessage];
        setMessages(finalMessages);
        localStorage.setItem('messages', JSON.stringify(finalMessages));
        setInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem('messages');
  };

  return (

    <div className="container bg-light-subtle mt-1" style={{ padding: '20px' }}>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">🤖</li>
        </ol>
      </nav>
      <div className="card" style={{ height: '400px', overflowY: 'scroll' }}>
        <div className="card-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex ${msg.bot ? 'justify-content-start' : 'justify-content-end'}`}


            >
              <div className="card mb-2" style={{ maxWidth: '80%' }}>
                <div className="card-body">
                  <p className="card-text">{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          value={input}
          placeholder='Escribe una consulta...'
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="input-group-append m-1">
          <button className="btn btn-outline-secondar" onClick={handleSend}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </button>
          <button className="btn btn-outline-secondar ml-2"
            onClick={handleClearChat}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

