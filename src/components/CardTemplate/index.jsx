import { Card } from "react-bootstrap";

export default function CardTemplate(props) {
  function CardImage() {
    return (
      <Card.Img
        className={props.path ? "clickable" : ""}
        variant="top"
        src={props.imgSrc}
        alt={props.alt}
      />
    );
  }
  return (
    <Card>
      {props.path ? (
        <a target="_blank" href={props.path}>
          <CardImage src={props.imgSrc} alt={props.alt} />
        </a>
      ) : (
        <CardImage src={props.imgSrc} alt={props.alt} />
      )}
      <Card.Body>
        {props.title && <Card.Title>{props.title}</Card.Title>}
        {props.text && <Card.Text>{props.text}</Card.Text>}
      </Card.Body>
    </Card>
  );
}
