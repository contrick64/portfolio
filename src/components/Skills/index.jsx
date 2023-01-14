import { nanoid } from "nanoid";
import "./index.scss";

export default function Skills(props) {
  const icons = [
    "React",
    "Bootstrap",
    "WordPress",
    "MySQL",
    "GitHub",
    "PHP",
    "Illustrator",
    "Photoshop",
    "Premiere Pro",
    "Figma",
    "Sass",
    "Markdown",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Raspberry Pi",
  ];

  function handleImgError(e) {
    const currentSrc = e.currentTarget.src;
    if (currentSrc.match("-original")) {
      e.currentTarget.src = currentSrc.replace("-original", "-plain");
    } else {
      e.currentTarget.src = currentSrc.replace("-plain", "-line");
    }
  }
  const iconElements = [
    ...icons.map((icon) => {
      const iconName = icon.replace(/\s+/g, "").toLowerCase();
      return (
        <div className="icon">
          {/* <i
            key={nanoid()}
            className={`devicon-${iconName}-plain colored`}
          /> */}
          <img
            onError={handleImgError}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`}
          />
          <p>{icon}</p>
        </div>
      );
    }),
    <div className="icon">
      <svg
        role="img"
        aria-label="MDX"
        class="icon icon-mdx"
        viewBox="0 0 138 57"
        width="69"
        height="28.5"
      >
        <title>MDX</title>
        <g>
          <rect
            width="136.5"
            height="55.5"
            x=".75"
            y=".75"
            rx="4.5"
            fill="#0969da"
          ></rect>
          <g fill="none" stroke="white" stroke-width="6">
            <path d="M16.5 44V19L30.25 32.75l14-14v25"></path>
            <path d="M70.5 40V10.75"></path>
            <path d="M57 27.25L70.5 40.75l13.5-13.5"></path>
            <path d="M122.5 41.24L93.25 12M93.5 41.25L122.75 12"></path>
          </g>
        </g>
      </svg>
      <p>MDX</p>
    </div>,
  ];
  return <div className="iconholder">{iconElements}</div>;
}
