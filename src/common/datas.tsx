import {
  Airbnb,
  Google,
  Mailchimp,
  Mashble,
  Microsoft,
  Spotify,
} from "@/assets/svgHero";
import { Basket } from "@/assets/svgProfit/buyers";
import { Card, Chart, Location } from "@/assets/svgProfit/sales";
import { Bussines, Finance, Oparation } from "@/assets/svgReason";
import {
  Calendar,
  Check,
  Dribbble,
  Github,
  Instagram,
  Shield,
  Twitter,
} from "lucide-react";
import { ReactNode } from "react";

type ReasonData = {
  logo: ReactNode;
  title: string;
  description: string;
};

type CustumorLogoData = {
  link: string;
  logo: ReactNode;
};

type ProfitData = {
  logo: ReactNode;
  title: string;
  description: string;
};

type ExampleData = {
  title: string;
  description: string;
};

type SocialIcon = {
  icon: ReactNode;
};

type TeamData = {
  foto: string;
  name: string;
  role: string;
  description: string;
  icons: SocialIcon[];
};

type PriceProfit = {
  icon: ReactNode;
  text: string;
};

type PriceData = {
  title: string;
  description: string;
  price: number;
  priceProfits: PriceProfit[];
};

export const reasonData: ReasonData[] = [
  {
    logo: <Finance />,
    title: "Works everywhere",
    description:
      "Your customers can easily view your products from their computers or mobile devices and they start purchasing without having to sign up to Shopier.",
  },
  {
    logo: <Bussines />,
    title: "Works everywhere",
    description:
      "Whether your customer starts to shop on your social media account or on your website, payment is done with a single click on your customized pages and conversion rate increases.",
  },
  {
    logo: <Finance />,
    title: "Easy to use",
    description:
      "Shopier is easy to use both for you and your customers on any platform you want. You have a customized store with your exclusive content and products.",
  },
  {
    logo: <Oparation />,
    title: "Makes selling faster",
    description:
      "The checkout process starts automatically when your customers visit your shop and your sales accelerate without the need to contact your customer",
  },
];

export const customerLogoData: CustumorLogoData[] = [
  {
    link: "https://www.airbnb.com/",
    logo: <Airbnb />,
  },
  {
    link: "https://www.google.com/",
    logo: <Google />,
  },
  {
    link: "https://www.microsoft.com/",
    logo: <Microsoft />,
  },
  {
    link: "https://www.spotify.com/",
    logo: <Spotify />,
  },
  {
    link: "https://www.mailchimp.com/",
    logo: <Mailchimp />,
  },
  {
    link: "https://www.mashable.com/",
    logo: <Mashble />,
  },
];

export const profitDataSales: ProfitData[] = [
  {
    logo: <Chart />,
    title: "Sales generetion",
    description:
      "Your followers in your social media accounts become your customers",
  },
  {
    logo: <Card />,
    title: "Sales generetion",
    description:
      "Your followers in your social media accounts become your customers",
  },
  {
    logo: <Location />,
    title: "Sales generetion",
    description:
      "Your followers in your social media accounts become your customers",
  },
];

export const profitDataBuyers: ProfitData[] = [
  {
    logo: <Basket />,
    title: "Easy to Use",
    description: "You can easily shop from sellers you follow on your accounts",
  },
  {
    logo: <Shield />,
    title: "Secure Payments",
    description:
      "Your credit card & debit card transactions are signed and secured.",
  },
  {
    logo: <Calendar />,
    title: "Pay by Installments",
    description:
      "You can pay by installments with your credit (available in some markets only).",
  },
];

export const exampleData: ExampleData[] = [
  {
    title: "No monthly fee / No sign up fee",
    description:
      "Sign up to Shopier for free and start using your store in minutes without paying any monthly fees.",
  },
  {
    title: "Customize your store",
    description:
      "Customize your store with your logo, store banners and announcements about your business or brand.",
  },
  {
    title: "List your items",
    description: "Start listing items and creating content on your store.",
  },
  {
    title: "You are ready to sell",
    description:
      "You are ready to sell now! Your customers can visit your store on their computers or mobile devices and you are ready to getting orders.",
  },
];

export const teamData: TeamData[] = [
  {
    foto: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    name: "Bonnie Green",
    role: "CEO & Web Developer",
    description:
      "Bonnie drives the technical strategy of the flowbite platform and brand.",
    icons: [
      { icon: <Instagram size={20} /> },
      { icon: <Twitter size={20} /> },
      { icon: <Github size={20} /> },
      { icon: <Dribbble size={20} /> },
    ],
  },
  {
    foto: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    name: "Jese Leos",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    icons: [
      { icon: <Instagram size={20} /> },
      { icon: <Twitter size={20} /> },
      { icon: <Github size={20} /> },
      { icon: <Dribbble size={20} /> },
    ],
  },
  {
    foto: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    name: "Michael Gough",
    role: "Senior Front-end Developer",
    description:
      "Michael drives the technical strategy of the flowbite platform and brand.",
    icons: [
      { icon: <Instagram size={20} /> },
      { icon: <Twitter size={20} /> },
      { icon: <Github size={20} /> },
      { icon: <Dribbble size={20} /> },
    ],
  },
  {
    foto: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    name: "Lana Byrd",
    role: "Marketing & Sale",
    description:
      "Lana drives the technical strategy of the flowbite platform and brand.",
    icons: [
      { icon: <Instagram size={20} /> },
      { icon: <Twitter size={20} /> },
      { icon: <Github size={20} /> },
      { icon: <Dribbble size={20} /> },
    ],
  },
];

export const priceData: PriceData[] = [
  {
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: 29,
    priceProfits: [
      {
        icon: <Check size={20} />,
        text: "Individual configuration",
      },
      {
        icon: <Check size={20} />,
        text: "No setup, or hidden fees",
      },
      {
        icon: <Check size={20} />,
        text: "Team size: 1 developer",
      },
      {
        icon: <Check size={20} />,
        text: "Premium support: 6 months",
      },
      {
        icon: <Check size={20} />,
        text: "Free updates: 6 months",
      },
    ],
  },
  {
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: 99,
    priceProfits: [
      {
        icon: <Check size={20} />,
        text: "Individual configuration",
      },
      {
        icon: <Check size={20} />,
        text: "No setup, or hidden fees",
      },
      {
        icon: <Check size={20} />,
        text: "Team size: 1 developer",
      },
      {
        icon: <Check size={20} />,
        text: "Premium support: 6 months",
      },
      {
        icon: <Check size={20} />,
        text: "Free updates: 6 months",
      },
    ],
  },
  {
    title: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: 299,
    priceProfits: [
      {
        icon: <Check size={20} />,
        text: "Individual configuration",
      },
      {
        icon: <Check size={20} />,
        text: "No setup, or hidden fees",
      },
      {
        icon: <Check size={20} />,
        text: "Team size: 1 developer",
      },
      {
        icon: <Check size={20} />,
        text: "Premium support: 6 months",
      },
      {
        icon: <Check size={20} />,
        text: "Free updates: 6 months",
      },
    ],
  },
];
