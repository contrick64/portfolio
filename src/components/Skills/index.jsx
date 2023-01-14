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
    "Figma",
    "Sass",
    "Markdown",
    "JavaScript",
    "Illustrator",
    "Photoshop",
    "Premiere Pro",
    "HTML5",
    "CSS3",
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
  const iconElements = [
    ...icons.map((icon) => {
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
    }),
    // <div className="icon">
    //   <svg
    //     role="img"
    //     aria-label="MDX"
    //     class="icon icon-mdx"
    //     viewBox="0 0 138 57"
    //     width="69"
    //     height="28.5"
    //   >
    //     <title>MDX</title>
    //     <g>
    //       <rect
    //         width="136.5"
    //         height="55.5"
    //         x=".75"
    //         y=".75"
    //         rx="4.5"
    //         fill="#ffffff"
    //       ></rect>
    //       <mask>
    //         <g fill="none" stroke-width="6">
    //           <path d="M16.5 44V19L30.25 32.75l14-14v25"></path>
    //           <path d="M70.5 40V10.75"></path>
    //           <path d="M57 27.25L70.5 40.75l13.5-13.5"></path>
    //           <path d="M122.5 41.24L93.25 12M93.5 41.25L122.75 12"></path>
    //         </g>
    //       </mask>
    //     </g>
    //   </svg>
    //   <p>MDX</p>
    // </div>,
  ];
  return <div className="iconholder">{iconElements}</div>;
}
