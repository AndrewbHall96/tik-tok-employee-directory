import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
    return (
        
            <div className="jumbotron">
                <h1 className="display-4">Search Creators</h1>
                <h2 className="lead">Real People. Real Videos.</h2>
                <hr className="my-4" />
                <input type="text" />
                <button className="btn btn-primary btn-lg" role="button" onclick="searchCreators()">Learn more</button>
            </div>
            
    );
}


export default Jumbotron;
