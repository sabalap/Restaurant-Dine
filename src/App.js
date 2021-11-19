import Header from "./components/Header";
import "./App.css";
import FeaturesSection from "./components/FeaturesSection";
import HighlightsMenu from "./components/HighlightsMenu";
import Events from "./components/Events";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import { Route,Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ReservationSuccess from "./components/ReservationSuccess";
import ScrollToTop from "./ScrollToTop";
import CategoriesList from "./pages/ProductsList";
import CartProvider from "./store/CartProvider";
import Cart from "./pages/Cart";
import OrderSuccess from "./components/OrderSuccess";
import ScrollTop from "./components/ScrollToTop/index";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <ScrollTop />
        <Switch>
          <Route path="/" exact>
            <Header />
            <FeaturesSection />
            <HighlightsMenu />
            <Events />
            <Reservation />
          </Route>
          <Route path="/booking" exact>
            <Booking />
          </Route>
          <Route path="/menu" exact>
            <Header />
            <CategoriesList />
          </Route>
          <Route path="/booking/reservation" exact>
            <ReservationSuccess />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/cart/order" exact>
            <OrderSuccess />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  )
}
export default App;