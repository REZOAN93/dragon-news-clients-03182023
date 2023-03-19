import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { userlogin } = useContext(Authcontext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [accepted, setAccepted] = useState(false);

  const handleconfirm = (event) => {
    setAccepted(event.target.checked);
  };

  const handlesignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userlogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        form.reset();
        if (user.emailverified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Email is not verified. Please verify");
        }
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <Form onSubmit={handlesignin} className="w-75 mt-5 m-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
      <>{error}</>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleconfirm}
          label=<p>
            <Link> Agree Term & Conditions</Link>
          </p>
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
