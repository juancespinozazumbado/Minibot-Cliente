
import React, { useState, useEffect } from 'react';
import { sendMessage } from '../../Service/ChatService.js';

const firstMessages = [
    { message: "Hola! mi nombre es Boty y soy tu asistente virtual, como puedo ayudarte?.." , bot: true },
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
    
    <div className="container bg-light-subtle mt-1" style={{  padding: '20px'}}>
      <p className='badge bg-secondary'>Chat boot 🤖</p>
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
          <button className="btn btn-outline-secondar" onClick={handleSend}><i className="bi bi-send"></i></button>
          <button className="btn btn-outline-secondar ml-2"
           onClick={handleClearChat}><i className="bi bi-trash"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

