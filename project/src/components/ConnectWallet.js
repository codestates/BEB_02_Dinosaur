import Wallet from "@material-ui/icons/AccountBalanceWallet";
import styled from "styled-components";

const Styledbutton = styled.button`
  /* border-style: ridge;
  border-width: 2px;
  border-radius: 8px; */
`;

const Styledspan = styled.span`
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  vertical-align: 0.3em;
`;

export default function connectWallet({ connectWallet, account }) {
  let address = account;
  return (
    <Styledbutton
      type="button"
      className="navIcon"
      onClick={() => {
        connectWallet();
      }}
    >
      <Wallet />
      <Styledspan>
        {address ? `${address.slice(0, 4)}..${address.slice(-4)}` : `Connect`}
      </Styledspan>
    </Styledbutton>
  );
}
