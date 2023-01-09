import { lazy, Suspense, useState } from "react";
import { useParams } from "react-router-dom";

export default function Project(props) {
  const { id } = useParams();
  const Content = lazy(() => {
    try {
      const page = import(`../../Pages/${id}`);
      return page;
    } catch {
      return import("../../Pages/NotFound");
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
