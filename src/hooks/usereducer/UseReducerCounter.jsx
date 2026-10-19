import { useReducer } from "react"

const initialState = {
    count:0
}

function reducer(state,action) {
    switch (action.type) {
        case "Increment": {
            return { count: state.count +1}
        }

        case "Decrement": {
            return { count: state.count -1 }
        }

        case "Reset": {
            return { count: 0}
        }
    }
}

export default function UseReducerCounter() {
    const [state, dispatch] = useReducer(reducer,initialState);

    return(
        <>
        <h4>Count:{state.count}</h4>
        <button onClick={() => dispatch ({ type: "Increment"})}>Increment</button>
        <button onClick={() => dispatch ({ type: "Decrement"})}>Decrement</button>
        <button onClick={() => dispatch ({ type: "Reset"})}>Reset</button>
         </>
    )
}