import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "./index.scss";

export default function ListItem(props) {
  return (
    <>
      {props.data.value &&
        (props.data.path ? (
          <Link to={props.data.path}>{props.data.value}</Link>
        ) : (
          props.data.value
        ))}
      {props.data.children && props.data.isOpen && (
        <ul>
          {props.data.children.map((li) => {
            return (
              <li
                key={nanoid()}
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
      )}
    </>
  );
}
