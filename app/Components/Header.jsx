import Image from "next/image";

export const Header = () => {
     return (
          <>
               <header>
                    <div className="navbar">
                         <div className="left">
                         <div className="nav-logo border">
                              <Image src="/amazon_logo.png" width={115} height={62} alt="" />
                         </div>
                         <div className="nav-address border">
                                  <div className="main-icon">
                                  <i className="fa-solid fa-location-dot" />
                                  </div>
                              <div className="add-icon">
                              <p className="add-first">Deliver To</p>
                                   <p className="add-second">India</p>
                              </div>
                         </div>
                         </div>
                         <div className="center">
                              <div className="nav-search">
                              <select className="search-select">
                                   <option>All</option>
                                   <option>Arts &amp; Crafts</option>
                                   <option>Automotive</option>
                                   <option>Baby</option>
                                   <option>Beauty &amp; Pesonal Care</option>
                                   <option>Books</option>
                                   <option>Boys&apos; Fashion</option>
                                   <option>Computers</option>
                                   <option>Digital Music</option>
                                   <option>Eelectronics</option>
                                   <option>Girls&apos; Fashion</option>
                                   <option>Health &amp; Household</option>
                                   <option>Home &amp; Kitchen</option>
                                   <option>Industrial &amp; Scientific</option>
                                   <option>Klndle Store</option>
                                   <option>Luggage</option>
                                   <option>Men&apos;s Fashion</option>
                                   <option>Movies &amp; TV</option>
                                   <option>Music, CDs &amp; Vlnyl     </option>
                                   <option>Pet Supplies</option>
                                   <option>Prime Video</option>
                                   <option>Software</option>
                                   <option>Sports &amp; Outdoors</option>
                                   <option>Tools &amp; Home Improvement</option>
                                   <option>Toys &amp; Games</option>
                                   <option>Video Games</option>
                                   <option>Women&apos;s Fashion</option>
                              </select>
                              <input placeholder="Search Amazon" className="search-input" />
                              <div className="search-icon">
                                   <i className="fa-solid fa-magnifying-glass" />
                              </div>
                         </div>
                         </div>
                        <div className="right">
                        <select className="language">
                              <option>EN</option>
                              <option>ES</option>
                              <option>HI</option>
                         </select>
                         <div className="nav-singin border">
                              <p><span>Hello, sign in</span></p>
                              <p className="nav-second">Account &amp; Lists</p>
                         </div>
                         <div className="nav-return border">
                              <p><span>Returns</span></p>
                              <p className="nav-second">&amp; Orders</p>
                         </div>
                         <div className="nav-cart border">
                              <i className="fa-solid fa-cart-shopping" />
                              Cart
                         </div>
                    </div>
                        </div>
                    <div className="panel">
                         <div className="panel-all border">
                              <i className="fa-solid fa-bars" />
                              All
                         </div>
                         <div className="panel-ops border">
                              <p>Today&apos;s Deals</p>
                              <p>Customer Service</p>
                              <p>Registry</p>
                              <p>Gift Cards</p>
                              <p>Sell</p>
                         </div>
                         <div className="panel-deals border">
                              Shop deals in Eelectronics
                         </div>
                    </div>
               </header>
          </>
     );
}
{/* &apos;   &lsquo; &#39; &rsquo; */ }