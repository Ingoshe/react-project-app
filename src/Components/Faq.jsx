import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <>
      <NavBar />

      <div className="questions  font-serif italic ">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Recruitment</Accordion.Header>
            <Accordion.Body>
              To qualify as a prison officer in Kenya, one must: <br /> Be a
              Kenyan citizen between 18-28 years old for constables or 18-30
              years old for cadets <br /> Have at least a D+ grade in KCSE for
              constables or a C+ grade in KCSE and a relevant bachelor's degree
              for cadets <br /> Be at least 5 feet 4 inches tall for men or 5
              feet 2 inches tall for women <br /> Be mentally and physically fit{" "}
              <br /> For female candidates, not be pregnant during recruitment
              and training <br /> The Kenya Prisons Service also employs
              civilian staff directly appointed by the Public Service
              Commission.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Internships and Attachments</Accordion.Header>
            <Accordion.Body>
              Students seeking prison attachments must submit: <br /> A copy of
              their national ID 2 passport photos <br /> A letter of
              introduction from their institution <br /> A police clearance
              certificate
              <br /> Medical insurance cover to the Prisons Headquarters for
              approval <br /> All government internships are handled through the
              Public Service Commission.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Products and Services</Accordion.Header>
            <Accordion.Body>
              KPS products are available at prisons industries and farms
              nationwide. <br /> For more information,
              <br /> contact 0202722902/3/4/5/6/7/8/9. <br /> Products can also
              be viewed on the official KPS website and social media accounts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Visitation and Complaints</Accordion.Header>
            <Accordion.Body>
              The official KPS visitation time for inmates is 9am to 4:30pm
              daily. <br /> Complaints can be submitted through official KPS
              emails, phone lines, and the Standards and Compliance Office at
              Prisons Headquarters
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Related</Accordion.Header>
            <Accordion.Body>
              what is the capacity of kenyan prisons <br /> what is the process
              forvisiting a prisoner in kenya <br /> what is the role of the
              kenya prisons service in the criminal justice system
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Faq;
