    const initialState = 0

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
            // return state > 1 ? state + 1 : 1;

        case "DECREMENT":
            return state > 0 ? state - 1 : 0;
        default:
            return state;
    }
}



export default changeTheNumber