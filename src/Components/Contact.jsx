import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Contact() {
  return (
    <>
    <NavBar/>
    <div className="contact  font-serif italic">
      <h1>
        <b>
          <i>CONTACT US</i>
        </b>
      </h1>
      <br />
      <br />
      <p>You can reach out to us using the following contact info:</p>
      <p>
        <ul>
          <li>Location: Ole Odume Rd, Off Argwings Kodhek Rd.</li>
          <li> Postal Add.: P.O. Box
        7483-00300 Nairobi, Kenya. </li>
          <li>Tel: 3874191, 3874220, 3876290, Fax: 3876295
        Mobile: +254 734 874 221, +254 727 773 991 </li>
          <li> Email:
        info(at)kituochasheria.or.ke Website: www.kituochasheria.or.ke</li>
        </ul>
       
      </p><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
    </>
  );
}

export default Contact;
