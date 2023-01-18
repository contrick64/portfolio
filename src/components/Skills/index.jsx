import { nanoid } from "nanoid";
import "./index.scss";

export default function Skills(props) {
  const mdxIcon = (
    <div className="icon" key="mdxicon">
      <svg fill="currentColor" viewBox="0 0 69 28.5">
        <path
          d="M66.4,0.4H2.6c-1.2,0-2.2,1-2.2,2.2v23.2c0,1.2,1,2.2,2.2,2.2h63.8c1.2,0,2.2-1,2.2-2.2V2.6C68.6,1.4,67.6,0.4,66.4,0.4z
			 M23.6,21.9h-3V13l-5.5,5.5l-5.4-5.4V22h-3V5.9l8.4,8.4l8.5-8.5V21.9z M35.2,22.5l-7.8-7.8l2.1-2.1l4.2,4.2V5.4h3v11.4l4.2-4.2
			l2.1,2.1L35.2,22.5z M62.3,19.6l-2.1,2.1L54,15.5l-6.2,6.2l-2.1-2.1l6.2-6.2l-6.3-6.3l2.1-2.1l6.3,6.3l6.3-6.3l2.1,2.1l-6.3,6.3
			L62.3,19.6z"
        />
      </svg>
      <p>MDX</p>
    </div>
  );
  const icons = [
    "React",
    "Bootstrap",
    "WordPress",
    mdxIcon,
    "MySQL",
    "Figma",
    "Sass",
    "PHP",
    "Illustrator",
    "Photoshop",
    "Premiere Pro",
    "GitHub",
  ];

  function handleImgError(e) {
    let newSrc = "";
    const currentSrc = e.currentTarget.src;
    if (currentSrc.match("-plain")) {
      newSrc = currentSrc.replace("-plain", "-line");
    } else if (currentSrc.match("-line")) {
      newSrc = currentSrc.replace("-line", "-original");
    } else {
      newSrc = currentSrc.replace("-original", "-plain");
    }
    e.currentTarget.src = newSrc;
  }
  const iconElements = icons.map((icon) => {
    if (typeof icon == "string") {
      const iconName = icon.replace(/\s+/g, "").toLowerCase();
      return (
        <div className="icon" key={nanoid()}>
          <i className={`devicon-${iconName}-${props.variant}`} />
          {/* <img
              onError={handleImgError}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-${props.variant}.svg`}
            /> */}
          <p>{icon}</p>
        </div>
      );
    } else if (typeof icon == "object") {
      return icon;
    } else return;
  });
  return <div className={`iconholder`}>{iconElements}</div>;
}
