import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Home from "./Pages/Home.mdx";
import config from "./Pages/config.yaml";
import { nanoid } from "nanoid";

export default function App() {
  console.log("updated");
  const [list, setList] = useState({});

  useEffect(() => {
    function recursiveId(array) {
      return array.map((item) => {
        let myChildren = [];
        if (item.children) {
          myChildren = recursiveId(item.children);
        }
        return {
          ...item,
          id: nanoid(),
          isOpen: false,
          children: myChildren,
        };
      });
    }
    const newConfig = recursiveId(config);
    setList({
      isOpen: true,
      children: newConfig,
    });
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
      {/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
    </div>
  );
}
