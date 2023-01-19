import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Navigation";

export default function Layout(props) {
  return (
    <Container fluid>
      <Row>
        <Col id="leftcol" md={4} xxl={3} className="offset-xl-1 offset-xxl-2">
          <header>
            <Navigation />
          </header>
        </Col>
        <Col
          id="rightcol"
          md={8}
          xl={6}
          xxl={5}
          className="offset-md-4 offset-xl-5"
        >
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
