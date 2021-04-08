import classes from './style.css';

import BuildControl from './BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((cntrl) => (
        <BuildControl
          key={cntrl.label}
          label={cntrl.label}
          add={props.add.bind(this, cntrl.type)}
          remove={props.remove.bind(this, cntrl.type)}
          disabled={props.disabled[cntrl.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
