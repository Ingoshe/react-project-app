import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Successful");
  };
  return (
    <>
      <div>
        <div className="flex flex-auto justify-evenly">
          <ul className=" flex flex-col">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About Us</NavLink>
            <NavLink to="events">Upcoming Events</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="faq">FAQs</NavLink>
          </ul>
          <div className="newsletter">
            <p>
              Subscribe to receive inspiration, ideas, and news in your inbox.
            </p>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright © 2024 – JELA 5TAR. All Rights Reserved. Website by:
            WESLEY STUDIOS
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
