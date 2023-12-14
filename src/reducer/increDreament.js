const initialState = []

const changeTheNumber = (state = initialState, action) => {
    
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         // return state > 1 ? state + 1 : 1;

//         case "DECREMENT":
//             return state > 0 ? state - 1 : 0;
//         default:
//             return state;
//     }
}

// const dataAPi = (state = initialState, action) => {
//     switch (action.type) {
//         case "data":
//             return state.dataAPi.payload;
//         default:
//             return state;
//     }
// }
const dataAPi = (state = initialState, action) => { 
    switch (action.type) {
      case "SET_DATA":
        // console.log('action :>> ', action);
        return action.payload;
      default:
        return state;
    }
  };
  

// export default changeTheNumber
export {dataAPi,changeTheNumber}

