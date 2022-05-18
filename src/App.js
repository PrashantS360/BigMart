import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './components/Cart';
import Account from './components/Account';
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './components/Product';
import Orders from './components/Orders';
import Filter from './components/Filter';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search/:slug">
          <Search />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/product/:slug">
          <Product />
        </Route>
        <Route exact path="/filter/:category">
          <Filter />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
