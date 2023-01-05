import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import List from "./components/List";
import "./App.scss";

export default function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState([
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
    ]);
  }, []);

  return (
    <Container className="App">
      Test text
      <List data={state} />
    </Container>
  );
}
