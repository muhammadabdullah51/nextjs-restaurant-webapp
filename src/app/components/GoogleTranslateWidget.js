"use client";

import Script from "next/script";

const GoogleTranslateWidget = () => {
  return (
    <>
      {/* Define the callback globally */}
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en", autoDisplay: false },
              "google_translate_element"
            );
          }
        `}
      </Script>
      {/* Load the Google Translate script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element">dsadsa</div>
    </>
  );
};

export default GoogleTranslateWidget;
