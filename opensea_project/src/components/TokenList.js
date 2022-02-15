import React, { useEffect, useState } from "react";
import Erc721 from "./Erc721";
import erc721Abi from "../erc721Abi";

function TokenList({ web3, account }) {
  const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰
  const [newErc721addr, setNewErc721Addr] = useState();
  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract(
      erc721Abi,
      newErc721addr,
      { from: account }
    );
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }

    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      if (String(tokenOwner).toLowerCase() === account) {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, tokenURI }];
        });
      }
    }
  };
  return (
    <div className="tokenlist">
      <Erc721 web3={web3} account={account} erc721list={erc721list} />
      <div className="newErc721">
        <input
          class="searchBox_contract"
          type="text"
          placeholder="Enter you contract address"
          onChange={(e) => {
            setNewErc721Addr(e.target.value);
          }}
        ></input>
        <button
          class="w-btn w-btn-gra1 w-btn-gra-anim"
          onClick={addNewErc721Token}
        >
          Find my NFT
        </button>
      </div>
    </div>
  );
}

export default TokenList;
