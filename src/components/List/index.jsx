import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "./index.scss";

export default function List(props) {
  const listElements = (
    <>
      {props.data.value && props.data.path ? (
        <Link to={props.data.path}>{props.data.value}</Link>
      ) : (
        props.data.value
      )}
      {props.data.children && props.data.isOpen && (
        <ul>
          {props.data.children.map((li) => {
            return (
              <li
                key={nanoid()}
                className={`${li.isOpen ? "opened " : ""} ${
                  li.children.length ? "openable" : ""
                }`}
                onClick={(e) => props.openList(e, li.id)}
              >
                <List data={li} openList={props.openList} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
  return <div className="list">{listElements}</div>;
}
