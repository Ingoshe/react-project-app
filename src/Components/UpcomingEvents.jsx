import React from "react";
import Footer from "./Footer";

function UpcomingEvents() {
  return (
    <div className="upcoming-events bg-red-500">
     <ul className="text-4xl ml-56">
        <li>Rugby Match <br />28th MAY</li><br />
        <li>Debate Contest <br />4th JUNE</li><br />
        <li>Athletics <br />30th JUNE</li><br />
        <li>Football Match <br />10th JULY</li><br />
        <li>Training Camp <br />16th JULY</li><br />
        <li>Final Exams <br />1st SEPTEMBER</li><br />
     </ul>
      <Footer/>
    </div>
  );
}

export default UpcomingEvents;
