import './App.css';
import erc721Abi from "./erc721Abi";
import TokenList from "./Components/TokenList";
import {useState, useEffect} from 'react';
import Web3 from 'web3';

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [erc721list, setErc721list] = useState([]);  // 자신의 NFT 정보를 저장할 토큰
  const [newErc721addr, setNewErc721Addr] = useState();
 
  const addNewErc721Token = async () => {
	  const tokenContract = await new web3.eth.Contract(
	      erc721Abi,
	      newErc721addr
	  );
	  const name = await tokenContract.methods.name().call();
	  const symbol = await tokenContract.methods.symbol().call();
	  const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
		  for (let i = 1; i <= totalSupply; i++) {
		      arr.push(i);
		  }
		  
		  for (let tokenId of arr) {
		      let tokenOwner = await tokenContract.methods
		          .ownerOf(tokenId)
		          .call();
		      if (String(tokenOwner).toLowerCase() === account) {
		          let tokenURI = await tokenContract.methods
		              .tokenURI(tokenId)
		              .call();
		          setErc721list((prevState) => {
		              return [...prevState, { name, symbol, tokenId, tokenURI }];
		          });
          }
      } 
}


  return (
    <div className="App">
      <div className="newErc721">
      <input type="text" onChange={(e) => {setNewErc721Addr(e.target.value);}}></input>
	    <button onClick={addNewErc721Token}>add new erc721</button>
    	</div>
      <TokenList web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default App;
