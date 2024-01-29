"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import Banner from "../components/Banner";
import EmbeddedForm from "../components/EmbeddedForm";
import FooterComponent from "../components/FooterComponent";
import MenuTemplate from "../components/MenuTemplate";
import NextScript from "../components/NextScript";
import { useResourceContext } from "../components/ResourceContext";

function VipBuyer() {
  const [isClient, setIsClient] = useState(false);
  const context = useResourceContext();
  const { logResourceLoadError } = context || {};
  useEffect(() => {
    setIsClient(true);
    loadHeaderAndFooterMenu(
      "#menuTemplate",
      "content",
      "#headerMenu",
      "#btm_menu",
      true
    );
    updateBanner();
    setMauticForms();
    loadForm("aside");
  }, []);
  return (
    <>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charSet=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-itunes-app" content="app-id=535886823" />
        <title>Get Hot Listings</title>
        <meta property="og:title" content="Get Hot Listings" />
        <meta property="og:description" content="Buyer Should Know & use!" />
        <meta
          property="og:image"
          content="https://weberealty.thrivebrokers.com/images/og/vipbuyer_lpbanner.jpg"
        />
        <meta property="og:url" content="" />
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
          href="css/bootstrap.min.css"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          rel="stylesheet"
          href="css/fa.min.css"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          rel="stylesheet"
          href="css/banner.css"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <script
          async
          type="text/javascript"
          src="https://accounts.google.com/gsi/client"
          onError={(e) => logResourceLoadError(e.target)}
        />
      </Head>

      {/* SCRIPTS */}
      <NextScript src="/js/rb-config.js" />
      <NextScript src="/js/logger.js" />
      <NextScript src="/js/sw/scriptsccc7.js" />
      <NextScript src="/js/pageutil.js" />
      <NextScript src="/js/jwt-decode.js" />
      <NextScript src="/js/tracker-config.js" />
      <NextScript src="/js/tracker-util.js" />
      <NextScript src="/js/branded.js" />
      <NextScript src="/js/tracker.js" />

      {/* Menubar component */}
      <MenuTemplate
        email="praveen@weberealty.com"
        contactNumber="+19254527483"
      />

      <div id="page-wrapper" style={{ position: "relative" }}>
        <div id="content" className="bgclr0">
          {/* Banner Component */}
          <Banner
            header="Beat out other buyers to Hot New Listings"
            ImgAlt="You can become a VIP Buyer and Beat Other Buyers to Hot New Listings Image"
          />
          <div className="main-container">
            <div className="main wrapper clearfix bgclr6">
              <article className="bgclr8">
                <div id="articlecntm" className="articlecnt">
                  <h2>
                    Receive Priority Access To ALL New Listings That Match Your
                    Home Buying Criteria
                  </h2>
                  <h3>
                    <font color="#0000ff">Here&apos;s how it works...</font>
                  </h3>
                  <br />
                  <ul>
                    <li>
                      Our Exclusive Buyer Profile System saves you Time and
                      Money. Simply tell us what you&apos;re looking for and get
                      priority access to ALL homes that match your criteria,
                      including Bank Foreclosures, Company Owned Properties and
                      other Distress Sales.
                    </li>
                    <li>
                      No more wasted time looking at out-dated information in
                      newspapers or searching the internet. Priority access
                      means you&apos;re there first before other buyers, so you
                      can negotiate the lowest possible price and your time is
                      not wasted viewing homes that don&apos;t interest you.
                    </li>
                    <li>It&apos;s easy to get started...</li>
                    <li>
                      Order your free report today. To order a FREE Special
                      Report:
                    </li>
                  </ul>
                </div>
              </article>
              {/* Form component*/}
              <EmbeddedForm />
            </div>
          </div>
        </div>

        {/* Footer component*/}
        <FooterComponent />
      </div>

      <NextScript src="/js/mautic_tracking_code.js" />
      <Script id="inline-script">
        {`
          let page="lp";               
          `}
      </Script>
    </>
  );
}

export default VipBuyer;
