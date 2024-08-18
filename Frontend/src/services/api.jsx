import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchCards = async () => {
  try {
    const response = await axios.get(`${API_URL}/cards`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const fetchCardByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}/cards/${title}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching card by title:', error);
    throw error;
  }
};

export const createCard = async (cardData) => {
  try {
    const response = await axios.post(`${API_URL}/cards`, cardData);
    return response.data;
  } catch (error) {
    console.error('Error creating card:', error);
    throw error;
  }
};
