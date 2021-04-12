import classes from './style.css';

import Burger from '../../Burger';
import Button from '../../UI/Button';

const CheckSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope You will enjoy your meal!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button btnType="Danger">CANCEL</Button>
      <Button btnType="Success">CONTINUE</Button>
    </div>
  );
};

export default CheckSummary;
