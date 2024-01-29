"use client";

import CtaSection from "../components/CtaSection";
import NextScript from "../components/NextScript";
import PopUpForm from "../components/PopUpForm";
import TextBannerComponent from "../components/TextBannerComponent";
import YoutubeBackgroundVideo from "../components/YoutubeBackgroundVideo";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
import { useResourceContext } from "../components/ResourceContext";
import config from "../config.json";

const LpDiwali2023 = () => {
  const context = useResourceContext();
  const { logResourceLoadError } = context || {};
  useEffect(() => {
    let videoID = config.diwali_2023_videoId;
    loadYTBackgroundVideo(videoID);
    loadYTIframePlayerAPI();
    setEmailFormHeader("We would want to know you!");
    disableGoogleOneTap();
    disableShareThis();
    enablePopupForm(5000, 0, 5000, true);
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
        <title>A special Diwali message to you!</title>
        <meta property="og:title" content="A special Diwali message to you!" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://weberealty.thrivebrokers.com/images/og/sellermistakes_lpbanner.jpg"
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
          href="css/new-stylesheets/lp-diwali_2023.css"
          rel="stylesheet"
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

      {/* <!-- Banner Section --> */}
      <TextBannerComponent bannerText="A special Diwali message to you!" />

      {/* <!-- Background Video Section -->
    <!-- Do not change the id of the tags --> */}
      <YoutubeBackgroundVideo />

      {/* <!-- CTA Section --> */}
      <CtaSection contactNumber="+19254527483" />

      <div
        id="dwc_alias"
        data-slot="dwc"
        data-param-slot-name="festivals_alias"
        className="welcomeMessage"
      ></div>

      {/* <!-- Mautic Popup Form --> */}
      {/* <!-- Remove this section if popup form is not required --> */}
      <PopUpForm />

      <NextScript src="js/bootstrap.min.js" />
      <NextScript src="js/ytvideo.js" />
      <NextScript src="/js/mautic_tracking_code.js" />

      <Script id="inline-script">
        {`
        let  page="lp"
        `}
      </Script>
    </>
  );
};

export default LpDiwali2023;
