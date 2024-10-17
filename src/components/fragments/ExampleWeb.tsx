import { exampleData } from "@/common/datas";
import web from "../../assets/webite.png";
import { Button } from "../ui/button";

const ExampleWeb = () => {
  return (
    <div className="bg-primary py-8 lg:py-16">
      <div className="container mx-auto grid lg:grid-cols-2">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl text-background font-extrabold tracking-tight lg:text-5xl pb-5">
            Your Own Store
          </h1>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            You can create your own store and start selling immediately!
          </h4>
          <div className="flex justify-center items-center py-6 lg:py-12">
            <img src={web} alt="web" className="h-[350px] blur-sm shadow-lg" />
          </div>
          <Button variant={"outline"} size={"lg"}>
            See it in Action
          </Button>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 lg:gap-8 pl-6 lg:pl-12">
          {exampleData.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="mb-2 text-xl font-bold text-background">
                {item.title}
              </h3>
              <p className="text-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExampleWeb;
