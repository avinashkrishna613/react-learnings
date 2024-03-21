import { useReducer } from "react";


function reducer(state, action) {
    let {type, payload} = action;
    switch (type) {
        case "UPDATE": state = {...state, data: payload}; break;
    }
}

function Hooks() {
    const [state, dispatcher] = useReducer(reducer, {data: 42})
    dispatcher({type: "UPDATE", payload: 45});
}

return Hooks;
