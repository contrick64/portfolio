import { useEffect, useState } from "react";
import { Button, Collapse, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListIcon from "../../img/ListIcon";
import CPMLogo from "../CPMLogo";
import List from "../List";
import SocialIcons from "../SocialIcons";

export default function Navigation() {
  const [lightIsOn, setLightIsOn] = useState(false);
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

  function toggleTray(bool = !open) {
    if (dimensions.width < 768) {
      setOpen(() => bool);
    }
  }

  useEffect(() => {
    if (dimensions.width >= 768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [dimensions]);
  return (
    <>
      <Navbar className={lightIsOn ? "navdark" : "navlight"}>
        <div className="brandholder">
          <Navbar.Brand>
            <Link id="title" to="/" onClick={() => toggleTray(false)}>
              <CPMLogo
                lightIsOn={lightIsOn}
                changeLight={(bool) => setLightIsOn(bool)}
              />
            </Link>
          </Navbar.Brand>
          <SocialIcons />
        </div>
        <div className="hide-md">
          <Button
            className="p-0 px-1"
            variant="outline-dark"
            onClick={() => setOpen((prev) => !prev)}
            aria-controls="collapse-list"
            aria-expanded={open}
            aria-label="expand navigation"
          >
            <ListIcon />
          </Button>
        </div>
      </Navbar>
      <Collapse in={open}>
        <div className="nav-tray">
          <Container id="collapse-list">
            <List closeTray={() => toggleTray(false)} />
          </Container>
        </div>
      </Collapse>
    </>
  );
}
