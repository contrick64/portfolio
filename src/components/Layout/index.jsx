import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Navigation";

export default function Layout(props) {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col id="leftcol" md={4} xxl={3}>
          <header>
            <Navigation />
          </header>
        </Col>
        <Col md={8} xl={6} xxl={5} id="rightcol">
          <div className="projectholder">
            <main>
              <Outlet />
            </main>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
