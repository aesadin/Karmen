import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/footer.css';


function Footer() {

    return(
        <div className="footer">
        <Container fluid={true}>
            <Col>
                <p>Copyright © 2020 Allison Sadin</p>
            </Col>
        </Container>
        </div>
    );

}

export default Footer;

