import { reasonData } from "@/common/datas";

const Reason = () => {
  return (
    <section className="bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-16">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground">
            Designed for business teams like yours
          </h2>
          <p className="text-foreground">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          {reasonData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12">
                {item.logo}
              </div>
              <h3 className="mb-2 text-xl font-boldforetext-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reason;
