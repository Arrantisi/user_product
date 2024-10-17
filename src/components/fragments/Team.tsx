import { teamData } from "@/common/datas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Team = () => {
  return (
    <div className="bg-background py-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Our Team
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-3 text-center pb-10">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
        <Swiper
          spaceBetween={30}
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            1028: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="grid "
        >
          {teamData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="flex justify-center items-center w-[700px]">
                <CardHeader className="w-[350px]">
                  <img src={item.foto} alt="foto team" />
                </CardHeader>
                <div className="flex justify-center flex-col">
                  <CardContent className="flex flex-col justify-center items-start gap-3 pt-5">
                    <CardTitle className="text-start">{item.name}</CardTitle>
                    <CardDescription className="text-start">
                      {item.role}
                    </CardDescription>
                    <p className="leading-7 [&:not(:first-child)]:mt-3 text-start">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-start items-center gap-3">
                    {item.icons.map((item, index) => (
                      <div
                        key={index}
                        className="hover:opacity-70 cursor-pointer"
                      >
                        {item.icon}
                      </div>
                    ))}
                  </CardFooter>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
