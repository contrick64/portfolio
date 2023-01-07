import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import List from "../List";

export default function Layout(props) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <List data={props.list} openList={props.openList} />
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
