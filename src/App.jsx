// // import Router from './Config/Router'

// // function App() {
// //   return (
// //     <>
// //     <Router/>
// //     </>
// //   )
// // }
// // export default App


// import React, { useEffect, useState } from "react";
// import Header from "./com/New folder/header";
// import Search from "./com/New folder1/search";
// import AddProducts from "./com/New folder2/addproducts";
// import CardBody from "./com/New folder3/cardbody";
// import Button from "./com/New folder4/button";
// import "./App.css";

// const App = () => {
//   const [items, setItem] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [addedItems, setAddedItem] = useState([]);
//   const [showAddProducts, setShowAddProducts] = useState(false);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/")
//       .then((res) => res.json())
//       .then((data) => setItem(data));
//   }, []);
//   function changingSrarchData(e) {
//     setSearchValue(e.target.value);
//   }
//   const itmesFilter = items.filter((item) =>
//     item.title.toLowerCase().includes(searchValue.toLowerCase())
//   )
//   function addItem(item) {
//     item.addNumber = 1;
//     const itemArr = addedItems;
//     setAddedItem([...itemArr, item]);
//     localStorage.setItem('addedItems', JSON.stringify([...itemArr, item]));
//   }
//   function removeItem(item) {
//     const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
//     setAddedItem(newItems);
//     localStorage.setItem('addedItems', JSON.stringify(newItems));
//     // localStorage.clear('')
//   }
//   useEffect(() => {
//     const storedItems = localStorage.getItem('addedItems');
//     if (storedItems) {
//       setAddedItem(JSON.parse(storedItems));
//     }
//   }, []);

//   return (
//     <div>
//       <div className="body__container">
//         <div className="nav">
//           <Header />
//           <div className="nav-right">
//             <Search
//               products={items}
//               value={searchValue}
//               onChangeData={changingSrarchData}
//             />
//             <Button num={addedItems.length} click={setShowAddProducts} />
//           </div>
//         </div>
//         {showAddProducts && (
//           <AddProducts
//             click={setShowAddProducts}
//             items={addedItems}
//             removeItem={removeItem}
//             setAddedItem={setAddedItem}
//           />
//         )}
//         <CardBody
//           products={itmesFilter}
//           addItem={addItem}
//           removeItem={removeItem}
//           addedItems={addedItems}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;



import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './action/index'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const value = e.target.value
    console.log(value)
  }

  return (
    <div>
      <h1>React Redux</h1>
      <div className="">
        <button onClick={() => dispatch(decNumber())}> <span>-</span></button>
        <input type="text" onChange={handleInputChange} value={myState} />
        <button onClick={() => dispatch(incNumber())}> <span>+</span></button>
      </div>
    </div>
  )
}

export default App



