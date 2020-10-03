import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/footer.css';


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-0">
                  <Col className="p-0 d-flex justify-content-end" sm={7}>
                        <p>This site was made with <span role="img" aria-label="heart emoji"> ❤️ </span> by Allison Sadin.</p>
                  </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;

