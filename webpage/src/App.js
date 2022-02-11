import "./App.css";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import NFTlist from "./components/NFTlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Nav connectWallet={connectWallet} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nfts" element={<NFTlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
