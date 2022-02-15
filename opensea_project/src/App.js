import "./App.css";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import NFTlist from "./components/NFTlist";
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

  // const addNewErc721Token = async () => {
  //   const tokenContract = await new web3.eth.Contract(
  //     erc721Abi,
  //     newErc721addr,
  //     { from: account }
  //   );
  //   const name = await tokenContract.methods.name().call();
  //   const symbol = await tokenContract.methods.symbol().call();
  //   const totalSupply = await tokenContract.methods.totalSupply().call();

  //   let arr = [];
  //   for (let i = 1; i <= totalSupply; i++) {
  //     arr.push(i);
  //   }

  //   for (let tokenId of arr) {
  //     let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
  //     if (String(tokenOwner).toLowerCase() === account) {
  //       let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
  //       setErc721list((prevState) => {
  //         return [...prevState, { name, symbol, tokenId, tokenURI }];
  //       });
  //     }
  //   }
  // };
  return (
    <div className="App">
      {/* <Nav connectWallet={connectWallet} />
      <div className="userInfo">Address: {account}</div>

      <TokenList web3={web3} account={account} /> */}
      <Router>
        <Nav connectWallet={connectWallet} />
        <div className="userInfo">Address: {account}</div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/nfts"
            element={<TokenList web3={web3} account={account} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
