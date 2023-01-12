import { useRef, useState } from "React";

export default function FrameWrapper(props) {
  const ref = useRef();
  const [height, setHeight] = useState("0px");
  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };
  return (
    <iframe
      ref={ref}
      onLoad={onLoad}
      id={props.id}
      src={props.src}
      width="100%"
      height={height}
      style={{
        maxWidth: 640,
        width: "100%",
        overflow: "auto",
      }}
    />
  );
}
