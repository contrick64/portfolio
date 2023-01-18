import { Button, Card } from "react-bootstrap";

export default function ImgCard(props) {
  return (
    <div className="img-card">
      <img src={props.imgSrc} />
      <div className="img-card-hover">
        <div className="img-card-hover-content">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
        {(props.path || props.live || props.github) && (
          <div className="buttonholder">
            {props.path && (
              <Button target="_self" variant="outline-light" href={props.path}>
                Read More
              </Button>
            )}
            {props.live && (
              <Button variant="outline-light" href={props.live}>
                Visit Site
              </Button>
            )}
            {props.github && (
              <Button variant="outline-light" href={props.github}>
                View Github
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
