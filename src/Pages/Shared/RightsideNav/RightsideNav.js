import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../Images/1.jpg";
import img2 from "../../../Images/1.png";
import img3 from "../../../Images/3.jpg";
import { Authcontext } from "../../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightsideNav = () => {
  const { googleAuth } = useContext(Authcontext);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleAuth(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <div>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-secondary"
        >
          Login with Google
        </Button>{" "}
        <Button variant="outline-success">Login With Github</Button>{" "}
      </div>
      <div className="mt-5">
        <h6>Find us on:</h6>
        <ListGroup>
          <ListGroup.Item>Facebook</ListGroup.Item>
          <ListGroup.Item>Gmail</ListGroup.Item>
          <ListGroup.Item>LinkedIn</ListGroup.Item>
          <ListGroup.Item>Telegram</ListGroup.Item>
        </ListGroup>
      </div>
      <Carousel className="mt-5">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RightsideNav;
