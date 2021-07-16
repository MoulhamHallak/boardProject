import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import B from "../photos/B.jpeg";

export const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/MainBoard");
  }

  return (
    <div
      style={{
        backgroundImage: `url(${B})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
      }}
    >
      {/* {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: flex-end;
	align-content: stretch;
} */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          alignContent: "flex-end",
          border: "3px solid black",
          minHeight: "inherit",
        }}
      >
        <h1>Welcome to the Warehouse Management System</h1>
        <br />
        <Button onClick={handleClick}>Go to the Board</Button>
      </div>
    </div>
  );
};

export default Home;
