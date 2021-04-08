import classes from './style.css';

import burgerLogo from '../../assets/burger-logo.png';

const Logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Logo" />
  </div>
);

export default Logo;
