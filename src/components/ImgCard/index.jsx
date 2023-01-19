import { Button } from "react-bootstrap";

export default function ImgCard(props) {
  return (
    <div className="img-card" {...props}>
      <img src={props.imgSrc} alt={props.alt} />
      <div className="img-card-hover">
        <div className="img-card-hover-content">
          <h3>{props.title}</h3>
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
