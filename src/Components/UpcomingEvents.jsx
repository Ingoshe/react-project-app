import React from "react";
import Footer from "./Footer";
import Events from "./Events";
import img1 from "./b&wEducation.jpeg";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function UpcomingEvents() {
  return (
    <>
      <div className="upcoming-events bg-yellow-500 grid grid-cols-4 gap-4">
        {/* <ul className="ml-56">
        <li>Rugby Match <br />28th MAY</li><br />
        <li>Debate Contest <br />4th JUNE</li><br />
        <li>Athletics <br />30th JUNE</li><br />
        <li>Football Match <br />10th JULY</li><br />
        <li>Training Camp <br />16th JULY</li><br />
        <li>Final Exams <br />1st SEPTEMBER</li><br />
     </ul> */}
        <Events
          img={img1}
          name="Rugby Match"
          date="12th May, 2024"
          location="Nyayo Grounds"
        />
        <Events
          img={img1}
          name="Rugby Match"
          date="12th May, 2024"
          location="Nyayo Grounds"
        />
        <Events
          img={img1}
          name="Rugby Match"
          date="12th May, 2024"
          location="Nyayo Grounds"
        />
        <Events
          img={img1}
          name="Rugby Match"
          date="12th May, 2024"
          location="Nyayo Grounds"
        />
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default UpcomingEvents;
