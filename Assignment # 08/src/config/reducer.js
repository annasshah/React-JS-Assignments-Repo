const INITIAL_STATE = {
    data:{}
}


const reducer = (state = INITIAL_STATE, action) => {
    console.log(action);

    if (action.type === "DATAFROMAPI") {
        state.data = action.data;
        return { ...state, ...action };
    }
    return state;
};


// const reducer = (state = INITIAL_STATE) => state;


export default reducer