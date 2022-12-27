import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import PageLayout from "./components/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="about"
          element={<About />}
          onEnter={() => console.log("Enter About")}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
