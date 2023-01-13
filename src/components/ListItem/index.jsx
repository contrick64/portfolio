import { nanoid } from "nanoid";
import { memo, useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

export default memo(function ListItem(props) {
  return (
    <>
      {props.data.value &&
        (props.data.path ? (
          <Link to={props.data.path}>{props.data.value}</Link>
        ) : (
          props.data.value
        ))}
      {props.data.children && (
        <Collapse in={props.data.isOpen} appear unmountOnExit>
          <ul>
            {props.data.children.map((li) => {
              return (
                <li
                  key={li.id}
                  className={`${li.isOpen ? "opened " : ""} ${
                    li.children && li.children.length > 0 ? "openable" : ""
                  }`}
                  onClick={(e) => props.openList(e, li.idPath)}
                >
                  <ListItem data={li} openList={props.openList} />
                </li>
              );
            })}
          </ul>
        </Collapse>
      )}
    </>
  );
});
