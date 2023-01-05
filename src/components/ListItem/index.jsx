export default function ListItem(props) {
  return (
    <li
      className={`${props.isOpen ? "open" : ""}`}
      onClick={() => props.openList(props.id)}
    >
      {props.value}
    </li>
  );
}
