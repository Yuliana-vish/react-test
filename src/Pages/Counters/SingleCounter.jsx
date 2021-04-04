import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    counter: {
        padding: 10,
    },

    button: {
        display: "flex",
    },
});

const Limit = 500;

const SingleCounter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  ////чтоб счетчик не уходил в минус, пишем такой вариант
  const handleDecrement = () =>
    setValue(prevState => (prevState - step < 0 ? 0 : prevState - step));

  //// const handleDecrement = () => setValue(prevState => (prevState - 1 < 0 ? 0 : prevState - 1));
  //// const handleDecrement = () => setValue((prevState) => prevState - 1); /////в єтом варианте счетчик уйдет в минус

  //// чтоб счетчик имел лимит, пишем так:
  const handleIncrement = () => setValue(prevState => (prevState + step > Limit ? Limit : prevState + step));
    
  //// const handleIncrement = () => setValue(prevState => (prevState + 1 > Limit ? Limit : prevState + 1));
  ///const handleIncrement = () => setValue((prevState) => prevState + 1); //// в єтом варианте будет плюсовать сколько угодно

  //// счетчик с шагом

  const handleChangeStep = e => setStep(Number(e.target.value));

  useEffect(() => {
    console.log('value:', value);
  }, [value]);

  return (
    <div className={classes.counter}>
      <h2>Single Counter</h2>

      <label>
        <span>step</span>
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>

      <div className={classes.button}>
        <button onClick={handleIncrement}>+</button>
        <p>{value}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default SingleCounter;