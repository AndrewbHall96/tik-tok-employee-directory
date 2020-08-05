import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CreatorCard from "./components/Card";
import Footer from "./components/Footer";
import creators from "./creators.json";
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';


function App() {

  // future reference this is how we'd update our array
  // setSearches(searches => [...searches, query])


// importing creators from the json. #Hooks
    const [creatorsList, setCreatorsList] = useState(creators);
  

  return (
    <>
      <Navbar />
      <Jumbotron />
      <Container>
      <CardDeck className="py-5"> {
        creatorsList.map((creator, index) => {
          if (index < 3) {
            return(
            <CreatorCard creator={creator}/>
            )
          }
        })
      }
      
      </CardDeck>

      <CardDeck className="py-5"> {
        creatorsList.map((creator, index) => {
          if (index > 2 && index < 6) {
            return (
            <CreatorCard creator={creator}/>
            )
          }
        })
      }
      </CardDeck>

      <CardDeck className="py-5"> {
        creatorsList.map((creator, index) => {
          if (index > 5 && index < 9) {
            return (
            <CreatorCard creator={creator}/>
            )
          }
        })
      }
      </CardDeck>
      </Container>
      <Footer />

    </>
  )
};

export default App;
