// import changeTheNumber from './increDreament'
// import { combineReducers } from 'redux'

// export const rootReducer = combineReducers({
//     changeTheNumber
// })

// import { combineReducers } from "redux";
// import  { changeTheNumber,dataAPi } from './increDreament'

// const rootReducer = combineReducers({

//   changeTheNumber,
//   dataAPi
// });

// export default rootReducer;


import { combineReducers } from "redux";
import {  dataAPi } from './increDreament';

const rootReducer = combineReducers({
  // changeTheNumber,
  dataAPi
});

export default rootReducer;

