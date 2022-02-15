import React from "react";

function NFTlist({ account }) {
  return (
    <div className="NFTlist">
      <div className="userInfo">주소: {account}</div>
    </div>
  );
}

export default NFTlist;
