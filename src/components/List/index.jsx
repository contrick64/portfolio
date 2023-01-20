import { nanoid } from "nanoid";
import { memo, useEffect, useState } from "react";
import config from "../../Pages/config.yaml";
import ListItem from "../ListItem";

export default memo(function List() {
  const [list, setList] = useState(() => ({
    isOpen: true,
    children: config,
  }));

  function openListItem(e, path) {
    e.stopPropagation();
    setList((prevList) => getNestedUpdate(prevList, path));
  }

  const getNestedUpdate = (state, path) => {
    const idArray = path ? path.split(" ") : [];

    if (idArray.length === 0) {
      return {
        ...state,
        isOpen: state.children.length > 0 && !state.isOpen,
      };
    }

    const level = idArray[0];
    const newArray = idArray.slice(1);
    const newPath = newArray.join(" ");

    return {
      ...state,
      children: state.children.map((item) =>
        item.id === level ? getNestedUpdate(item, newPath) : { ...item }
      ),
    };
  };
  useEffect(() => {
    function recursiveId(state, id) {
      return state.children.map((item) => {
        const newId = nanoid();
        const idPath = `${id ? id + " " : ""}${newId}`;
        let myChildren = [];
        if (item.children) {
          myChildren = recursiveId(item, idPath);
        }
        return {
          ...item,
          id: newId,
          idPath: idPath,
          children: myChildren,
        };
      });
    }
    setList((prev) => ({
      ...prev,
      children: recursiveId(list),
    }));
  }, []);
  return <ListItem key="topList" data={list} openListItem={openListItem} />;
});
