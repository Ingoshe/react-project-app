import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div
        style={{ textAlign: "center" }}
        className="about-us m text-lg font-serif italic bg-red-200"
      >
        <mark>About Us</mark>
        <br /> At JELA 5TAR, we are dedicated to providing a comprehensive and
        supportive environment for individuals who have been involved in the
        criminal justice system. Our mission is to empower our residents to
        overcome their past mistakes, develop positive life skills, and
        reintegrate into society as productive and law-abiding citizens. <br />
        <br />
        <mark>Our History</mark> <br /> Established in 2021, our institution has
        a long history of providing rehabilitation services to individuals from
        diverse backgrounds. Over the years, we have refined our approach to
        address the complex needs of our residents, incorporating evidence-based
        practices and innovative programs to enhance their chances of success.{" "}
        <br />
        <br />
        <mark>Our Philosophy</mark>
        <br />
        We believe that every individual deserves a second chance to turn their
        life around. Our philosophy is centered around the principles of
        rehabilitation, restoration, and reintegration. We recognize that each
        person has unique strengths, challenges, and goals, and we tailor our
        services to meet their individual needs. <br />
        <br /> <mark>Our Team</mark>
        <br /> Our team of dedicated professionals includes experienced
        counselors, therapists, educators, and support staff who are passionate
        about helping others. Our staff undergoes rigorous training to ensure
        they are equipped to provide the highest level of care and support to
        our residents. <br />
        <br /> <mark>Our Programs</mark>
        <br /> We offer a wide range of programs and services designed to
        address the physical, emotional, and psychological needs of our
        residents. These include: <br />
        <br />{" "}
        <mark>
          <i>Counseling and Therapy:</i>
        </mark>
        <br /> Individual and group counseling sessions to address underlying
        issues, manage emotions, and develop coping skills. <br />
        <mark>
          <i>Education and Job Training</i>
        </mark>{" "}
        : Academic and vocational training to enhance employability and
        self-sufficiency. <br />{" "}
        <mark>
          <i>Life Skills Development:</i>
        </mark>{" "}
        Programs focused on developing essential life skills, such as budgeting,
        time management, and conflict resolution. <br />
        <mark>
          <i>Recreational and Wellness Activities:</i>
        </mark>
        Opportunities for physical activity, creative expression, and stress
        management. <br />
        <mark>
          <i>Mentorship and Support:</i>
        </mark>{" "}
        One-on-one mentoring and peer support groups to foster a sense of
        community and accountability. <br />
        <br />
        <mark>
          <i>Our Facilities</i>
        </mark>
        <br /> Our institution is designed to provide a safe, comfortable, and
        supportive environment for our residents. Our facilities include: <br />
        <mark>
          <i>Residential Accommodations:</i>
        </mark>{" "}
        Clean, comfortable, and secure living quarters. <br />
        <mark>
          <i>Recreational Spaces:</i>
        </mark>{" "}
        Indoor and outdoor areas for physical activity, relaxation, and
        socialization. <br />
        <mark>
          <i>Educational and Training Facilities:</i>
        </mark>
        State-of-the-art classrooms, workshops, and computer labs. <br />
        <mark>
          <i>Counseling and Therapy Rooms:</i>
        </mark>{" "}
        Private and group counseling spaces. <br />
        <br />
        <mark>
          <i>Our Goals</i>
        </mark>
        <br />
        Our ultimate goal is to help our residents become productive members of
        society, capable of making positive contributions to their communities.
        We measure our success by the number of individuals who successfully
        complete our programs, secure employment, and maintain a law-abiding
        lifestyle upon release. <br /><br />
        <mark>
          <i>Get Involved</i>
        </mark>
        <br /> If you or someone you know is in need of our services, we
        encourage you to reach out to us. We also welcome volunteers, donors,
        and community partners who share our vision of creating a safer, more
        compassionate society.
      </div>
      <Footer />
    </>
  );
}

export default About;
