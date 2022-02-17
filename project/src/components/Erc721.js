import { useState } from "react";
import erc721Abi from "../../../project/src/erc721Abi";
import styled from "styled-components";
import transfer from "./imgs/transfer.png";

const Mytokens = styled.div`
  margin-top: 2%;
`;
const Token = styled.div`
  float: left;
  width: 23vw;
  height: 49vh;
  margin: 0 0 2% 1%;
  border: ridge;
  border-radius: 8px;
`;
const Nftimg = styled.img`
  width: 100%;
  height: 40vh;
`;

const Name = styled.div`
  float: left;
  color: #545b62;
`;

const Iddiv = styled.div`
  clear: left;
  float: left;
  color: black;
`;

const Transfer = styled.img`
  width: 25px;
  clear: both;
  float: right;
`;

const TokenTransfer = styled.div``;

function Erc721({ web3, account, erc721list }) {
  const [to, setTo] = useState("");
  const sendToken = async (tokenAddr, tokenId) => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, tokenAddr, {
      from: account,
    });
    tokenContract.methods
      .transferFrom(account, to, tokenId)
      .send({
        from: account,
      })
      .on("receipt", (receipt) => {
        setTo("");
      });
  };

  return (
    <Mytokens>
      {erc721list.map((token) => {
        return (
          <Token>
            {/* (<span className="symbol">{token.symbol}</span>) */}
            <Nftimg src={token.tokenURI} />
            <Name>{token.name}</Name>
            <Iddiv>{token.tokenId}</Iddiv>
            <Transfer src={transfer} />
            {/* <TokenTransfer>
              <input
                class="sendBox_contract"
                type="text"
                placeholder="recipient address"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
              <button
                className="w-btn w-btn-gra1 w-btn-gra-anim"
                onClick={sendToken.bind(this, token.address, token.tokenId)}
              >
                send Token
              </button>
            </TokenTransfer> */}
          </Token>
        );
      })}
    </Mytokens>
  );
}

export default Erc721;
