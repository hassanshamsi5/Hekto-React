import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { dataAPi } = useSelector((state) => state);
    const { id } = useParams();
    const navigate = useNavigate()
    const product = dataAPi.find((item) => item.id === parseInt(id, 10));

    // const addtocart = () => {
    //     navigate('/addToCart')
    //     }
    // const addtocart = () => {    
    //     navigate(`/addToCart/${id}`, { state: { product } });
    //   };

    const addtocart = () => {
        saveProductToLocalStorage(product);
        navigate('/addToCart', { state: { product } })
    };

    const saveProductToLocalStorage = (product) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingProductIndex = existingCartItems.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            existingCartItems[existingProductIndex] = {
                ...existingCartItems[existingProductIndex],
                quantity: existingCartItems[existingProductIndex].quantity + 1,
            }
        } else {
            existingCartItems.push({ ...product, quantity: 1 })
        }
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems))
    }

    return (
        <div>
            {product ? (
                <div className='container'>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={product.image} width={220} height={300} className="img-fluid " alt={product.title} />
                        </div>
                        <div className="col-md-4">
                            <h2>{product.id}</h2>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h3 style={{ color: 'red' }}>$. {product.price}</h3>
                            <button onClick={() => addtocart()} className='btn btn-primary'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetails;
