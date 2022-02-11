import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  AccountCircle,
  AccountBalanceWallet,
} from "@material-ui/icons";

function Nav(connectWallet) {
  //   const menu = (
  //     <Menu>
  //       <Menu.Item key="0">
  //         <a
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           href="https://www.antgroup.com"
  //         >
  //           1st menu item
  //         </a>
  //       </Menu.Item>
  //       <Menu.Item key="1">
  //         <a
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           href="https://www.aliyun.com"
  //         >
  //           2nd menu item
  //         </a>
  //       </Menu.Item>
  //       <Menu.Divider />
  //       <Menu.Item key="3" disabled>
  //         3rd menu item（disabled）
  //       </Menu.Item>
  //     </Menu>
  //   );
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
        {/* <Link to="/profile">
          <img src="./imgs/user.png" />
        </Link>
        <Link to="/wallet">
          <img src="./imgs/wallet.png" />
        </Link> */}
        <button type="button" className="navIcon">
          <AccountCircle fontSize="large" />
        </button>
        <AccountBalanceWallet
          fontSize="large"
          style={{ paddingRight: "10px" }}
          className="navIcon"
          onClick={() => connectWallet()}
        />
      </div>
    </div>
    // <Dropdown overlay={menu}>
    //   <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
    //     Hover me <DownOutlined />
    //   </a>
    // </Dropdown>
  );
}

export default Nav;
