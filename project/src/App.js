import "./App.css";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import NFTlist from "./components/NFTlist";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import erc721Abi from "./erc721Abi";
import TokenList from "./components/TokenList";
import default_Img from "./components/imgs/nft.png";

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  // const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰
  // const [newErc721addr, setNewErc721Addr] = useState();
  const onErrorImg = (e) => {
    e.target.src = default_Img;
  };

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
