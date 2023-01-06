import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import List from "./components/List";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Project1 from "./Pages/Project1";

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState({
      isOpen: true,
      children: [
        {
          id: 0,
          value: "React",
          isOpen: false,
          children: [
            {
              id: 1,
              value: "React 1",
              isOpen: false,
              children: [],
            },
            {
              id: 2,
              value: "React 2",
              isOpen: false,
              children: [],
            },
          ],
        },
        {
          id: 8,
          value: "Design",
          isOpen: false,
          children: [
            {
              id: 6,
              value: "Design 1",
              isOpen: false,
              children: [],
            },
          ],
        },
      ],
    });
  }, []);

  function openList(e, id) {
    e.stopPropagation();
    setState((prevState) => {
      const newChildren = prevState.children.map((item) => {
        if (item.id === id) return { ...item, isOpen: !item.isOpen };
        return item;
      });
      const newState = { ...prevState, children: newChildren };

      console.log(newState);
      return newState;
    });
  }

  return (
    <Container className="App">
      <Row>
        <Col>
          <List data={state} openList={openList} />
        </Col>
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project1" element={<Project1 />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
