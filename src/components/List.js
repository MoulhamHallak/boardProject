import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import CardForm from "./CardForm";
import CardContent from "./CardContent";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const List = (props) => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const docId = props.id;
  const [listName, setListName] = useState(props.listName);

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

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  };

  const deleteList = () => {
    db.collection("board")
      .doc(docId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const listNameUpdate = (event) => {
    setListName(event.currentTarget.textContent);
  };

  const listUpdate = () => {
    db.collection("board").doc(docId).update({
      listName: listName,
    });
  };

  const handleSortByNameAsc = () => {
    setCards(cards.sort((a, b) => a.title.localeCompare(b.title)));
  };

  const handleSortByDateAsc = () => {
    setCards(
      cards.sort((a, b) => a.shippingDate.localeCompare(b.shippingDate))
    );
  };

  const handleSortByNameDesc = () => {
    setCards(cards.sort((a, b) => b.title.localeCompare(a.title)));
  };

  const handleSortByDateDesc = () => {
    setCards(
      cards.sort((a, b) => b.shippingDate.localeCompare(a.shippingDate))
    );
  };
  return (
    <Card key={docId} style={{ width: '20rem', margin : '10px' }} xs lg="4">
      <Card.Header style={{ display: 'flex', flexDirection : 'row', justifyContent: 'space-around'}}>
        <Card.Title contentEditable="true" onInput={listNameUpdate} style={{ width: '9rem', margin : '5px' }}>
          {props.listName}
        </Card.Title>
          <Button type="submit" onClick={listUpdate} style={{ height: '2.4rem'}} >
            Edit
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ height: '2.4rem'}}>
              Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/SortByName" onClick={handleSortByNameAsc}>
                Sort By Name Asc
              </Dropdown.Item>
              <Dropdown.Item href="#/SortByName" onClick={handleSortByNameDesc}>
                Sort By Name Desc
              </Dropdown.Item>
              <Dropdown.Item href="#/SortByDate" onClick={handleSortByDateAsc}>
                Sort By Date Asc
              </Dropdown.Item>
              <Dropdown.Item href="#/SortByDate" onClick={handleSortByDateDesc}>
                Sort By Date Desc
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Card.Header>
      <Card.Body>
        {showForm && (
          <CardForm
            docId={docId}
            handleClick={handleClick}
            showForm={showForm}
          />
        )}
        {cards.map((card) => {
          if (card.status === false) {
            return (
              <CardContent
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
            );
          } else {
            return null;
          }
        })}
      </Card.Body>
      <Card.Footer style={{ display: 'flex', flexDirection : 'row', justifyContent: 'space-around'}}>
      <Button type="submit" onClick={handleClick}>
          Add Card
        </Button>
        <Button type="submit" onClick={deleteList} variant="danger">
          Delete
        </Button>{" "}
      </Card.Footer>
    </Card>
  );
};

export default List;
