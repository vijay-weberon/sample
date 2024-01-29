"use client";
import Banner from "../components/Banner";
import FooterComponent from "../components/FooterComponent";
import NextScript from "../components/NextScript";
import PopUpForm from "../components/PopUpForm";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useResourceContext } from "../components/ResourceContext";
import config from "../config.json";

const RptBuyertraps = () => {
  const [isClient, setIsClient] = useState(false);
  const context = useResourceContext();
  const { logResourceLoadError } = context || {};
  useEffect(() => {
    setIsClient(true);
    setEmailFormHeader("Please complete to access FREE Full Report now!");
    enablePopupForm(3000, 3, 5000);
    setMauticForms();
    loadForm("lpContent", true);
  }, []);
  return (
    <>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charSet=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-itunes-app" content="app-id=535886823" />
        <title>Get Hot Listings </title>
        <meta property="og:title" content="Beat other buyers to Homes" />
        <meta
          property="og:description"
          content="Get Instant Access to Hotlist."
        />
        <meta
          property="og:image"
          content="https://weberealty.thrivebrokers.com/images/og/buyertrap_lpbanner.jpg"
        />
        <meta property="og:url" content="" />
        <link
          href="css/sw/styles3bb8.css"
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
          href="css/banner.css"
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

      <div id="page-wrapper" style={{ position: "relative" }}>
        <div id="content" className="bgclr0">
          {/* Banner Component */}
          <Banner
            header=" How To Avoid 9 Common Home Buyer Traps"
            ImgAlt="How to Avoid 9 Common Buyer Traps BEFORE Buying a Home Image"
          />

          <div className="main-container">
            <div
              className="main wrapper clearfix bgclr6"
              style={{ width: "100%" }}
            >
              <div id="greeting" style={{ float: "right" }}>
                {isClient && (
                  // Render this tag only on the client side
                  <div
                    id="dwc_alias"
                    data-slot="dwc"
                    data-param-slot-name="rpt_alias"
                  >
                    Welcome
                  </div>
                )}
              </div>

              <article
                id="articlecntm"
                className="articlecnt"
                style={{ width: "100%" }}
              >
                <hr
                  width="100%"
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                />

                <section style={{ display: "flex", justifyContent: "center" }}>
                  <b>
                    <i>
                      &quot;A systemized approach to the home buying process can
                      help you steer clear of these common traps, allowing you
                      to not only cut costs, but also secure the home
                      that&apos;s best for you.&quot;
                    </i>
                  </b>
                </section>

                <hr
                  width="100%"
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                />

                <section>
                  <h2>Buyer Beware</h2>
                </section>

                <section>
                  <b>
                    No matter which way you look at it, buying a home is a major
                    investment.But for many home buyers, it can be an even more
                    expensive process than it needs to be since they fall prey
                    to at least a few of the many common and costly mistakes
                    which trap them into either:
                  </b>
                </section>
                <ul>
                  <li>paying too much for the home they want, or </li>
                  <li>losing their dream home to another buyer or, </li>
                  <li>(worse) buying the wrong home for their needs. </li>
                </ul>

                <section>
                  A systemized approach to the home buying process can help you
                  steer clear of these common traps, allowing you to not only
                  cut costs, but also secure the home that&apos;s best for you.
                </section>

                <section>
                  <h2>9 Buyer Traps</h2>
                </section>

                <section>
                  <h3>1. Bidding Blind</h3>
                </section>

                <section>
                  What price should you offer when you bid on a home? Is the
                  seller&apos;s asking price too high, or does it represent a
                  great deal. If you fail to research the market in order to
                  understand what comparable homes are selling for, making your
                  offer would be like bidding blind. Without this knowledge of
                  market value, you could easily bid too much, or fail to make a
                  competitive offer at all on an excellent value.
                </section>

                <section>
                  <h3>2. Buying the Wrong Home</h3>
                </section>

                <section>
                  What are you looking for in a home? A simple enough question,
                  but the answer can be quite complex. More than one buyer has
                  been swept up in the emotion and excitement of the buying
                  process only to find themselves the owner of a home that is
                  either too big or too small. Maybe they&rsquo;re stuck with a
                  longer than desired commute to work, or a dozen more fix-ups
                  than they really want to deal with now that the excitement has
                  died down. Take the time upfront to clearly define your wants
                  and needs. Put it in writing and then use it as a yard stick
                  with which to measure every home you look at.
                  <span id="dots">.....</span>
                </section>

                <section id="note" style={{ color: "red" }}>
                  <button
                    onClick={() => {
                      readMore("lpContent");
                    }}
                    id="readMore"
                  >
                    Read More
                  </button>
                </section>

                <div id="report" style={{ display: "none" }}>
                  <section>
                    <h3>3. Unclear Title</h3>
                  </section>

                  <section>
                    Make sure very early on in the negotiation that you will own
                    your new home free and clear by having a title search
                    completed. The last thing you want to discover when
                    you&rsquo;re in the back stretch of a transaction is that
                    there are encumbrances on the property such as tax liens,
                    undisclosed owners, easements, leases or the like.
                  </section>

                  <section>
                    <h3>4. Inaccurate Survey</h3>
                  </section>

                  <section>
                    As part of your offer to purchase, make sure you request an
                    updated property survey which clearly marks your boundaries.
                    If the survey is not current, you may find that there are
                    structural changes that are not shown (e.g. additions to the
                    house, a new swimming pool, a neighbor&rsquo;s new fence
                    which is extending a boundary line, etc.). Be very clear on
                    these issues.
                  </section>

                  <section>
                    <h3>5. Undisclosed Fix-ups</h3>
                  </section>

                  <section>
                    Don&rsquo;t expect every seller to own up to every physical
                    detail that will need to be attended to. Both you and the
                    seller are out to maximize your investment. Ensure that you
                    conduct a thorough inspection of the home early in the
                    process. Consider hiring an independent inspector to
                    objectively view the home inside and out, and make the final
                    contract contingent upon this inspector&rsquo;s report. This
                    inspector should be able to give you a report of any item
                    that needs to be fixed with associated, approximate cost.
                  </section>

                  <section>
                    <h3>6. Not Getting Mortgage Preapproval</h3>
                  </section>

                  <section>
                    Preapproval is fast, easy and free. When you have a
                    preapproved mortgage, you can shop for your home with a
                    greater sense of freedom and security, knowing that the
                    money will be there when you find the home of your dreams.
                  </section>

                  <section>
                    <h3>7. Contract Misses</h3>
                  </section>

                  <section>
                    If a seller fails to comply to the letter of the contract by
                    neglecting to attend to some repair issues, or changing the
                    spirit of the agreement in some way, this could delay the
                    final closing and settlement. Agree ahead of time on a
                    dollar amount for an escrow fund to cover items that the
                    seller fails to follow through on. Prepare a list of agreed
                    issues, walk through them, and check them off one by one.
                  </section>

                  <section>
                    <h3>8. Hidden Costs</h3>
                  </section>

                  <section>
                    Make sure you identify and uncover all costs - large and
                    small - far enough ahead of time. When a transaction closes,
                    you will sometimes find fees for this or that sneaking
                    through after the “sub”-total - fees such as loan
                    disbursement charges,underwriting fees etc. Understand these
                    in advance by having your lender project total charges for
                    you in writing.
                  </section>

                  <section>
                    <h3>9. Rushing the Closing</h3>
                  </section>

                  <section>
                    Take your time during this critical part of the process, and
                    insist on seeing all paperwork the day before you sign. Make
                    sure this documentation perfectly reflects your
                    understanding of the transaction, and that nothing has been
                    added or subtracted. Is the interest rate right? Is
                    everything covered? If you rush this process on the day of
                    closing, you may run into a last minute snag that you
                    can&rsquo;t fix without compromising the terms of the deal,
                    the financing, or even the sale itself.
                  </section>
                </div>
              </article>
              <style>
                {`
                padding-top:0px;
                `}
              </style>
              <aside id="aside" className="bgclr3"></aside>
            </div>
          </div>
        </div>

        <div className="footer-container">
          <FooterComponent
            email={config.DEFAULT_EMAIL}
            phone={config.DEFAULT_CONTACT_NUMBER}
          />
        </div>
      </div>

      {/* Pop Form */}
      <PopUpForm />

      {isClient && (
        // Render this tag only on the client side
        <div id="dwc_ucid" data-slot="dwc" data-param-slot-name="ucid"></div>
      )}
      <NextScript src="/js/mautic_tracking_code.js" />
      <Script id="inline-script">{`
        let page="asset"
        `}</Script>
    </>
  );
};

export default RptBuyertraps;
