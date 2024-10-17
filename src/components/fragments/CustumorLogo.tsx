import { customerLogoData } from "@/common/datas";
import { Link } from "react-router-dom";

const CustumorLogo = () => {
  return (
    <section className="bg-background py-6 lg:py-12">
      <div className="grid grid-cols-2 gap-4 text-foreground sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
        {customerLogoData.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex justify-center items-center"
          >
            {item.logo}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CustumorLogo;
