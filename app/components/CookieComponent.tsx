"use client";
import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
const CookieComponent = () => {
  const [showCookieComponent, setShowCookieComponent] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    const hasLocalConsent = hasCookie("localConsent");
    setShowCookieComponent(!hasLocalConsent);
  }, []);

  const handleSetCookie = () => {
    setCookie("localConsent", "true", {});
    setShowCookieComponent(false);
  };
  const handleCustomize = () => {
    setShowCookieComponent(false);
    setShowCookieSettings(true);
  };
  const cancelCustomize = () => {
    setShowCookieComponent(true);
    setShowCookieSettings(false);
  };
  const acceptCustomize = () => {
    setCookie("localConsent", "true", {});
    setShowCookieComponent(false);
    setShowCookieSettings(false);
  };

  /* Cookie prisposobit */

  const [showNecessaryText, setNecessaryText] = useState(true);
  const [showFunctionalText, setFunctionalText] = useState(false);
  const [showAnalyticalText, setAnalyticalText] = useState(false);
  const [showPerformanceText, setPerformanceText] = useState(false);
  const [showAdvertisementText, setAdvertisementText] = useState(false);

  const toggleNecessaryText = () => {
    setNecessaryText(!showNecessaryText);
  };

  const toggleFunctionalText = () => {
    setFunctionalText(!showFunctionalText);
  };
  const toggleAnalyticalText = () => {
    setAnalyticalText(!showAnalyticalText);
  };
  const togglePerformanceText = () => {
    setPerformanceText(!showPerformanceText);
  };
  const toggleAdvertisementText = () => {
    setAdvertisementText(!showAdvertisementText);
  };

  return (
    <>
      {showCookieComponent && (
        <div className="cookies_container">
          <p>
            Súbory cookie používame na zlepšenie Vášho zážitku z prehliadania,
            poskytovanie prispôsobených reklám alebo obsahu a analýzu našej
            návštevnosti. Kliknutím na „Prijať všetko“ súhlasíte s naším
            používaním súborov cookie.
          </p>
          <div className="cookies_button_container">
            <button className="btn btn--fourthiary" onClick={handleCustomize}>
              Prispôsobiť
            </button>
            <button className="btn btn--fourthiary" onClick={handleSetCookie}>
              Prijať
            </button>
          </div>
        </div>
      )}
      {showCookieSettings && (
        <div className="cookie_settings_all">
          <div className="cookie_settings_modal">
            <div>
              <h2> Prispôsobte cookies</h2>
              <p className="cookie_setting_text">
                Používame aj cookies tretích strán, ktoré nám pomáhajú
                analyzovať, ako používate túto webovú stránku, ukladať vaše
                preferencie a poskytovať obsah a reklamy, ktoré sú pre vás
                relevantné. Tieto cookies budú uložené vo vašom prehliadači iba
                s vaším predchádzajúcim súhlasom. Môžete sa rozhodnúť povoliť
                alebo zakázať niektoré alebo všetky tieto súbory cookie, ale
                zakázanie niektorých z nich môže ovplyvniť váš zážitok z
                prehliadania.
              </p>
              <div style={{ marginTop: "2rem" }}></div>
              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleNecessaryText}
                  >
                    Necessary
                  </label>
                  {showNecessaryText && (
                    <div className="description_cookies_text">
                      Necessary cookies are required to enable the basic
                      features of this site, such as providing secure log-in or
                      adjusting your consent preferences. These cookies do not
                      store any personally identifiable data.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showNecessaryText ? "" : "white_bg"
                  }`}
                  value={showNecessaryText ? 1 : 0}
                  onChange={toggleNecessaryText}
                  disabled={true}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleFunctionalText}
                  >
                    Functional
                  </label>
                  {showFunctionalText && (
                    <div className="description_cookies_text">
                      Functional cookies enhance the usability and performance
                      of this website by enabling advanced features and
                      personalization. They may remember your preferences, such
                      as language selection, font size, or region, and provide a
                      more tailored and convenient browsing experience. These
                      cookies do not collect any personally identifiable
                      information.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showFunctionalText ? "" : "white_bg"
                  }`}
                  value={showFunctionalText ? 1 : 0}
                  onChange={toggleFunctionalText}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleAnalyticalText}
                  >
                    Analytics
                  </label>
                  {showAnalyticalText && (
                    <div className="description_cookies_text">
                      Analytics cookies help us understand how visitors interact
                      with our website by collecting and reporting anonymous
                      information. These cookies provide valuable insights into
                      website traffic, user behavior, and demographics, allowing
                      us to improve our websites performance and content. The
                      information collected is aggregated and does not
                      personally identify individual visitors.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showAnalyticalText ? "" : "white_bg"
                  }`}
                  value={showAnalyticalText ? 1 : 0}
                  onChange={toggleAnalyticalText}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={togglePerformanceText}
                  >
                    Performance
                  </label>
                  {showPerformanceText && (
                    <div className="description_cookies_text">
                      Performance cookies are used to enhance the speed,
                      performance, and overall user experience of our website.
                      These cookies collect anonymous information about how
                      visitors use and navigate the site, such as page load
                      times, server response times, and error messages. By
                      analyzing this data, we can identify and address
                      performance bottlenecks, optimize our website, and ensure
                      smooth and efficient browsing.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showPerformanceText ? "" : "white_bg"
                  }`}
                  value={showPerformanceText ? 1 : 0}
                  onChange={togglePerformanceText}
                />
              </div>

              <div className="cookie_all">
                <div className="cookie_left">
                  <label
                    htmlFor="toggle"
                    className="switch_label"
                    onClick={toggleAdvertisementText}
                  >
                    Advertisement
                  </label>
                  {showAdvertisementText && (
                    <div className="description_cookies_text">
                      Advertisement cookies are used to deliver targeted and
                      personalized ads to enhance your browsing experience.
                      These cookies collect information about your interests,
                      preferences, and browsing behavior to display relevant
                      advertisements on our website and across other websites
                      you visit. By tailoring the ads to your interests, we aim
                      to provide you with more engaging and meaningful content.
                      Please note that these cookies do not store personally
                      identifiable information.
                    </div>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="1"
                  className={`toggle_switcher ${
                    !showAdvertisementText ? "" : "white_bg"
                  }`}
                  value={showAdvertisementText ? 1 : 0}
                  onChange={toggleAdvertisementText}
                />
              </div>
            </div>

            <div className="cookies_button_container">
              <button className="btn btn--fourthiary" onClick={cancelCustomize}>
                Zrušiť
              </button>
              <button className="btn btn--fourthiary" onClick={acceptCustomize}>
                Prijať
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieComponent;
