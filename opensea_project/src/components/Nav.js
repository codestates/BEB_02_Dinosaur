import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  AccountCircle,
  AccountBalanceWallet,
} from "@material-ui/icons";

function Nav(connectWallet) {
  return (
    <div id="nav-body">
      <span className="title">
        <img id="logo" src="./imgs/dinosaur.png" alt="logo" />
        <span className="name">Dinosaur</span>
      </span>
      <div className="search-container">
        <Search fontSize="large" style={{ paddingTop: "10px" }} />
        <input
          className="searchBox"
          type="text"
          placeholder="  Search items, collections, and accounts"
        ></input>
      </div>
      <div id="menu">
        <Link to="/explore" className="dropdown">
          Explore
        </Link>
        <Link to="/create_nft" className="dropdown">
          Create
        </Link>
        <button type="button" className="navIcon">
          <AccountCircle fontSize="large" />
        </button>
        <AccountBalanceWallet
          fontSize="large"
          style={{ paddingRight: "10px" }}
          className="navIcon"
          onClick={() => connectWallet()}
        >
          <span>Connect</span>
        </AccountBalanceWallet>
      </div>
    </div>
  );
}

export default Nav;
