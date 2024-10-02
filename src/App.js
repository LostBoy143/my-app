import "./App.css";
import CarSearchComponent from "./components/CarSearchComponent";
import WhyChooseUs from "./components/WhyChooseUs";
import HowTo from "./components/HowTo";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="lg:p-5">
      <CarSearchComponent />
      <WhyChooseUs />
      <Slider />
      <HowTo />
    </div>
  );
}

export default App;
