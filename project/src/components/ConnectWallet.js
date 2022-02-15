import { AccountBalanceWallet } from "@material-ui/icons";

export default function connectWallet({ connectWallet }) {
  return (
    <button
      type="button"
      className="navIcon"
      onClick={() => {
        connectWallet();
      }}
    >
      <AccountBalanceWallet fontSize="large" style={{ paddingRight: "10px" }} />
      {/* <span className="name">Connect</span> */}
    </button>
  );
}
