import React, { useEffect, useState } from 'react';
import { Space, Spin } from 'antd';

function App() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((result) => {
                    setData(result);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }, 5000);
    }, []);

    return (
        <>
            {loading ? (
                <div className='text-center'>
                    <div className="loader"></div>
                    {/* <Space direction="vertical">
                        <Space>
                            <Spin tip="Loading" size="x-large">
                                <div className="content text-center" />
                            </Spin>
                        </Space>
                    </Space> */}
                </div>
            ) : (
                <div className="container">
                    <div className="row g-5">
                        {data.map((product) => (
                            <div class="col-md-4">
                                <div class="card card-1 h-100 ">
                                    <div class="card_image">
                                        <img src={product.image} className='img-fluid' alt="Cats" />
                                    </div>
                                    <div class="card_title">
                                        {product.title}
                                    </div>
                                    <div class="card_body">
                                        <p >
                                            Description: {product.description.slice(0, 25)}....
                                            <p className="card-text">${product.price}</p>
                                            <p className="card-text">Id:{product.id}</p>
                                        </p>
                                        <div class="card_footer-1 position-absolute bottom-0 left-0">
                                            <a className="btn btn-primary" href={'https://fakestoreapi.com/products'} target="_blank" rel="noopener noreferrer">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
