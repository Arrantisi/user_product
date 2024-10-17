import Contact from "./components/fragments/Contact";
import ExampleWeb from "./components/fragments/ExampleWeb";
import Footer from "./components/fragments/Footer";
import Hero from "./components/fragments/Hero";
import MobileAvailable from "./components/fragments/MobileAvailable";
import Navbar from "./components/fragments/Navbar";
import Price from "./components/fragments/Price";
import Profit from "./components/fragments/Profit";
import Reason from "./components/fragments/Reason";
import Team from "./components/fragments/Team";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reason />
      <Profit />
      <MobileAvailable />
      <ExampleWeb />
      <Team />
      <Price />
      <Contact />
      <Footer />
    </>
  );
}
