import "./App.css";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import NFTlist from "./components/NFTlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import erc721Abi from "./erc721Abi";
import TokenList from "./components/TokenList";

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰
  const [newErc721addr, setNewErc721Addr] = useState();
  // const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰
  // const [newErc721addr, setNewErc721Addr] = useState();
>>>>>>> ab04c13fba97d03d0a1bbb19c26e044ba5487655

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
      <Nav connectWallet={connectWallet} />
      {/* <div className="userInfo">Address: {account}</div> */}
      {/* <div className="newErc721">
        <input class ="searchBox_contract"
          type="text"
          placeholder="Enter you contract address"
          onChange={(e) => {
            setNewErc721Addr(e.target.value);
          }}
        ></input>
        <button class ="w-btn w-btn-gra1 w-btn-gra-anim" onClick={addNewErc721Token}>Find my NFT</button>
      </div> */}
      <TokenList web3={web3} account={account} erc721list={erc721list} />
      {/* router 사용할 경우 NFTlist 부분에 tokenlist 부분 넣기 */}
      {/* <Router>
        <Nav connectWallet={connectWallet} />
        <div className="userInfo">Address: {account}</div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/nfts"
            element={<TokenList web3={web3} account={account} />}
          />
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
