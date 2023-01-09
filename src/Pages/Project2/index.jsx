import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Project2(props) {
  // const [markdown, setMarkdown] = useState("");
  // useEffect(() => {
  //   fetch(markdownFile)
  //     .then((res) => res.text())
  //     .then((text) => setMarkdown(text));
  // }, []);

  const markdown = `# Test Post
  some text, some *italics*
  `;

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} />
    </div>
  );
}
