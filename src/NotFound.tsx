import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/");
  };

  return (
    <section className="bg-background w-full h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight text-primary font-extrabold lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light ">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Button onClick={handleButton}>Back to Homepage</Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
