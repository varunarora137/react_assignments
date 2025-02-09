import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import QuoteCardContainer from "./components/QuoteCardContainer/QuoteCardContainer.jsx";
import FoodContainer from "./components/FoodContainer/FoodContainer.jsx";
import Restaurants from "./components/Restaurants/Restaurants";
import FoodDetail from "./components/FoodDetail/FoodDetail.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<QuoteCardContainer />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/foods" element={<FoodContainer />} />
        <Route path="/foods/:id" element={<FoodDetail />} />
        {/*<Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
