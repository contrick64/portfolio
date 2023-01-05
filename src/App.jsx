import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import List from "./components/List";
import "./App.scss";

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
          ],
        },
        {
          id: 1,
          value: "Design",
          isOpen: false,
          children: [],
        },
      ],
    });
  }, []);

  function openList(id) {
    setState((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === id) return { ...item, isOpen: !item.isOpen };
        return item;
      });
      return newState;
    });
  }

  return (
    <Container className="App">
      Test text
      <List data={state} openList={openList} />
    </Container>
  );
}
