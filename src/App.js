import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coin from "./Components/Coin";
import Exchange from "./Components/Exchange";
import CoinDetail from "./Components/CoinDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Coin" element={<Coin />}></Route>
          <Route exact path="/Exchange" element={<Exchange />}></Route>
          <Route exact path="/coin/:id" element={<CoinDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
