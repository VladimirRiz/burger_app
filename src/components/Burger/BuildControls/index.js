import classes from './style.css';

import BuildControl from './BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'Bacon' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((cntrl) => (
        <BuildControl key={cntrl.label} label={cntrl.label} />
      ))}
    </div>
  );
};

export default BuildControls;
