import { nanoid } from "nanoid";

// THIS DOES NOT WORK, BECAUSE YOU CLICK THE CONTAINER ELEMENT
// WHENEVER YOU CLICK THE INNER ELEMENT

export default function List(props) {
  const listElements = (
    <div className="list">
      {props.data.value && props.data.value}
      {props.data.children && props.data.isOpen && (
        <ul className="main-list">
          {props.data.children.map((li) => {
            return (
              <li
                key={nanoid()}
                className={`${li.isOpen ? "open" : ""}`}
                onClick={() => props.openList(li.id)}
              >
                <List data={li} openList={props.openList} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
  return (
    <div>
      <div>{listElements}</div>
    </div>
  );
}
