import { ArrowRight, FlameKindling, Instagram, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import profile from "../../assets/profile.webp";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import CustumorLogo from "./CustumorLogo";

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleButton = (): void => {
    toast({
      title: "Information: IMPORTANT",
      description: "selamat datang di website kami",
    });

    navigate("/product");
  };

  return (
    <section className="bg-background py-20">
      <div className="grid container px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <div className="flex justify-start items-center gap-4">
            <Button variant={"ghost"} size={"lg"} className="flex gap-4">
              Get started <ArrowRight size={18} />
            </Button>
            <Button variant={"default"} size={"lg"} onClick={handleButton}>
              Speak to Sales
            </Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center relative">
          <div className="absolute hidden  justify-between flex-col py-5 gap-3 rounded-full border border-border top-1/3 -right-14">
            <div className="flex justify-center items-center hover:opacity-70 cursor-pointer px-3 pb-5 ">
              <Instagram />
            </div>
            <div className="flex justify-center items-center hover:opacity-70 cursor-pointer px-3 pb-5">
              <Rocket />
            </div>
            <div className="flex justify-center items-center hover:opacity-70 cursor-pointer px-3">
              <FlameKindling />
            </div>
          </div>
          <img
            src={profile}
            alt="mockup"
            className="rounded-full h-80 w-80 lg:h-[450px] lg:w-[450px] "
          />
        </div>
      </div>
      <CustumorLogo />
    </section>
  );
};

export default Hero;
