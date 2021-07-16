import React, { useState } from "react";
import db from "../firebaseConfig";
import { Button, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function CardForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  const DEFAULT_STATE = {
    description: "",
    destination: "",
    quantity: "",
    responsibility: "",
    shippingDate: null,
    status: false,
    title: "",
  };

  const [cardContent, setCardContent] = useState({
    description: props.description,
    destination: props.destination,
    quantity: props.quantity,
    responsibility: props.responsibility,
    shippingDate: null,
    status: false,
    title: props.title,
  });

  //keeping track of the card data.
  const handleChange = (e) => {
    setCardContent({ ...cardContent, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //if we have a card, update it
    if (props.id) {
      e.preventDefault();
      db.collection("board")
        .doc(props.docId)
        .collection("card")
        .doc(props.id)
        .update({
          ...cardContent,
          shippingDate: moment(startDate).format('L'),
        });
      setCardContent(DEFAULT_STATE);
      props.handleClick();
    } //if not, add a new one.
    else {
      e.preventDefault();
      db.collection("board")
        .doc(props.docId)
        .collection("card")
        .add({
          ...cardContent,
          shippingDate: moment(startDate).format('L'),
        });
      setCardContent(DEFAULT_STATE);
      props.handleClick();
    }
  };

  return (
    <Modal show={props.showForm} onHide={props.handleClick}>
      <Modal.Header closeButton>
        <Modal.Title>Card Content</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Label>Title </Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          value={
            cardContent.title === undefined
              ? DEFAULT_STATE.title
              : cardContent.title
          }
          onChange={handleChange}
          required
        />
        <Form.Label>Description </Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="description"
          value={
            cardContent.description === undefined
              ? DEFAULT_STATE.description
              : cardContent.description
          }
          onChange={handleChange}
          required
        />
        <Form.Label>Destination</Form.Label>
        <Form.Control
          type="text"
          name="destination"
          placeholder="destination"
          value={
            cardContent.destination === undefined
              ? DEFAULT_STATE.destination
              : cardContent.destination
          }
          onChange={handleChange}
          required
        />
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          name="quantity"
          placeholder="quantity"
          value={
            cardContent.quantity === undefined
              ? DEFAULT_STATE.quantity
              : cardContent.quantity
          }
          onChange={handleChange}
          required
        />
        <Form.Label>Responsibility</Form.Label>
        <Form.Control
          type="text"
          name="responsibility"
          placeholder="responsibility"
          value={
            cardContent.responsibility === undefined
              ? DEFAULT_STATE.responsibility
              : cardContent.responsibility
          }
          onChange={handleChange}
          required
        />
        <Form.Label>Shipping Date </Form.Label><br />
        <DatePicker
          selected={startDate}
          dateFormat="dd-MM-yyyy"
          showDayMonthYearPicker
          onChange={(date) => setStartDate(date)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardForm;