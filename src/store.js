// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./rootReducer";

// const store = configureStore({
//   reducer: {
//     root: rootReducer,
//   },
// });

// export default store;


// import { createStore } from "redux";
// import { rootReducer } from "./reducer";

// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
// const store = configureStore(rootReducer )
// export default store


import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;


