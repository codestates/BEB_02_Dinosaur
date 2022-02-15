import React from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import { Search, AccountCircle } from "@material-ui/icons";
import default_Img from "./imgs/dinosaur.png";


function Nav({ connectWallet }) {

  return (
    <div id="nav-body">
      <span className="title">
        {/* <img id="logo" src="./imgs/dinosaur.png" alt="logo" /> */}
        <img id = "logo" src={default_Img}/>
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
        {/* <Link to="/explore">Explore</Link> */}
        {/* <Link to="/create_nft">Create</Link> */}
        <button type="button" className="navIcon">
          <AccountCircle fontSize="large" />
        </button>
        <ConnectWallet className="navIcon" connectWallet={connectWallet} />
      </div>
    </div>
  );
}

export default Nav;
