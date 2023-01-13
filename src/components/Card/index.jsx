import { Card } from "react-bootstrap";

function CardImage(props) {
  return <Card.Img variant="top" src={props.src} alt={props.alt} />;
}

export default function MyCard(props) {
  return (
    <Card>
      {props.href ? (
        <a target="_blank" href={props.href}>
          <CardImage src={props.src} alt={props.alt} />
        </a>
      ) : (
        <CardImage src={props.src} alt={props.alt} />
      )}
      <Card.Body>
        {props.title && <Card.Title>{props.title}</Card.Title>}
        {props.text && <Card.Text>{props.text}</Card.Text>}
      </Card.Body>
    </Card>
  );
}
