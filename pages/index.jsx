"use client";

import MenuTemplate from "../components/MenuTemplate";
import FooterComponent from "../components/FooterComponent";
import NextScript from "../components/NextScript";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
import { useResourceContext } from "../components/ResourceContext";
const Index = () => {
  const context = useResourceContext();
  const { logResourceLoadError } = context || {};
  useEffect(() => {
    loadHeaderAndFooterMenu(
      "#menuTemplate",
      "content",
      "#headerMenu",
      "#btm_menu"
    );
  }, []);
  return (
    <>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charSet=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-itunes-app" content="app-id=535886823" />
        <title>Your Dream Home</title>
        <link
          href="css/sw/styles3bb8.css?v=AUcpKiC1BEGp1mp0rFd8QrbpJS68UXwJcjvhlicFcHQ1"
          rel="stylesheet"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          rel="stylesheet"
          href="css/sw/t1.css"
          type="text/css"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          href="css/customStyle.css"
          rel="stylesheet"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          rel="import"
          id="menuTemplate"
          href="menu_template"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
          rel="stylesheet"
          type="text/css"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          rel="stylesheet"
          href="css/newui.css"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          rel="stylesheet"
          href="css/homepage.css"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <script
          type="text/javascript"
          src="https://accounts.google.com/gsi/client"
          onError={(e) => logResourceLoadError(e.target)}
          defer
        ></script>
      </Head>
      <NextScript src="/js/rb-config.js" />
      <NextScript src="/js/logger.js" />
      <NextScript src="/js/sw/scriptsccc7.js" />
      <NextScript src="/js/pageutil.js" />
      <NextScript src="/js/jwt-decode.js" />
      <NextScript src="/js/tracker-config.js" />
      <NextScript src="/js/tracker-util.js" />
      <NextScript src="/js/branded.js" />
      <NextScript src="/js/tracker.js" />

      {/* Navbar Menu */}
      <MenuTemplate
        email="praveen@weberealty.com"
        contactNumber="+19254527483"
      />
      <div id="page-wrapper" style={{ position: "relative" }}>
        <div id="content" className="bgclr0">
          <header className="header-container">
            <div id="butterBarContainer"></div>
            <header className="wrapper clearfix bgclr8">
              <div
                style={{
                  height: "400px",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div id="pPhoto" style={{ flex: "0 0 auto" }}></div>
                <div
                  style={{
                    width: "auto",
                    flex: "1 1 auto",
                    texAlign: "center",
                  }}
                >
                  <h1 id="usp">
                    <div
                      style={{
                        color: "#ffff00",
                        filter: "drop-shadow(0 0 15px rgba(0,0,0,1.5))",
                      }}
                    >
                      Your Home Sold Guaranteed or I&apos;ll Buy It!*
                    </div>
                  </h1>
                </div>
              </div>
              <img
                src="images/sw/banners/new/top_banner_home1.jpg"
                style={{ height: "400px", width: "100%" }}
                alt="Your Dream Home"
                onError={(e) => logResourceLoadError(e.target)}
              />
            </header>
          </header>

          <div className="main-container">
            <div className="main wrapper clearfix bgclr6">
              <div id="header_links_customized" className="customizedLinks">
                <a
                  className="section-0"
                  href="stop_renting"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">
                    Stop Renting and Own Your Own Home
                  </span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/stoprenting_banner.jpg)",
                    }}
                  ></span>
                </a>
                <a
                  className="section-1"
                  href="homeeval"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">
                    Find Out What Your Home Is Worth!
                  </span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/homeeval_banner.png)",
                    }}
                  ></span>
                </a>
                <a
                  className="section-2"
                  href="seller_mistakes"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">Costly Home Seller Mistakes</span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/sellermistakes_banner.jpg)",
                    }}
                  ></span>
                </a>
                <a
                  className="section-3"
                  href="sell_for_more"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">How To Sell For More</span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/sellformore_banner.jpg)",
                    }}
                  ></span>
                </a>
              </div>

              <article className="bgclr8">
                <p>
                  Please feel free to browse through this site to explore real
                  estate information for the <b>East Bay Area</b>. Our
                  comprehensive real estate website offers direct access to the
                  latest properties for sale in East Bay and features community
                  information, consumer links, and reports, answers to commonly
                  asked real estate questions and more.{" "}
                  <strong>
                    This is your one stop shop for East Bay Real Estate
                    information.
                  </strong>
                </p>
                <p>
                  Whether you are a first time buyer or an experienced investor,
                  you will find useful information about how to choose the
                  &quot;right&quot; property, making an offer, negotiating,
                  financing, mortgage rates, moving, and everything involved in
                  making an informed real estate decision in today&#180;s
                  market.
                </p>
                <p>
                  For all your real estate needs, please{" "}
                  <a href="contact">contact us</a>.
                </p>
              </article>
            </div>

            <section className="pageLinks bg-opacity-white-80">
              <div className="wrapper clearfix">
                <div className="pageLinksColumn">
                  <div>
                    <div className="pageLinks-header">
                      <div className="pageLinks-wrapper">
                        <h2 className="pageLinks-text-heading">
                          <span style={{ color: "#7bad42" }}>
                            Sellers Start Here
                          </span>
                        </h2>
                        <p className="pageLinks-subtitle">
                          Your Home Sold Fast And For Top Dollar
                        </p>
                      </div>
                    </div>
                    <div className="pageLinks-anchor">
                      <div className="pageLinks-wrapper">
                        <a href="sellers" className="pageLinks-text-body">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pageLinks-item">
                    <a href="homeeval" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          FREE Quick Online Home Evaluation{" "}
                        </h3>
                        <p className="pageLinks-subtitle">
                          Find out what your home is worth by answering a few
                          easy questions.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a
                      href="seller_mistakes"
                      className="pageLinks-wrapper-anchor"
                    >
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          FREE Special Report - &quot;The 9 Step System to Get
                          Your Home Sold Fast and For Top Dollar&quot;
                        </h3>
                        <p className="pageLinks-subtitle">
                          This report clearly identifies potential
                          trouble-spots, and lays out an easy-to-follow
                          step-by-step system to help you get the most money for
                          your home.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a
                      href="sell_for_more"
                      className="pageLinks-wrapper-anchor"
                    >
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          How To Sell Your Home For More Money
                        </h3>
                        <p className="pageLinks-subtitle">
                          Learn how you can sell your home for more money in
                          less time.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a href="gold_findout" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          Find Out What The Home Down The Street Sold For
                        </h3>
                        <p className="pageLinks-subtitle">
                          Get a list of all recent home sales in your area.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a href="inspection" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          11 High Cost Inspection Traps You Should Know About
                          Weeks Before Listing Your Home For Sale
                        </h3>
                        <p className="pageLinks-subtitle">
                          To help home sellers deal with this issue before their
                          home is listed, a free report entitled &quot;11 Things
                          You Need to Know to Pass Your Home Inspection&quot;
                          has been compiled which explains the issues involved.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a
                      href="seminar_divorce"
                      className="pageLinks-wrapper-anchor"
                    >
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          Divorce: What to Do About the House
                        </h3>
                        <p className="pageLinks-subtitle">
                          Mistakes to Avoid When Selling Your Home as a Result
                          of a Divorce
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a href="27tips" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          27 Quick Easy Fix Ups to Sell Your Home Fast and for
                          Top Dollar
                        </h3>
                        <p className="pageLinks-subtitle">
                          Before you place your home on the market, here&apos;s
                          a way to help you to be as prepared as possible.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* <!-- Start of Second Column --> */}
                <div className="pageLinksColumn">
                  <div>
                    <div className="pageLinks-header">
                      <div className="pageLinks-wrapper">
                        <h2 className="pageLinks-text-heading">
                          <span style={{ color: "#7bad42" }}>
                            Buyers Start Here
                          </span>
                        </h2>
                        <p className="pageLinks-subtitle">
                          Get Free Resources For Home Buyers
                        </p>
                      </div>
                    </div>
                    <div className="pageLinks-anchor">
                      <div className="pageLinks-wrapper">
                        <a href="buyers" className="pageLinks-text-body">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pageLinks-item">
                    <a href="vip_buyer" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          How to Beat Out Other Buyers to Hot New Listings
                        </h3>
                        <p className="pageLinks-subtitle">
                          Get a sneak preview of new listings on the market
                          before other buyers.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a
                      href="gold_distress"
                      className="pageLinks-wrapper-anchor"
                    >
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          Distress Sales and Bank Foreclosures Hotlist
                        </h3>
                        <p className="pageLinks-subtitle">
                          Receive a free report on foreclosures in your area.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a href="stop_renting" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          FREE Special Report - &quot;How To Stop Paying Rent
                          and Own Your Own Home&quot;
                        </h3>
                        <p className="pageLinks-subtitle">
                          A new FREE Special Report titled &quot;How To Stop
                          Paying Rent and Own Your Own Home&quot; has already
                          helped dozens of local renters get out from under
                          their landlord&apos;s finger, and move into a
                          wonderful home they can truly call their own. You can
                          make this move too by discovering the important steps
                          detailed in this FREE Special Report
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a href="zerodown" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          Buy a Home With No Money Down!
                        </h3>
                        <p className="pageLinks-subtitle">
                          A new program allows buyers to buy a home with little
                          or no downpayment.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a href="trade_up" className="pageLinks-wrapper-anchor">
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          FREE Special Report - &quot;6 Mistakes to Avoid When
                          Moving to a Larger Home&quot;
                        </h3>
                        <p className="pageLinks-subtitle">
                          A new report has just been released which identifies
                          the 6 most common and costly mistakes that homebuyers
                          make when moving up to a larger home.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a
                      href="seminar_13costs"
                      className="pageLinks-wrapper-anchor"
                    >
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          FREE Special Report - &quot;13 Extra Costs to Be Aware
                          of Before Buying a Home&quot;
                        </h3>
                        <p className="pageLinks-subtitle">
                          These extra fees, such as taxes and other additional
                          costs, could surprise you with an unwanted financial
                          nightmare on closing day if you&apos;re not informed
                          and prepared.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="pageLinks-item">
                    <a
                      href="savethousands"
                      className="pageLinks-wrapper-anchor"
                    >
                      <div className="pageLinks-wrapper">
                        <h3 className="pageLinks-text-heading">
                          How to Negotiate a Better Price
                        </h3>
                        <p className="pageLinks-subtitle">
                          3 Simple Steps to Follow to Slash Thousands of Dollars
                          Off The Price of The Home You Want.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="main wrapper clearfix bgclr6">
              <div id="links_customized" className="customizedLinks">
                <a
                  className="section-0"
                  href="seminar_13costs"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">
                    13 Costs to Be Aware of Before Buying
                  </span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/seminar13extracosts_banner.jpg)",
                    }}
                  ></span>
                </a>
                <a
                  className="section-1"
                  href="buyer_mistakes"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">
                    6 Things You Must Know Before You Buy
                  </span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/buyermistakes_banner.jpg)",
                    }}
                  ></span>
                </a>
                <a
                  className="section-2"
                  href="seminar_newhomes"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">Buy a New Home or a Resale?</span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/seminarnewhomes_banner.jpg)",
                    }}
                  ></span>
                </a>
                <a
                  className="section-3"
                  href="gc_fixermyths"
                  style={{ backgroundColor: "#7bad42" }}
                >
                  <span className="titleText">Fixer Uppers: Myths & Facts</span>
                  <span
                    className="imgBackground"
                    style={{
                      backgroundImage:
                        "url(images/sw/banners/new/gcfixermyths_banner.jpg)",
                    }}
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <FooterComponent
          email="praveen@weberealty.com"
          contactNumber="+19254527483"
        />
      </div>

      {/* <!--new code for chatbot integration --> */}
      <div id="chatContain-disabled"></div>

      <NextScript src="/js/mautic_tracking_code.js" />
      <Script id="inline-script">{`
        let page="lp"
    `}</Script>
    </>
  );
};

export default Index;
