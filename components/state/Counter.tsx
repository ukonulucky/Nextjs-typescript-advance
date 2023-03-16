import { useReducer } from "react";

 type countType = {
    count: number
 }
 type actionType = {
    type:string,
    payload: number
 }

 type initialStateType = {
    count:number,
 }

 function Counter(){
    const initialState: initialStateType = {
        count:0
    }

const reducer  = (state:countType, action:actionType): countType =>  {
     switch (action.type) {
        case "increment":
            return {
                count : state.count + action.payload
            }
            
            break;

            case "decrement":
                return {
                    count : state.count - action.payload
                }
                
                break;
     
        default:return {
            ...state
        }
            break;
     }
}
// shift auth is used to duplicate a line
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <button onClick={
          () => {
            dispatch({
                type: "increment",
                payload: 10
            })
          }
        }>increase by 10</button>
         <button onClick={
           () => {
            dispatch({
                type: "decrement",
                payload: 10
            })
           }
        }>
        decrease by 10
        </button>
        <p>this is the number of count {state.count}</p>
    </div>
  )


 }

 export default Counter