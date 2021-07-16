import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import CardListView from "./CardListView";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";



const ListView = (props) => {
  const [cards, setCards] = useState([]);
  //   const [showForm, setShowForm] = useState(false);
  const docId = props.id;

  // fetching the cards inside the database.
  const fetchCards = async () => {
    await db
      .collection("board")
      .doc(docId)
      .collection("card")
      .onSnapshot(function (querySnapshot) {
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

  return (
    <Accordion>
      <AccordionItem key={docId}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h4>{props.listName}</h4>
        </AccordionItemButton>
      </AccordionItemHeading>        
        {cards.map((card) => {
            return (
              <AccordionItemPanel>
              <Accordion>
              <CardListView
                key={card.id}
                docId={docId}
                id={card.id}
                title={card.title}
                status={card.status}
                shippingDate={card.shippingDate}
                responsibility={card.responsibility}
                description={card.description}
                destination={card.destination}
                quantity={card.quantity}
              />
              </Accordion>
              </AccordionItemPanel>
            );
          } 
        )}
        
      </AccordionItem>
    </Accordion>
  );
};

export default ListView;
