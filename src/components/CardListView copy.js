import React from "react";
import { Accordion } from "react-bootstrap";

const CardListView = (props) => {
  return (
      <Accordion.Item eventKey={props.id}>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>Shipping Date: {props.shippingDate}
          {/* <li>Responsibility: {props.responsibility}</li> */}
        </Accordion.Body>
      </Accordion.Item>
  );
};

export default CardListView;
