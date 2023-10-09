import '../../App.css'
import img55 from '../../Images/55.png'

function App() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>FAQ</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">Faq</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container main-content mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <h4 className='mb-5'>Generel Information</h4>
                            <h5>Eu dictumst cum at sed euismood condimentum?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                            <h5>Magna bibendum est fermentum eros.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                            <h5>Odio muskana hak eris conseekin sceleton?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                            <h5>Elit id blandit sabara boi velit gua mara?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                        </div>
                        <div className="col-md-4 p-5 faq">
                            <h5>Ask a Question</h5>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name*" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject*" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Type Your Message' rows="6"></textarea>
                            </div>
                            <button className='btn btn-danger'>Send Mail</button>
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

