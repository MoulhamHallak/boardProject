import React from "react";
import "../App.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter backgroundColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow style={{display: 'flex', flexDirection : 'row', justifyContent: 'space-around'}}>
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput type="text" id="form5Example2" placeHolder="Email address" />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://re-coded.com/">
          re:coded.com
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;
