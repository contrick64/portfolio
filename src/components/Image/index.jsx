import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function (props) {
  return (
    <div {...props} className={props.className + " zoom-img"}>
      <Zoom>
        <img src={props.src} alt={props.alt} />
      </Zoom>
    </div>
  );
}
