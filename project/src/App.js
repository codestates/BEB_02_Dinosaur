import "./App.css";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TokenList from "./components/TokenList";

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  return (
    <div className="App">
      <Router>
        <Nav connectWallet={connectWallet} account={account} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/nfts"
            element={<TokenList web3={web3} account={account} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
