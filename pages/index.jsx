import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import NavbarComponnent from "../components/NavbarComponents";
import heroImage from "../public/image/cough.svg"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <NavbarComponnent />
      <body>
        <div className="wrapper-home">
          <Container>
            <Row className="herokss">
              <Col>
                <div className="heroku">
                  <h1 className="title-hero">
                    Halo, Selamat atang di MENGKIS.
                  </h1>
                  <p className="description-hero">
                    Mengkis merupakan sebuah software untuk membuat anda yang
                    merasa kehilangan karena cinta menjadi tidak kehilangan,
                    caranya yaitu melakukan VCS bersama talent kami.
                  </p>
                  <Link href="/contact">
                    <a className="cta">Kontak Kami</a>
                  </Link>
                </div>
              </Col>
              <Col>
                <div className="hero-image">
                  <Image src={heroImage} alt="me" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </body>
    </>
  );
}
