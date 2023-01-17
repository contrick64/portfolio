import { useState } from "react";

export default function AsciiCat(props) {
  const [catState, setCatState] = useState(Math.floor(Math.random() * 5));
  function catMove() {
    setCatState((prev) => {
      const newState = Math.abs(
        (prev + (Math.round(Math.random()) - 0.5) * 2) % 5
      );
      return newState;
    });
  }
  const cat = [
    `   /\\_/\\
  / 0_0 \\
  \\  ^  /
  /  ~ {
 /_|| ||
{_ \\|_||
L_\\_{_{_>       `,
    `

           /\\_/\\
     ___  / 0_0 \\
 ,-'\`   \`'\\  ^  /
/   __   /     |
\\=----'----'-^-'`,
    `
    

     ___
 ,-'\`   \`'-/\\_/\\
/   __  / { _ _ }
\\=----'----'-^-'`,
    `

           /\\_/\\
     ___  / n_n \\
 ,-'\`   \`'\\  ^  /
/   __   /     |
\\=----'----'-^-'`,
    `   /\\_/\\
  / n_n \\
  \\  ^  /
  /  ~ {
 /_|| ||
{_ \\|_||
L_\\_{_{_>       `,
  ];
  return <pre onClick={catMove}>{cat[catState]}</pre>;
}
