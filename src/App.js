import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, increment } from './action';
import './App.css';

function App() {
const counter = useSelector(state => state.counterReducer)
const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter {counter}</h2>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
