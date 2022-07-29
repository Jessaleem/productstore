import './index.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header__Container">
    <div className="header__Title">
      <h1>Product Store</h1>
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
