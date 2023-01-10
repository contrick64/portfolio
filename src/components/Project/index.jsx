import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const params = useParams();
  const id = params.id;
  const fileName = id.charAt(0).toUpperCase() + id.slice(1);

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
}
