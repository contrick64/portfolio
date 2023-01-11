import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
      {/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
    </div>
  );
}
