const Footer = () => {
  return (
    <footer className="footer" style={{ background: "#1D2623" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="fNav">
                <div className="fWidget">
                  <a href="https://lighttowers.io/" className="fLink">
                    Home
                  </a>
                  <div className="fWidgetNav">
                    {/* <!-- <a href="./#Intro">Intro</a> --> */}
                    <a href="https://lighttowers.io/#About_the_game">
                      About the game
                    </a>
                    <a href="https://lighttowers.io/#Mint_details">
                      Mint details
                    </a>
                    <a href="https://lighttowers.io/#COMPLETE_THE_GAME">
                      Game award
                    </a>
                    <a href="https://lighttowers.io/#Social_media">
                      Social media
                    </a>
                    <a href="https://lighttowers.io/#Chapter_II">Chapter II</a>
                  </div>
                </div>
                <div className="fWidget">
                  <a href="https://lighttowers.io/story" className="fLink">
                    Story
                  </a>
                  <div className="fWidgetNav">
                    <a href="https://lighttowers.io/story#Backstory">
                      Backstory
                    </a>
                    <a href="https://lighttowers.io/story#Light-tower-III">
                      Light tower III
                    </a>
                    <a href="https://lighttowers.io/story#Light-tower-IV">
                      Light tower IV
                    </a>
                    <a href="https://lighttowers.io/story#Light-tower-VI">
                      Light tower VI
                    </a>
                    <a href="https://lighttowers.io/story#World-map">
                      World map
                    </a>
                  </div>
                </div>

                <div className="fWidget">
                  <a href="https://lighttowers.io/game" className="fLink">
                    Play
                  </a>
                  <div className="fWidgetNav">
                    <a href="https://swap.lighttowers.io" target="_blank">
                      Items Swap
                    </a>
                    <a href="https://lighttowers.io/flea-market">Flea Market</a>
                  </div>
                </div>
                <div className="fWidget">
                  <a href="https://lighttowers.io/mint" className="fLink">
                    Mint
                  </a>
                </div>
                <div className="fWidget">
                  <a href="https://lighttowers.io/faq" className="fLink">
                    Faq
                  </a>
                </div>
                <div className="fWidget fWidgetMin">
                  <a href="https://lighttowers.io/about-us" className="fLink">
                    About Us
                  </a>
                </div>
                <div className="fWidget">
                  <a
                    href=""
                    className="fLink nonActiveLink"
                    onClick={() => false}
                  >
                    Lore
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="rightBar">
              <div className="mediaBar">
                <a href="https://discord.gg/ewingames" target="_blank">
                  <img
                    src="https://swap.lighttowers.io/images/m1.png"
                    alt="ico"
                  />
                </a>
                <a href="https://twitter.com/LightTowersGame" target="_blank">
                  <img
                    src="https://swap.lighttowers.io/images/m2.png"
                    alt="ico"
                  />
                </a>
                <a
                  href="https://opensea.io/collection/light-towers-game"
                  target="_blank"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Bulbs &amp; Items"
                >
                  <img
                    src="https://swap.lighttowers.io/images/m3.png"
                    alt="ico"
                  />
                </a>
                <a
                  href="https://opensea.io/collection/ewingames"
                  target="_blank"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Cans &amp; Amulets"
                >
                  <img
                    src="https://swap.lighttowers.io/images/m3.png"
                    alt="ico"
                  />
                </a>
              </div>{" "}
              <a href="http://ewingames.io" target="_blank" className="fLogoE">
                <img src="https://swap.lighttowers.io/images/e-logo.png" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="fCopir">
            © 2023 EWINGAMES LIMITED |{" "}
            <a href="https://lighttowers.io/terms-of-use">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
