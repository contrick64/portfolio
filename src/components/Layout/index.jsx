import { Link, Outlet } from "react-router-dom";
import { Button, Col, Collapse, Container, Navbar, Row } from "react-bootstrap";
import List from "../List";
import { useEffect, useState } from "react";
import ListIcon from "../../img/ListIcon.jsx";

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
      <Row>
        <Col id="leftcol" md={4}>
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Link id="title" to="/">
                  Connor Murphy
                </Link>
              </Navbar.Brand>
              <div className="hide-md">
                <Button
                  className="p-0 px-1"
                  variant="outline-dark"
                  onClick={() => setOpen(!open)}
                  aria-controls="collapse-list"
                  aria-expanded={open}
                >
                  <ListIcon />
                </Button>
              </div>
            </Container>
          </Navbar>
          <Collapse in={open}>
            <div>
              <Container id="collapse-list">
                <List />
              </Container>
            </div>
          </Collapse>
        </Col>
        <Col id="rightcol">
          <Container>
            <Outlet />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
