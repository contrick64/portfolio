export default function List(props) {
  const listElements = (
    <ul className="main-list">
      {props.data.map((li) => {
        return <li>{li.value}</li>;
      })}
    </ul>
  );
  return (
    <div>
      <div>{listElements}</div>
    </div>
  );
}
