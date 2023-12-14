import React from 'react'
import Image from '../Images/Screenshot.png'
const home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img src={Image} className='img-fluid' alt="img" />
                </div>
            </div>
        </div>
    )
}

export default home


