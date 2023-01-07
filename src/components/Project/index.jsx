import { useParams } from "react-router-dom";
import Project2 from "../../Pages/Project2";

export default function Project(props) {
  const { id } = useParams();
  return <Project2></Project2>;
}
