import { useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListIcon from "../../img/ListIcon";
import CPMLogo from "../CPMLogo";

export default function MyNav() {
  const [lightIsOn, setLightIsOn] = useState(false);
  return (
    <Navbar className={lightIsOn ? "navdark" : "navlight"}>
      <div className="brandholder">
        <Navbar.Brand>
          <Link id="title" to="/">
            <CPMLogo
              lightIsOn={lightIsOn}
              changeLight={(bool) => setLightIsOn(bool)}
            />
          </Link>
        </Navbar.Brand>
        <div id="subtitle">
          <p>designer, artist, developer, etc.</p>
          <p>
            <a className="link" href="mailto:connor@murphysites.com">
              connor@murphysites.com
            </a>
          </p>
        </div>
      </div>
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
    </Navbar>
  );
}
