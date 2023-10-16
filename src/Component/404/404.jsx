import '../../App.css'
import img55 from '../../Images/55.png'
import Error from '../../Images/error404.png'
import { Link } from 'react-router-dom';

function App() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>404 Not Found</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">404 Not Found</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={Error} className='img-fluid' alt="404" />
                            <br />
                            <Link className='btntheme' to="/">Back to Home</Link>
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

