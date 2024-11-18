import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Images from "./components/Image";
import Navbar from "./components/Navbar";
import OfferCarousel from "./components/OfferCarousel";

function App() {
  return (
    <>
      <Navbar />
      <OfferCarousel />
      <img src="newww.jpg"></img>
      <Banner />
      <Images />
      <ContactUs />
    </>
  );
}

export default App;
