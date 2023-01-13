import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function (props) {
  return (
    <Zoom>
      <img src={props.src} alt={props.alt} />
    </Zoom>
  );
}
