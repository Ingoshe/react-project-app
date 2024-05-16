import React from "react";
import WeeklyBlog from "./WeeklyBlog";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import Footer from "./Footer";
import BlackWhite from "./b&wEducation.jpeg";

import Peducate from "./Peducation.jpeg";
import Grenade from "./GrenadeBM.jpeg";
// import Thorns from "./Thorns.webp"
import Btn from "./RedemptionBtn.jpeg";
import BigMad from "./BigMad.jpeg";
import Work from "./Work.jpeg";
import Wheat from "./Wheat.jpeg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./CarouselImage1.jpg";
import img2 from "./CarouselImage2.jpeg";
import img3 from "./CarouselImage3.jpg";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home-content bg-yellow-500">
      <h1>
        <b>JELA 5TAR</b>
      </h1>
      {/* Carousel */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{ height: "83vh", width: "1400px" }}
            src={img1}
            alt="imge"
            text="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "83vh", width: "1400px" }}
            src={img2}
            alt="imge"
            text="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "83vh", width: "1400px" }}
            src={img3}
            alt="imge"
            text="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className="m-16">
        Positive human interactions and relationships play a crucial role in the
        redemption and rehabilitation of convicts. Prison officers who treat
        inmates with humanity, respect and fairness can help establish a
        foundation for personal growth and development. Reciprocal relationships
        built on trust and support from staff demonstrate concern for inmates as
        individuals and encourage positive behavioral change. Practical
        assistance from officers to address inmates' needs and requests also
        contributes to a rehabilitative prison climate. Ultimately, a safe,
        well-organized prison environment that fosters harmony, professionalism
        and well-being is most conducive to inmates' successful reintegration
        into society upon release. Compassion and a focus on redemption, rather
        than solely punishment, is vital to break the cycle of recidivism and
        help offenders become productive members of their communities.
        <Container className="m-5">
          <Row>
            <Col xs={6} md={4}>
              <Image src={BigMad} rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src={Work} roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src={Wheat} thumbnail />
            </Col>
          </Row>
        </Container>
      </p>
      <p className="m-16">
        Educating convicts is crucial for promoting a literate environment as it
        not only offers individuals a chance at rehabilitation but also
        contributes to reducing recidivism rates. By providing education to
        those incarcerated, we empower them with the tools to reintegrate into
        society upon release, increasing their chances of securing employment
        and leading productive lives. Furthermore, a literate environment within
        correctional facilities fosters personal growth, critical thinking
        skills, and a sense of self-worth among inmates. Education can break the
        cycle of crime by offering opportunities for self-improvement and
        instilling a desire for lifelong learning. Ultimately, investing in the
        education of convicts not only benefits the individuals themselves but
        also society as a whole by creating a more informed, engaged, and
        literate population.
        <Container className="m-5">
          <Row>
            <Col xs={6} md={4}>
              <Image src={BlackWhite} rounded />
            </Col>

            <Col xs={6} md={4}>
              <Image src={Peducate} thumbnail />
            </Col>
          </Row>
        </Container>
      </p>
      <p className="m-16">
        When convicts seek redemption and successful reintegration into society,
        it involves a complex process of acknowledging wrongdoing, serving their
        sentences, and actively working towards positive change. Redemption for
        convicts signifies a journey of atonement, self-improvement, and seeking
        forgiveness from society. It involves accepting responsibility for past
        actions, demonstrating genuine remorse, and making amends for the harm
        caused. The process of redemption often extends beyond serving a
        sentence; it requires individuals to address the root causes of their
        criminal behavior, undergo rehabilitation, and strive for personal
        growth. Successful reintegration into society for convicts involves
        overcoming societal stigma, rebuilding trust, and transitioning into
        law-abiding citizens. It requires access to support systems, educational
        opportunities, employment prospects, and mental health services to
        facilitate a smooth transition back into the community. Reintegration
        efforts aim to reduce recidivism rates by providing ex-convicts with the
        necessary tools and resources to lead productive and fulfilling lives
        post-incarceration. The journey of redemption and successful
        reintegration is multifaceted, requiring a combination of individual
        effort, societal support, and systemic reforms within the criminal
        justice system. It is a process that demands compassion, understanding,
        and a commitment to second chances for those who have paid their dues to
        society.
        <Container className="m-5">
          <Row>
            <Col xs={6} md={4}>
              <Image src={Grenade} rounded />
            </Col>

            <Col xs={6} md={4}>
              <Image src={Btn} thumbnail />
            </Col>
          </Row>
        </Container>
      </p>
      <p className="m-16">
        Criminal rehabilitation institutions play a crucial role in providing
        opportunities for convicts to advance themselves and creating an
        enabling environment for them to redeem themselves. These institutions
        focus on reducing recidivism and addressing the root causes of criminal
        behavior through various programs and interventions. By offering
        education, vocational training, mental health, and substance abuse
        treatment, they aim to equip offenders with the necessary skills and
        support to reintegrate into society as reformed individuals. The
        importance of criminal rehabilitation lies in its potential to break the
        cycle of crime by addressing the underlying issues that lead individuals
        to offend. By providing inmates with the tools to improve themselves,
        rehabilitation programs not only benefit the offenders but also
        contribute to safer communities and reduced crime rates. Moreover,
        creating a supportive and rehabilitative environment within prisons can
        help offenders rebuild their lives, regain their dignity, and
        reintegrate successfully into society upon release. In summary, criminal
        rehabilitation institutions play a vital role in offering opportunities
        for convicts to grow and improve themselves while fostering an
        environment that supports their redemption and successful reintegration
        into society.
      </p>
      <br />
      <br />
      <p className="m-8">Read this weeks blog by one of our members.</p>
      <WeeklyBlog />
      <Footer />
    </div>
  );
}

export default Home;
