"use client";

import CtaSection from "../components/CtaSection";
import MauticEmbeddedForm from "../components/MauticEmbeddedForm";
import NextScript from "../components/NextScript";
import TextBannerComponent from "../components/TextBannerComponent";
import YoutubeBackgroundVideo from "../components/YoutubeBackgroundVideo";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
import { useResourceContext } from "../components/ResourceContext";
import config from "../config.json";

const LpAletterGaleranch = () => {
  const context = useResourceContext();
  const { logResourceLoadError } = context || {};
  useEffect(() => {
    let videoID = config.aletter_galeranch_videoId;
    loadYTBackgroundVideo(videoID);
    loadYTIframePlayerAPI();
    setEmailFormHeader("Request Praveen to contact you!");
    disableGoogleOneTap();
    disableShareThis();
    setMauticForms();
    loadForm("aside");
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="apple-itunes-app" content="app-id=535886823" />
        <title>Thank You Homeowner!</title>
        <meta
          property="og:title"
          content="Thank You Homeowner! - aletter_galeranch"
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://weberealty.thrivebrokers.com/images/og/sellermistakes_lpbanner.jpg"
        />
        <meta property="og:url" content=""></meta>
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
          href="css/lp-aletter_galeranch.css"
          onError={(e) => logResourceLoadError(e.target)}
        ></link>

        <link
          href="css/lp.css"
          rel="stylesheet"
          onError={(e) => logResourceLoadError(e.target)}
        />
        <link
          href="css/new-stylesheets/lp-aletter_galeranch.css"
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

      {/* Banner Section */}

      <TextBannerComponent bannerText="Thank you for responding to our Letter!" />

      {/* Background Video Section  */}
      {/* Do not change the id of the tags */}

      <YoutubeBackgroundVideo />

      {/* CTA Section  */}
      <CtaSection contactNumber="+19254527483" />

      {/* Mautic Embedded Form  */}
      {/* Remove this section if embedded form is not required  */}

      <MauticEmbeddedForm />

      <NextScript src="js/bootstrap.min.js" />
      <NextScript src="js/ytvideo.js" />
      <NextScript src="/js/mautic_tracking_code.js" />
      <Script id="inline-script">
        {`
        let  page="lp"
        `}
      </Script>
    </div>
  );
};

export default LpAletterGaleranch;
