import { priceData } from "@/common/datas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const Price = () => {
  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center gap-10">
        <h1 className="scroll-m-20 text-3xl font-extrabold text-center tracking-tight lg:text-5xl ">
          Designed for business teams like yours
        </h1>
        <h4 className="scroll-m-20 text-base max-w-screen-sm mx-auto text-center text-foreground font-medium tracking-tight">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </h4>
        <div className="flex justify-center items-center gap-14 pt-8">
          {priceData.map((item, index) => (
            <Card key={index} className="w-[350px]">
              <CardHeader className="flex flex-col justify-center items-center">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-center">
                  {item.description}
                </CardDescription>
                <div className="flex justify-center pt-5 gap-1">
                  <span className="text-5xl font-semibold">
                    {currency.format(item.price)}
                  </span>
                  <span className="flex items-end">/month</span>
                </div>
              </CardHeader>
              {item.priceProfits.map((item, index) => (
                <CardContent
                  key={index}
                  className="flex justify-start items-center gap-5 ml-3"
                >
                  <i>{item.icon}</i>
                  <p>{item.text}</p>
                </CardContent>
              ))}
              <CardFooter className="pt-3">
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
