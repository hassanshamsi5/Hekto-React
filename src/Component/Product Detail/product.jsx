import '../../App.css'
import img55 from '../../Images/55.png'
import bag1 from '../../Images/Rectangle 134.png'
import bag2 from '../../Images/Rectangle136.png'
import bag3 from '../../Images/Rectangle137.png'
import bag4 from '../../Images/Rectangle138.png'

function App() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>Product Details</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">Product Details</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container main-content mt-5 shadow ">
                    <div className="row justify-content-center">
                        <div className="col-md-2">
                            <img src={bag1} className='img-fluid' alt="bag1" />
                            <img src={bag2} className='img-fluid' alt="bag2" />
                            <img src={bag3} className='img-fluid' alt="bag3" />

                        </div>
                        <div className="col-md-5">
                        <img src={bag4} className='img-fluid' alt="bag4" />

                        </div>
                        <div className="col-md-5">
                            <h1>Playwood arm chair</h1>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={img55} className='img-fluid' alt="img55" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default App

