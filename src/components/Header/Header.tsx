const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="topNav">
          <div className="navigation">
            <li>
              <a href="https://lighttowers.io">Home</a>
            </li>
            <li>
              <a href="https://lighttowers.io/story">Story</a>
            </li>
            <li>
              <a href="https://lighttowers.io/mint">Mint</a>
            </li>
            <li>
              <a href="https://lighttowers.io/game">Play</a>
            </li>
            <li className="active">
              <a href="https://swap.lighttowers.io">Swap</a>
            </li>
            <li>
              <a href="https://lighttowers.io/flea-market">Flea Market</a>
            </li>
            <li>
              <a href="https://lighttowers.io/faq">Faq</a>
            </li>
            <li>
              <a href="https://lighttowers.io/about-us">About Us</a>
            </li>
            <li className="conBtn"></li>
          </div>

          <div className="mediaBar">
            <a href="https://discord.gg/ewingames" target="_blank">
              <img src="https://swap.lighttowers.io/images/m1.png" alt="ico" />
            </a>
            <a href="https://twitter.com/LightTowersGame" target="_blank">
              <img src="https://swap.lighttowers.io/images/m2.png" alt="ico" />
            </a>

            <a
              href="https://opensea.io/collection/light-towers-game"
              target="_blank"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Bulbs &amp; Items"
            >
              <img src="https://swap.lighttowers.io/images/m3.png" alt="ico" />
            </a>
            <a
              href="https://opensea.io/collection/ewingames"
              target="_blank"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Cans &amp; Amulets"
            >
              <img src="https://swap.lighttowers.io/images/m3.png" alt="ico" />
            </a>
          </div>

          <button
            type="button"
            className="mediaVol mediaVolpause"
            id="mediaVol"
            onClick={() => false}
          ></button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
