import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { incNumber, decNumber, setData } from './action/index';

const App = () => {
    // const myState = useSelector((state) => state.changeTheNumber);
    const { dataAPi } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    // const handleInputChange = (e) => {
    //   const value = e.target.value;
    //   console.log(value);
    // };

    useEffect(() => {
        const fetchData = () => {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((data) => {
                    dispatch({ type: 'SET_DATA', payload: data });
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        fetchData();
    }, []);

    const [showMore, setShowMore] = useState({});

    const toggleDescription = (productId) => {
        setShowMore((prevShowMore) => ({
            ...prevShowMore,
            [productId]: !prevShowMore[productId],
        }));
    }

    return (

        <div>
             {/*<button onClick={() => dispatch(decNumber())}> <span>-</span></button>
                <input type="text" onChange={handleInputChange} value={myState} style={{ width: 30 }} />
                <button onClick={() => dispatch(incNumber())}> <span>+</span></button> */}
            <div className="container">
                <div className="row g-3">
                    <h1>React Redux</h1>
                    {dataAPi.map((item) => (
                        <div className='col-md-3' key={item.id}>
                            <div className="card h-100">
                                <div className="text-center">
                                    <p>{item.id}</p>
                                    <img src={item.image} width={100} height={100} className="img-fluid " alt={item.title} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.slice(0,)}</h5>
                                    <p className="card-text">${item.price}</p>
                                    {/* <li>
                                        Description: {showMore[item.id] ? item.description : item.description.slice(0, 25)}
                                    </li>
                                    <button
                                        className='btn btn-primary w-100'
                                        onClick={() => toggleDescription(item.id)}
                                    >
                                        {showMore[item.id] ? 'See Less' : 'See More'}
                                    </button> */}
                                    <Link to={`/product/${item.id}`}>
                                        <button className='btn btn-primary'>
                                            {showMore[item.id] ? 'See Less' : 'See More'}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default App;




