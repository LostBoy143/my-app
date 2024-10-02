import "./App.css";
// import CarSearchComponent from "./components/CarSearchComponent";
// import WhyChooseUs from "./components/WhyChooseUs";
// import HowTo from "./components/HowTo";
// import Slider from "./components/Slider";
import BenifitsSection from "./components/BenifitsSection";
import WhyRideWithUs from "./components/Ride";
import FAQ from "./components/Faq";
import Stats from "./components/Stats";
import CitiesAvailable from "./components/Cities";
function App() {
  return (
    <div className="lg:p-5">
      {/* <CarSearchComponent />
      <WhyChooseUs />
      <Slider />
      <HowTo /> */}
      <div className="h-2/3 bg-slate-500"></div>
      <BenifitsSection />
      <WhyRideWithUs />
      <FAQ />
      <Stats />
      <CitiesAvailable />
    </div>
  );
}

export default App;
