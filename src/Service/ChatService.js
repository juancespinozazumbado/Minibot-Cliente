import axios from 'axios';

const API_URL = 'https://miniboot-servicio.azurewebsites.net/api/v1';
//const API_URL = 'https://localhost:5001/api/v1'

const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/chat/send`, { texto : message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};


const fetchConsultasPosibles = async () => {
  try {
    const response = await axios.post(`${API_URL}/chat/consultas`, { texto : message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export { sendMessage, fetchConsultasPosibles };
