import "./Hompage.css";
import React from "react";

function Homepage() {
  return (
    <div className="homepage">
      {/* <img src="./imgs/nft.png" className="nftpic" alt="nft" /> */}
      {/* <h2>Discover, collect, and sell extraordinary NFTs</h2> */}
      <h1 class = "explanation-title">Dinosaur Archive.</h1>
      <div class = "view">
        <div>

         <div class = "container">
            <div class = "row nft-row">
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2015_Colin_Egan_wb.jpg?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2015_Colin_Egan_wb.jpg?w=1600&quality=70" width = "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141243/colin-egan-2015/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title nft-title">Colin Egan <br></br> "Blue Cat" </h1>
                    <small class="nft-item-date">2015</small>
                  </a>
                </div>
              </div>
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2115_Vinnie_Hager_wb.jpg?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2115_Vinnie_Hager_wb.jpg?w=1600&quality=70" alt="" title="Vinnie Hager, 2115" width = "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141244/vinnie-hager-2115/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title poster-title">Vinnie Hager <br></br> "Send More Mail"</h1>
                    <small class="nft-item-date">2015</small>
                  </a>
                </div>
              </div>
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1986_CHRIS_BIGALKE_wb.gif?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1986_CHRIS_BIGALKE_wb.gif?w=1600&quality=70" alt="" title="Showdeer, 1986" width = "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141259/showdeer-1986/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title poster-title">Showdeer <br></br> "Chuck & The Challenger"</h1>
                    <small class="nft-item-date">1986</small>
                  </a>
                </div>
              </div>
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1991_Alessandro_Gottardo_wb.jpg?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1991_Alessandro_Gottardo_wb.jpg?w=1600&quality=70" alt="" title="Alessandro Gottardo, 1991" width= "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141253/alessandro-gottardo-1991/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title poster-title">Alessandro Gottardo <br></br> "1991"</h1>
                    <small class="nft-item-date">1991</small>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span></span>
          </div>

          <div class = "container">
            <div class = "row nft-row">
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2015_Colin_Egan_wb.jpg?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2015_Colin_Egan_wb.jpg?w=1600&quality=70" width = "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141243/colin-egan-2015/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title nft-title">Colin Egan <br></br> "Blue Cat" </h1>
                    <small class="nft-item-date">2015</small>
                  </a>
                </div>
              </div>
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2115_Vinnie_Hager_wb.jpg?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_2115_Vinnie_Hager_wb.jpg?w=1600&quality=70" alt="" title="Vinnie Hager, 2115" width = "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141244/vinnie-hager-2115/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title poster-title">Vinnie Hager <br></br> "Send More Mail"</h1>
                    <small class="nft-item-date">2015</small>
                  </a>
                </div>
              </div>
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1986_CHRIS_BIGALKE_wb.gif?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1986_CHRIS_BIGALKE_wb.gif?w=1600&quality=70" alt="" title="Showdeer, 1986" width = "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141259/showdeer-1986/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title poster-title">Showdeer <br></br> "Chuck & The Challenger"</h1>
                    <small class="nft-item-date">1986</small>
                  </a>
                </div>
              </div>
              <div class = "nft-item col-md-3">
                <a href="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1991_Alessandro_Gottardo_wb.jpg?w=1600&quality=70" class = "nft-item-link">
                  <div>
                    <picture>
                      <img src="https://api.time.com/wp-content/uploads/2022/01/TIMEPieces_Slice_of_TIME_1991_Alessandro_Gottardo_wb.jpg?w=1600&quality=70" alt="" title="Alessandro Gottardo, 1991" width= "330px"></img>  
                    </picture>
                  </div>
                </a>
                <div class="nft-item-info">
                  <a href ="https://time.com/collection/slices-of-time/6141253/alessandro-gottardo-1991/">
                    <h2 class="nft-item-title">...</h2>
                    <h1 class="nft-item-title poster-title">Alessandro Gottardo <br></br> "1991"</h1>
                    <small class="nft-item-date">1991</small>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <footer>
        <div class="footer">
					<div class="footer_text">
							© 2022 Dinosaur. All Rights Reserved.
					</div>
				</div>
			</footer>
    </div>
  );
}

export default Homepage;
