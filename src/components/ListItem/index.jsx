import { memo } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

export default memo(function ListItem(props) {
  return (
    <>
      {props.data.value &&
        (props.data.path ? (
          <Link to={props.data.path}>
            <div onClick={props.closeTray}>{props.data.value}</div>
          </Link>
        ) : (
          props.data.value
        ))}
      {props.data.children && (
        <Collapse in={props.data.isOpen} appear unmountOnExit>
          <ul>
            {props.data.children.map((li) => {
              const openable = li.children && li.children.length > 0;
              return (
                <li
                  key={li.id}
                  className={`${li.isOpen ? "opened " : ""} ${
                    openable ? "openable" : ""
                  }`}
                >
                  <button
                    tabIndex={openable ? "0" : "-1"}
                    onClick={(e) => props.openListItem(e, li.idPath)}
                  >
                    <ListItem
                      {...props}
                      key={li.id + "li"}
                      data={li}
                      openListItem={props.openListItem}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </Collapse>
      )}
    </>
  );
});
