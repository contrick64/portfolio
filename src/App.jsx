import { useEffect, useRef, useState } from "react";
import { Button, Collapse, Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.scss";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Home from "./Pages/Home.mdx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
}
