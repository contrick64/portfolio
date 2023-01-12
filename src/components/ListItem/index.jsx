import { nanoid } from "nanoid";
import { memo, useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

function ListItem(props) {
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
                  className={`${li.isOpen ? "opened " : ""} ${
                    li.children && li.children.length > 0 ? "openable" : ""
                  }`}
                  onClick={(e) => props.openList(e, li.idPath)}
                >
                  <MemoListItem
                    key={li.id}
                    data={li}
                    openList={props.openList}
                  />
                </li>
              );
            })}
          </ul>
        </Collapse>
      )}
    </>
  );
}

const MemoListItem = memo(ListItem);

export default MemoListItem;
