import React, { useState } from 'react';
import "../styles/Jumbotron.css";

function Jumbotron() {

    // calling state through hook
 const [searchValue, setSearchValue] = useState("");    


    const searchCreators = () => {
    setSearchValue()

    }

    return (
        
            <div className="jumbotron">
                <h1 className="display-4">Search Creators</h1>
                <h2 className="lead">Real People. Real Videos.</h2>
                <hr className="my-4" />
            </div>
            
    );
}


export default Jumbotron;
