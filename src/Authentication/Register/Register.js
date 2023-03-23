import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { Authcontext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  const { createUser, updateuser, verifyEmail } = useContext(Authcontext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);
  useTitle("Register");

  const handlesubmitregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        form.reset();
        navigate("/login");
        setError("");
        handleupdateProfile(name, photoURL);
        handleEmailVerify();
        toast.success("Please Verify Your Email!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const handleEmailVerify = () => {
    verifyEmail().then(() => {
      // Email verification sent!
      // ...
    });
  };

  const handleupdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateuser(profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const handleCheckBox = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Form onSubmit={handlesubmitregister} className="w-75 mt-2 m-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="name"
          name="name"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          required
          type="Photo"
          name="photoURL"
          placeholder="Set URL"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Password"
        />

        <>{error}</>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleCheckBox}
          label=<p>
            Check me out <Link to={"/term&Condition"}> Term & Conditions</Link>
          </p>
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
