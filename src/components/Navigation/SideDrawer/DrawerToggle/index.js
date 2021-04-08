import classes from './style.css';

const DrawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.toggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
