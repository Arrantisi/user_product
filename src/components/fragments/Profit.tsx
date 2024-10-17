import { profitDataBuyers, profitDataSales } from "@/common/datas";

const Profit = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-screen-lg p-8 mx-auto md:grid md:grid-cols-2 md:py-10 md:px-16">
        <div className="flex flex-col justify-center border-border md:border-r  ">
          <h2 className="scroll-m-20 text-3xl text-foreground text-center font-semibold tracking-tight pb-5 lg:pb-10">
            For Sellers
          </h2>
          <div className="flex flex-col gap-5 lg:gap-10 pb-8 lg:pb-16">
            {profitDataSales.map((item, index) => (
              <div
                className="flex justify-center items-center gap-5"
                key={index}
              >
                <div className="h-full px-1">
                  <div className="rounded-full bg-background w-10 h-10 p-4 flex items-center justify-start flex-col lg:h-12 lg:w-12">
                    {item.logo}
                  </div>
                </div>
                <div>
                  <h3 className="scroll-m-20 text-2xl font-semibold text-background tracking-tight">
                    {item.title}
                  </h3>
                  <p className="eading-7 text-foreground [&:not(:first-child)]:mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center pl-8 lg:pl-16">
          <h2 className="scroll-m-20 text-3xl text-foreground text-center font-semibold tracking-tight pb-5 lg:pb-10">
            For Buyers
          </h2>
          <div className="flex flex-col gap-5 lg:gap-10 pb-8 lg:pb-16">
            {profitDataBuyers.map((item, index) => (
              <div
                className="flex justify-center items-center gap-5"
                key={index}
              >
                <div className="h-full px-1">
                  <div className="rounded-full bg-background w-10 h-10 p-4 flex items-center justify-start flex-col lg:h-12 lg:w-12">
                    {item.logo}
                  </div>
                </div>
                <div>
                  <h3 className="scroll-m-20 text-2xl font-semibold text-background tracking-tight">
                    {item.title}
                  </h3>
                  <p className="eading-7 text-foreground [&:not(:first-child)]:mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profit;
