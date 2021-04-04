const CounterItem = ({ counter, onIncrement, onDecrement, onDelete }) => {
    const handleIncrement = () => onIncrement(counter.id);
    const handleDecrement = () => onDecrement(counter.id);
    const handleDeleteCounter = () => onDelete(counter.id);
    return (
      <li className="counter-item">
        <button onClick={handleDecrement}>-</button>
        <span>{counter.value}</span>
        <button onClick={handleIncrement}>+</button>
            <button onClick={handleDeleteCounter}>x</button>
      </li>
    );
};

export default CounterItem;