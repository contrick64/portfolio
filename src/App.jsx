import { nanoid } from "nanoid";
import { lazy, useEffect, useList, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Home from "./Pages/Home";

export default function App() {
  const [list, setList] = useState({});

  useEffect(() => {
    const testList = {
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
              path: "Project1",
              isOpen: false,
              children: [],
            },
            {
              id: 2,
              value: "React 2",
              path: "Project2",
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
    };
    setList(testList);
  }, []);

  function openList(e, id) {
    e.stopPropagation();
    setList((prevList) => {
      const newChildren = prevList.children.map((item) => {
        if (item.id === id) return { ...item, isOpen: !item.isOpen };
        return item;
      });
      const newList = { ...prevList, children: newChildren };
      return newList;
    });
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout list={list} openList={openList} />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
}
