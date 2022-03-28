
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber}  from "./actions/index"
function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>{myState}</h1>
     <button onClick={()=>dispatch(incNumber())}>Increment</button>
     <button onClick={()=>dispatch(decNumber())}>Decrement</button>
    </div>
  );
}

export default App;
