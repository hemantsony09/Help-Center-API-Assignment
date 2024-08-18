import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import Navbar from './component/Navbar.jsx'
import './App.css'; 
import './responsive.css'
import Footer from './component/Footer.jsx';

const App = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="App">
      <Navbar/>
      <div className="search">

        <h1>How can we help?</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

        <div className="card-container">
          {filteredCards.map(card => (
            <Card key={card._id} title={card.title} description={card.description} />
          ))}
        </div>
       <Footer/>
    </section>
  );
};

export default App;
