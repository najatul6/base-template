import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">Error</div>
    </div>
  );
}

export default Error