import { Link, Outlet } from "react-router-dom";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import List from "../List";
import { useEffect, useState } from "react";
import ListIcon from "../../img/ListIcon.jsx";
import CPMLogo from "../CPMLogo";
import MyNav from "../MyNav";

export default function Layout(props) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  useEffect(() => {
    if (dimensions.width >= 768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [dimensions]);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col id="leftcol" md={4} xxl={3}>
          <MyNav />
          <Collapse in={open}>
            <div className="nav-tray">
              <Container id="collapse-list">
                <List />
              </Container>
            </div>
          </Collapse>
        </Col>
        <Col md={8} xl={6} xxl={5} id="rightcol">
          <div className="projectholder">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
