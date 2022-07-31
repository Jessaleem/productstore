import './index.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header__Container">
    <div className="header__Title">
      <Link className="header__linkhome" to="/">
        <img src="https://i.postimg.cc/6yL4vd1t/marketplace.png" alt="marketplace" className="header__image" />
      </Link>
      <h2 className="header_h2">Product Store</h2>
    </div>
    <div className="header__menuWraper">
      <Link className="header__linkhome" to="/">
        Home
      </Link>
      <Link className="header__linkAbout" to="/about">
        About
      </Link>
    </div>
  </div>
);

export default Header;
