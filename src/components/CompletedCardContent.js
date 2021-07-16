import React from "react";
import db from "../firebaseConfig";
import { GrCheckboxSelected } from "react-icons/gr";
import { Card, ListGroup, Button, Col } from "react-bootstrap";


const CompletedCardContent = (props) => {

  const deleteCard = () => {
    db.collection("completed")
      .doc(props.id)
      .delete()
      .then(() => {
        console.log("Card successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <Col>
    <Card
      key={props.id}
      style={{ width: '18rem', marginBottom : '10px', backgroundColor: "lightblue" }}
    >
      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
        <Card.Text>
        <span>
            <GrCheckboxSelected type="checkbox" />
            {props.status}
            <span> Completed</span>
          </span>
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>Description: {props.description} </ListGroup.Item>
        <ListGroup.Item>Shipping Date: {props.shippingDate}</ListGroup.Item>
        <ListGroup.Item>Responsibility: {props.responsibility}</ListGroup.Item>
        <ListGroup.Item>Destination: {props.destination}</ListGroup.Item>
        <ListGroup.Item>Quantity: {props.quantity}</ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ display: 'flex', flexDirection : 'row', justifyContent: 'center' }}>
        <Button onClick={deleteCard} variant="danger" style={{ width: '18rem', marginBottom : '10px' }}>Delete</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default CompletedCardContent;
