import React from "react";
import "../styles/Card.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

function CreatorCard(props) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} alt={props.name} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item><strong>Name:</strong> {props.name}</ListGroup.Item>
                        <ListGroup.Item><strong>Username:</strong> {props.username}</ListGroup.Item>
                        <ListGroup.Item><strong>Followers:</strong>{props.followers}</ListGroup.Item>
                        <ListGroup.Item><strong>Category:</strong>{props.category}</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        // <div className="card employee">
        //     <img className="card-img-top" src={props.image} alt={props.name} />
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        //     <ul className="list-group list-group-flush">
        //         <li className="list-group-item">
        //             <strong>Name:</strong> {props.name}</li>
        //         <li className="list-group-item">
        //             <strong>Username:</strong> {props.username}</li>
        //         <li className="list-group-item">
        //             <strong>Followers:</strong>{props.followers}</li>
        //     </ul>
        //     <div className="card-body">
        //         <a href="#" className="card-link">Card link</a>
        //         <a href="#" className="card-link">Another link</a>
        //     </div>
        // </div>

    );
}

export default CreatorCard;
