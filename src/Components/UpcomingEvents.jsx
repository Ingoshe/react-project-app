import React from "react";
import Footer from "./Footer";
import Events from "./Events";
import img1 from "./b&wEducation.jpeg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";
import art from './Art ill.jpeg'
import athletics from './ath.png'
import qa from './qua.jpeg'
import debate from './debate.webp'
import wape from './peacewar.jpg'
import serve from './The-Church.jpeg'
import couns from './guid.jpeg'
import trade from './fair.jpg'
import fut from './fut.jpg'
import rugi from './rugi.jpg'

function UpcomingEvents() {
  return (
    <>
      <NavBar />
      <div className="upcoming-events  grid grid-cols-4 gap-2 m-auto font-serif italic">
        {/* <ul className="ml-56">
        <li>Rugby Match <br />28th MAY</li><br />
        <li>Debate Contest <br />4th JUNE</li><br />
        <li>Athletics <br />30th JUNE</li><br />
        <li>Football Match <br />10th JULY</li><br />
        <li>Training Camp <br />16th JULY</li><br />
        <li>Final Exams <br />1st SEPTEMBER</li><br />
     </ul> */}
        <Events
          img={debate}
          title="Debate Contest"
          date="30th May, 2024"
          location="Bomas of Kenya"
        />
        <Events
          img={couns}
          title="Guid & Couns Function "
          date="5th June, 2024"
          location="Bomas of Kenya"
        />
        <Events
          img={art}
          title="Art Exhibition"
          date="16th June, 2024"
          location="Art Galleria"
        />
        <Events
          img={qa}
          title="General Knowledge Compe."
          date="20th June, 2024"
          location="Kitmap Place"
        />
        <Events
          img={wape}
          title="War & Peace Seminar"
          date="25th June, 2024"
          location="Bomas of Kenya"
        />
        <Events
          img={trade}
          title="Trade Fair"
          date="1st July, 2024"
          location="Nyayo Grounds"
        />
        <Events
          img={serve}
          title="Annual Church Service"
          date="9th July, 2024"
          location="VRC"
        />
        <Events
          img={fut}
          title="Football Friendly vs Kamiti"
          date="17th July, 2024"
          location="Kasarani Stadium"
        />
        <Events
          img={rugi}
          title="Rugby Finals vs Kogalo"
          date="21st July, 2024"
          location="Nyayo Stadium"
        />
        <Events
          img={athletics}
          title="Athletics"
          date="31st August, 2024"
          location="Kasarani Stadium"
        />
      </div>
      <Footer />
    </>
  );
}

export default UpcomingEvents;
