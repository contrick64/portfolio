import Markdown from "react-markdown";
import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";

export default function Project(props) {
  const params = useParams();
  const id = params.id;
  const fileName = id.charAt(0).toUpperCase() + id.slice(1);
  // REMOVED IN FAVOR OF MARKDOWN:

  const Content = lazy(() => {
    try {
      const page = import(`../../Pages/${fileName}.mdx`);
      return page;
    } catch {
      return <h1>Not Found</h1>;
    }
  });
  return (
    <>
      <Suspense>
        <Content />
      </Suspense>
    </>
  );

  // const [postMarkdown, setPostMarkdown] = useState("");
  // const errMarkdown = `# Not Found
  // Try a different link!`;

  // useEffect(() => {
  //   import(`../../Pages/${id}.mdx`)
  //     .then((file) => {
  //       fetch(file.default)
  //         .then((res) => res.text())
  //         .then((text) => setPostMarkdown(text))
  //         .catch((err) => console.log(err));
  //     })
  //     .catch(() => setPostMarkdown(errMarkdown));
  // }, []);

  // return (
  //   <div>
  //     <Markdown remarkPlugins={[remarkMdx]}>{postMarkdown}</Markdown>
  //     {/* <MDXProvider>{postMarkdown}</MDXProvider> */}
  //   </div>
  // );
}
