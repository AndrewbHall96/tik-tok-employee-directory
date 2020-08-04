import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CreatorCard from "./components/Card";
import Footer from "./components/Footer";
import creators from "./creators.json";
import CardDeck from 'react-bootstrap/CardDeck';


function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardDeck className="py-5">
      <CreatorCard name={creators[0].name} username={creators[0].username} followers={creators[0].followers} image={creators[0].image} />
      <CreatorCard name={creators[1].name}username={creators[1].username}followers={creators[1].followers}image={creators[1].image}/>
      <CreatorCard name={creators[2].name}username={creators[2].username}followers={creators[2].followers}image={creators[2].image}/>
      </CardDeck>
      <CardDeck>
      <CreatorCard name={creators[3].name}username={creators[3].username}followers={creators[3].followers}image={creators[3].image}/>
      <CreatorCard name={creators[4].name}username={creators[4].username}followers={creators[4].followers}image={creators[4].image}/>
      <CreatorCard name={creators[5].name}username={creators[5].username}followers={creators[5].followers}image={creators[5].image}/>
      </CardDeck>
      <CreatorCard name={creators[6].name}username={creators[6].username}followers={creators[6].followers}image={creators[6].image}/>
      
      <Footer />

    </>
  )
};

export default App;
