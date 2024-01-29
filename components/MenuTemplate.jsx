import React from "react";
import config from "../config.json";
import { getReadablePhoneNumber } from "./utilities";
import PropTypes from "prop-types";
const MenuTemplate = (props) => {
  return (
    <div id="menuTemplate">
      <div id="headerMenu">
        <div className="mobile-menu bgclr3" role="menubar">
          <li className="leftMenu" style={{ paddingLeft: "22px" }}>
            <a
              target="_blank"
              href={`mailto:${props.email || config.DEFAULT_EMAIL}`}
              rel="noreferrer"
            >
              <i className="fa fa-envelope icon"></i>
            </a>
          </li>
          <li className="leftMenu w-phone">
            <a
              href={`tel:${
                props.contactNumber || config.DEFAULT_CONTACT_NUMBER
              }`}
            >
              <i className="fa fa-phone icon"></i>
            </a>
          </li>
          <li className="mobile-menu-button" style={{ padding: "9px 11px" }}>
            <i className="fa fa-bars" style={{ fontSize: "20px" }}></i>
          </li>
        </div>

        <nav id="navBar" className="bgclr3">
          <ul className="leftMenu">
            <li>
              <a href={`mailto:${props.email || config.DEFAULT_EMAIL}`}>
                <i className="fa fa-envelope icon"></i>
                <span className="aText">Email</span>
              </a>
            </li>
            <li className="w-phone">
              <a
                href={`tel:${
                  props.contactNumber || config.DEFAULT_CONTACT_NUMBER
                }`}
              >
                <i className="fa fa-phone icon"></i>
                <span className="aText">
                  {" "}
                  {getReadablePhoneNumber(
                    props.contactNumber || config.DEFAULT_CONTACT_NUMBER
                  )}
                </span>
              </a>
            </li>
          </ul>

          <ul className="menu container rightMenu" role="menubar">
            <li className="bgclr3" role="menuitem">
              <a href="/">HOME</a>
            </li>

            <li className="bgclr3" role="menuitem">
              <a className="menu-head" href="insideraccess">
                MORE<span className="triangle-bottom"></span>
              </a>
              <div className="sub-menu">
                <div className="container bgclr3">
                  <div>
                    <ul role="menu">
                      <li role="menuitem">
                        <a href="buyers">Buyers Resources</a>
                      </li>
                      <li role="menuitem">
                        <a href="sellers">Seller Resources</a>
                      </li>
                      <li role="menuitem">
                        <a href="whyfree">Why Is This Info Free?</a>
                      </li>
                      <li role="menuitem">
                        <a href="insideraccess">Get VIP Insider Access</a>
                      </li>
                      <li role="menuitem">
                        <a href="gold_newsletter">
                          This Month&apos;s Newsletter
                        </a>
                      </li>
                      <li role="menuitem">
                        <a href="agent_questions">Questions Agents Hate!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="bgclr3" role="menuitem">
              <a className="menu-head" href="buyers">
                Buyers<span className="triangle-bottom"></span>
              </a>
              <div className="sub-menu">
                <div className="container bgclr3">
                  <div>
                    <ul role="menu">
                      <li role="menuitem">
                        <a href="vip_buyer">Get Hot NEW Listings</a>
                      </li>
                      <li role="menuitem">
                        <a href="gold_distress">Foreclosures Hot List</a>
                      </li>
                      <li role="menuitem">
                        <a href="stop_renting">Stop Paying Rent</a>
                      </li>
                      <li role="menuitem">
                        <a href="trade_up">Moving Up?</a>
                      </li>
                      <li role="menuitem">
                        <a href="seminar_13costs">Beware! 13 Extra Costs</a>
                      </li>
                      <li role="menuitem">
                        <a href="buyertraps">9 Common Buyer Traps</a>
                      </li>
                      <li role="menuitem">
                        <a href="zerodown">Buy with ZERO Down</a>
                      </li>
                      <li role="menuitem">
                        <a href="savethousands">Save Thousands</a>
                      </li>
                      <li role="menuitem">
                        <a href="buyer_mistakes">6 Buyer Mistakes</a>
                      </li>
                      <li role="menuitem">
                        <a href="gc_fixermyths">
                          Fixer Uppers: Myths &amp; Facts
                        </a>
                      </li>
                      <li role="menuitem">
                        <a href="gc_bestbuys">10 Best Buys Hotlist</a>
                      </li>
                      <li role="menuitem">
                        <a href="gc_firsttime">First Time Buyer Hotlist</a>
                      </li>
                      <li role="menuitem">
                        <a href="gc_nomoneydown">No Money Down Hotlist</a>
                      </li>
                      <li role="menuitem">
                        <a href="gc_upscale">Upscale Homes Hotlist</a>
                      </li>
                      <li role="menuitem">
                        <a href="gc_fixerupper">Fixer Uppers Hotlist</a>
                      </li>
                      <li role="menuitem">
                        <a href="seminar_newhomes">New Homes vs. Resale</a>
                      </li>
                      <li role="menuitem">
                        <a href="coaching_bestfinancing">
                          Best Financing Rates
                        </a>
                      </li>
                      <li role="menuitem">
                        <a href="gold_mortgageapp">Mortgage Pre-Approval</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="bgclr3" role="menuitem">
              <a className="menu-head" href="sellers">
                Sellers<span className="triangle-bottom"></span>
              </a>
              <div className="sub-menu">
                <div className="container bgclr3">
                  <div>
                    <ul role="menu">
                      <li role="menuitem">
                        <a href="24h-guarantee">
                          Get Guaranteed Offer within 24 hours
                        </a>
                      </li>
                      <li role="menuitem">
                        <a href="homeeval">What&apos;s Your Home Worth?</a>
                      </li>
                      <li role="menuitem">
                        <a href="seller_mistakes">Avoid These Mistakes</a>
                      </li>
                      <li role="menuitem">
                        <a href="gold_findout">Prices In Your Area</a>
                      </li>
                      <li role="menuitem">
                        <a href="27tips">27 Seller Tips</a>
                      </li>
                      <li role="menuitem">
                        <a href="sell_for_more">How To Sell For More!</a>
                      </li>
                      <li role="menuitem">
                        <a href="inspection">Pass Your Inspection</a>
                      </li>
                      <li role="menuitem">
                        <a href="seminar_divorce">Divorce and Your Home</a>
                      </li>
                      <li role="menuitem">
                        <a href="silver_fsbo">For Sale by Owner</a>
                      </li>
                      <li role="menuitem">
                        <a href="gold_howlong">When Will It Sell?</a>
                      </li>
                      <li role="menuitem">
                        <a href="coaching_emptynest">Emptying the Nest?</a>
                      </li>
                      <li role="menuitem">
                        <a href="coaching_negotiating">
                          Getting the Best Price
                        </a>
                      </li>
                      <li role="menuitem">
                        <a href="coaching_setprice">Getting YOUR Price</a>
                      </li>
                      <li role="menuitem">
                        <a href="seminar_expired">
                          Your House Didn&apos;t Sell
                        </a>
                      </li>
                      <li role="menuitem">
                        <a href="coaching_legal">Avoid Legal Mistakes</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="bgclr3" role="menuitem">
              <a className="menu-head" href="contact">
                Contact<span className="triangle-bottom"></span>
              </a>
              <div className="sub-menu">
                <div className="container bgclr3">
                  <div>
                    <ul role="menu">
                      <li role="menuitem">
                        <a href="contact">Contact Us</a>
                      </li>
                      <li role="menuitem">
                        <a href="gold_referral">Refer a Friend</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="bgclr3" role="menuitem">
              <a href="expert/blog/">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuTemplate;

MenuTemplate.propTypes = {
  contactNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
