"use client";

import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
import CtaSection from "../components/CtaSection";
import MauticEmbeddedForm from "../components/MauticEmbeddedForm";
import NextScript from "../components/NextScript";
import PopUpForm from "../components/PopUpForm";
import TextBannerComponent from "../components/TextBannerComponent";
import YoutubeBackgroundVideo from "../components/YoutubeBackgroundVideo";
import { useResourceContext } from "../components/ResourceContext";
import config from "../config.json";

function LpHomewardbound12() {
  const context = useResourceContext();
  const { logResourceLoadError } = context || {};
  useEffect(() => {
    const videoID = config.homewardbound_videoId;
    loadYTBackgroundVideo(videoID);
    loadYTIframePlayerAPI();
    setEmailFormHeader("Please complete form to access Praveen's message");
    window.customFormHeader = "Thanks in advance for your Referral!";
    disableGoogleOneTap();
    disableShareThis();
    enableEmbeddedFormForKnownContacts("aside");
    enablePopupForm(5000, 1, 5000, true);
    setMauticForms();
    loadForm("lpContent");
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="apple-itunes-app" content="app-id=535886823" />
        <title>Referral - HomewardBound December</title>
        <meta property="og:title" content="Referral - HomewardBound December" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://weberealty.thrivebrokers.com/images/og/top_banner.jpg"
        />
        <meta property="og:url" content="" />

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
          href="css/lp.css"
          rel="stylesheet"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          href="css/new-stylesheets/lp-homewardbound-12.css"
          rel="stylesheet"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <script
          type="text/javascript"
          src="https://accounts.google.com/gsi/client"
          onError={(e) => logResourceLoadError(e.target)}
          defer
        />
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

      {/* Text Banner Section  */}
      <TextBannerComponent bannerText="Your REFERRALS HELP the KIDS!" />
      {/* Youtube Video */}
      <YoutubeBackgroundVideo />
      {/* <!-- CTA Section --> */}
      <CtaSection contactNumber="+19254527483" />
      <MauticEmbeddedForm />
      <PopUpForm />
      <NextScript src="js/bootstrap.min.js" />
      <NextScript src="js/ytvideo.js" />
      <NextScript src="js/mautic_tracking_code.js" />

      <Script id="inline-script">
        {`
           let  page="lp"
        `}
      </Script>
    </>
  );
}

export default LpHomewardbound12;
