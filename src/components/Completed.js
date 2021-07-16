import React, { useState, useEffect } from "react";
import CompletedCardContent from "./CompletedCardContent";
import db from "../firebaseConfig";
import { Button, Col, Row } from "react-bootstrap";


export const Completed = () => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    await db.collection("completed").onSnapshot(function (querySnapshot) {
      setCards(
        querySnapshot.docs.map((card, index) => {
          return {
            id: card.id,
            key: index,
            ...card.data(),
          };
        })
      );
    });
  };

  //control argument needs to be figured out.
  useEffect(() => {
    fetchCards();
  }, []);

  console.log(cards);

  return (
    <div style={{ margin: "20px"}}>
      <h1 style = {{ textAlign: "center", fontWeight: "bold"}}> Completed Tasks </h1> <br></br>
      <Row>
        {cards.map((card) => {
          return (
            <CompletedCardContent
              id={card.id}
              title={card.title}
              status={card.status}
              shippingDate={card.shippingDate}
              responsibility={card.responsibility}
              description={card.description}
              destination={card.destination}
              quantity={card.quantity}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default Completed;
