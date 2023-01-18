import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";

export default function CardBox(props) {
  return (
    <Container>
      <Row className="cardbox">
        {props.children.map((child) => {
          return (
            <Col xs={6} className="mb-3">
              {child}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
