import React, { useContext, useRef, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import "./Profile.css";

import { Authcontext } from "../../Context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user, updateuser } = useContext(Authcontext);
  const [name, setName] = useState(user.displayName);
  const photourlRef = useRef(user.photoURL);
  console.log(user);

  const handleupdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL=photourlRef.current.value

    handleupdateuser(name,photoURL);
    form.reset();
  };

  const handleupdateuser = (name,photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photourlRef.current.value,
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

  const handlenamechange = (event) => {
    setName(event.target.value);
  };
  return (
    <Form onSubmit={handleupdate} className="w-75 mt-2 m-auto">
      <Form.Group className="d-flex justify-content-center">
        {/* <Image roundedCircle id="img-style" src={user.photoURL}></Image> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          defaultValue={name}
          onChange={handlenamechange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={user?.email} readOnly />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control ref={photourlRef} defaultValue={user.photoURL} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Profile
      </Button>
    </Form>
  );
};

export default Profile;
