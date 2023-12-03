import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        id="my-script1"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-815L7QM5FY"
      />
      <Script id="my-script2">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-815L7QM5FY');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
