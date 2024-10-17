import appStore from "../../assets/appStoreBlack.svg";
import macStore from "../../assets/macStoreBlack.svg";

const MobileAvailable = () => {
  return (
    <section className="bg-background py-8 lg:py-16">
      <div className="flex items-center justify-center gap-8">
        <div className="flex justify-center flex-col">
          <p className="eading-7 text-muted-foreground text-sm [&:not(:first-child)]:mt-3 uppercase">
            Shopier Mobile
          </p>
          <h2 className="scroll-m-20 text-3xl text-foreground font-semibold tracking-tight">
            Check us at App Store and Google Play!
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <img src={appStore} alt="" />
          <img src={macStore} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MobileAvailable;
