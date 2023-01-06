import { nanoid } from "nanoid";
import "./index.scss";

//Solution?
//generate list from folder tree?
//  -use url params to generate routes?

export default function List(props) {
  const listElements = (
    <>
      {props.data.value && props.data.value}
      {props.data.children && props.data.isOpen && (
        <ul className="main-list">
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
