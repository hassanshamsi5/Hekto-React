import '../../App.css'
import img55 from '../../Images/55.png'
import G1 from '../../Images/g1.png'
import g2 from '../../Images/g2.png'
import sblog1 from '../../Images/sblog1.png'
import sblog2 from '../../Images/sblog2.png'
import sblog3 from '../../Images/sblog3.png'
import sblog4 from '../../Images/sblog4.png'
import facebook from '../../Images/Group1.png'
import insta from '../../Images/Group2.png'
import twitter from '../../Images/Group3.png'
import card1 from '../../Images/Rectangle59.png'
import card2 from '../../Images/Rectangle60.png'
import mini7 from '../../Images/mini7.png'
import mini8 from '../../Images/mini1.png'
import mini9 from '../../Images/min2.png'
import mini10 from '../../Images/mini3.png'
import mini11 from '../../Images/mini4.png'
import mini12 from '../../Images/mini5.png'
import mini13 from '../../Images/mini6.png'
import mini14 from '../../Images/mini11.png'
import mini15 from '../../Images/mini8.png'
import mini16 from '../../Images/mini9.png'
import mini17 from '../../Images/mini10.png'

import React, { useState } from 'react';
import { Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const desc1 = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const desc2 = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const desc3 = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function App() {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>Single Blog</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">Single Blog</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container main-content mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <img src={G1} className='img-fluid' alt="G1" />
                            <div className="row">
                                <div className="col-md-3 col-6 mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M8.36065 0.333008L11.6673 3.64634L10.714 4.58634L7.41398 1.28634L8.36065 0.333008ZM0.333984 11.1863L4.66732 6.87301C4.60065 6.66634 4.64732 6.40634 4.82065 6.23301C5.08065 5.97301 5.50732 5.97301 5.76732 6.23301C6.02732 6.49967 6.02732 6.91967 5.76732 7.17968C5.59398 7.35301 5.33398 7.39967 5.12732 7.33301L0.813984 11.6663L7.88732 9.29967L10.2407 5.05967L6.94732 1.75967L2.70065 4.11301L0.333984 11.1863Z" fill="#FB2E86" />
                                    </svg><span className='text-9 mx-2 p-2'>Surf Auxion</span>
                                </div>
                                <div className="col-md-3 col-6  mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.00065 12.6667C8.13251 12.6667 8.2614 12.6276 8.37103 12.5543C8.48066 12.4811 8.56611 12.377 8.61657 12.2551C8.66703 12.1333 8.68023 11.9993 8.65451 11.87C8.62878 11.7406 8.56529 11.6219 8.47206 11.5286C8.37882 11.4354 8.26003 11.3719 8.13071 11.3462C8.00139 11.3204 7.86735 11.3336 7.74553 11.3841C7.62371 11.4346 7.51959 11.52 7.44634 11.6296C7.37308 11.7393 7.33398 11.8682 7.33398 12C7.33398 12.1768 7.40422 12.3464 7.52925 12.4714C7.65427 12.5964 7.82384 12.6667 8.00065 12.6667ZM11.334 12.6667C11.4658 12.6667 11.5947 12.6276 11.7044 12.5543C11.814 12.4811 11.8994 12.377 11.9499 12.2551C12.0004 12.1333 12.0136 11.9993 11.9878 11.87C11.9621 11.7406 11.8986 11.6219 11.8054 11.5286C11.7122 11.4354 11.5934 11.3719 11.464 11.3462C11.3347 11.3204 11.2007 11.3336 11.0789 11.3841C10.957 11.4346 10.8529 11.52 10.7797 11.6296C10.7064 11.7393 10.6673 11.8682 10.6673 12C10.6673 12.1768 10.7376 12.3464 10.8626 12.4714C10.9876 12.5964 11.1572 12.6667 11.334 12.6667ZM11.334 10C11.4658 10 11.5947 9.96092 11.7044 9.88767C11.814 9.81441 11.8994 9.71029 11.9499 9.58848C12.0004 9.46666 12.0136 9.33261 11.9878 9.20329C11.9621 9.07397 11.8986 8.95518 11.8054 8.86195C11.7122 8.76871 11.5934 8.70522 11.464 8.6795C11.3347 8.65377 11.2007 8.66698 11.0789 8.71743C10.957 8.76789 10.8529 8.85334 10.7797 8.96297C10.7064 9.07261 10.6673 9.2015 10.6673 9.33335C10.6673 9.51016 10.7376 9.67973 10.8626 9.80476C10.9876 9.92978 11.1572 10 11.334 10ZM8.00065 10C8.13251 10 8.2614 9.96092 8.37103 9.88767C8.48066 9.81441 8.56611 9.71029 8.61657 9.58848C8.66703 9.46666 8.68023 9.33261 8.65451 9.20329C8.62878 9.07397 8.56529 8.95518 8.47206 8.86195C8.37882 8.76871 8.26003 8.70522 8.13071 8.6795C8.00139 8.65377 7.86735 8.66698 7.74553 8.71743C7.62371 8.76789 7.51959 8.85334 7.44634 8.96297C7.37308 9.07261 7.33398 9.2015 7.33398 9.33335C7.33398 9.51016 7.40422 9.67973 7.52925 9.80476C7.65427 9.92978 7.82384 10 8.00065 10ZM12.6673 2.00002H12.0007V1.33335C12.0007 1.15654 11.9304 0.986973 11.8054 0.861949C11.6804 0.736925 11.5108 0.666687 11.334 0.666687C11.1572 0.666687 10.9876 0.736925 10.8626 0.861949C10.7376 0.986973 10.6673 1.15654 10.6673 1.33335V2.00002H5.33398V1.33335C5.33398 1.15654 5.26375 0.986973 5.13872 0.861949C5.0137 0.736925 4.84413 0.666687 4.66732 0.666687C4.49051 0.666687 4.32094 0.736925 4.19591 0.861949C4.07089 0.986973 4.00065 1.15654 4.00065 1.33335V2.00002H3.33398C2.80355 2.00002 2.29484 2.21073 1.91977 2.58581C1.5447 2.96088 1.33398 3.46959 1.33398 4.00002V13.3334C1.33398 13.8638 1.5447 14.3725 1.91977 14.7476C2.29484 15.1226 2.80355 15.3334 3.33398 15.3334H12.6673C13.1978 15.3334 13.7065 15.1226 14.0815 14.7476C14.4566 14.3725 14.6673 13.8638 14.6673 13.3334V4.00002C14.6673 3.46959 14.4566 2.96088 14.0815 2.58581C13.7065 2.21073 13.1978 2.00002 12.6673 2.00002ZM13.334 13.3334C13.334 13.5102 13.2637 13.6797 13.1387 13.8048C13.0137 13.9298 12.8441 14 12.6673 14H3.33398C3.15717 14 2.9876 13.9298 2.86258 13.8048C2.73756 13.6797 2.66732 13.5102 2.66732 13.3334V7.33335H13.334V13.3334ZM13.334 6.00002H2.66732V4.00002C2.66732 3.82321 2.73756 3.65364 2.86258 3.52862C2.9876 3.40359 3.15717 3.33335 3.33398 3.33335H4.00065V4.00002C4.00065 4.17683 4.07089 4.3464 4.19591 4.47142C4.32094 4.59645 4.49051 4.66669 4.66732 4.66669C4.84413 4.66669 5.0137 4.59645 5.13872 4.47142C5.26375 4.3464 5.33398 4.17683 5.33398 4.00002V3.33335H10.6673V4.00002C10.6673 4.17683 10.7376 4.3464 10.8626 4.47142C10.9876 4.59645 11.1572 4.66669 11.334 4.66669C11.5108 4.66669 11.6804 4.59645 11.8054 4.47142C11.9304 4.3464 12.0007 4.17683 12.0007 4.00002V3.33335H12.6673C12.8441 3.33335 13.0137 3.40359 13.1387 3.52862C13.2637 3.65364 13.334 3.82321 13.334 4.00002V6.00002ZM4.66732 10C4.79917 10 4.92807 9.96092 5.0377 9.88767C5.14733 9.81441 5.23278 9.71029 5.28324 9.58848C5.3337 9.46666 5.3469 9.33261 5.32117 9.20329C5.29545 9.07397 5.23196 8.95518 5.13872 8.86195C5.04549 8.76871 4.9267 8.70522 4.79738 8.6795C4.66806 8.65377 4.53401 8.66698 4.4122 8.71743C4.29038 8.76789 4.18626 8.85334 4.113 8.96297C4.03975 9.07261 4.00065 9.2015 4.00065 9.33335C4.00065 9.51016 4.07089 9.67973 4.19591 9.80476C4.32094 9.92978 4.49051 10 4.66732 10ZM4.66732 12.6667C4.79917 12.6667 4.92807 12.6276 5.0377 12.5543C5.14733 12.4811 5.23278 12.377 5.28324 12.2551C5.3337 12.1333 5.3469 11.9993 5.32117 11.87C5.29545 11.7406 5.23196 11.6219 5.13872 11.5286C5.04549 11.4354 4.9267 11.3719 4.79738 11.3462C4.66806 11.3204 4.53401 11.3336 4.4122 11.3841C4.29038 11.4346 4.18626 11.52 4.113 11.6296C4.03975 11.7393 4.00065 11.8682 4.00065 12C4.00065 12.1768 4.07089 12.3464 4.19591 12.4714C4.32094 12.5964 4.49051 12.6667 4.66732 12.6667Z" fill="#FFA454" />
                                    </svg><span className='text-10 mx-2 p-2'>OCT 10 23</span>
                                </div>
                            </div>
                            <h1 className='mt-5'>Mauris at orci non vulputate diam tincidunt nec.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                            <div className='text-11 p-2 vl'>
                                <p className=''>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.</p>
                                <p className=' '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat </p>
                                <p className=' '> toamk risusu”</p>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="embed-responsive embed-responsive-">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={g2} className='img-fluid' alt="g2" />
                                </div>
                            </div>
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                            <div className="row ">
                                <div className="col-md-3 col-6">
                                    <img src={sblog4} className='img-fluid' alt="sblog1" />
                                    <p className='text-black'>Quam sed</p>
                                    <p>
                                        <span className='main-content'>$32.00</span>
                                        <span><del className='text-1 mx-3   '>$56.00</del></span>
                                        <span>
                                            <Rate tooltips={desc} onChange={setValue} value={value} />
                                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-md-3 col-6">
                                    <img src={sblog1} className='img-fluid' alt="sblog2" />
                                    <p className='text-black'>Tristique sed</p>
                                    <p>
                                        <span className='main-content'>$32.00</span>
                                        <span><del className='text-1 mx-3'>$56.00</del></span>
                                        <span>
                                            <Rate tooltips={desc1} onChange={setValue1} value={value1} />
                                            {value1 ? <span className="ant-rate-text">{desc1[value1 - 1]}</span> : ''}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-md-3 col-6">
                                    <img src={sblog2} className='img-fluid' alt="sblog3" />
                                    <p className='text-black'>A etiam</p>
                                    <p>
                                        <span className='main-content'>$32.00</span>
                                        <span><del className='text-1 mx-3   '>$56.00</del></span>
                                        <span>
                                            <Rate tooltips={desc2} onChange={setValue2} value={value2} />
                                            {value2 ? <span className="ant-rate-text">{desc2[value2 - 1]}</span> : ''}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-md-3 col-6">
                                    <img src={sblog3} className='img-fluid' alt="sblog4" />
                                    <p className='text-black'>Mi nisi</p>
                                    <p>
                                        <span className='main-content'>$32.00</span>
                                        <span><del className='text-1 mx-3   '>$56.00</del></span>
                                        <span>
                                            <Rate tooltips={desc3} onChange={setValue3} value={value3} />
                                            {value3 ? <span className="ant-rate-text">{desc3[value3 - 1]}</span> : ''}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                            <div className="row justify-content-center mt-5">
                                <div className="col-md-4">
                                    <img src={facebook} className='img-fluid mx-2' alt="facebook" />
                                    <img src={insta} className='img-fluid mx-2' alt="insta" />
                                    <img src={twitter} className='img-fluid mx-2' alt="twitter" />
                                </div>
                            </div>
                            <div className='row text-11 p-3'>
                                <div className="col-md-6">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <g clip-path="url(#clip0_117_3044)">
                                            <path d="M4.90215 6.82545L1.13398 10.5754C1.13376 10.5757 1.13358 10.5759 1.13333 10.5761C0.850927 10.858 0.851829 11.3161 1.1334 11.5971C1.13362 11.5973 1.1338 11.5975 1.13405 11.5977L4.90223 15.3477C5.18452 15.6287 5.64116 15.6276 5.92212 15.3453C6.20308 15.063 6.202 14.6064 5.9197 14.3254L3.38975 11.8077H18.6623C19.0606 11.8077 19.3834 11.4849 19.3834 11.0866C19.3834 10.6883 19.0606 10.3654 18.6623 10.3654H3.38975L5.91963 7.84776C6.20192 7.5668 6.20301 7.1102 5.92205 6.8279C5.64105 6.54554 5.18441 6.54456 4.90215 6.82545Z" fill="#8A8FB9" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_117_3044">
                                                <rect width="18.4615" height="18.4615" fill="white" transform="matrix(0 -1 1 0 0.921875 19.3076)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Previous Post</span>
                                </div>
                                <div className="col-md-6 text-end">
                                    <span>Next Post</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                        <g clip-path="url(#clip0_117_3039)">
                                            <path d="M14.635 14.1942L18.4031 10.4442C18.4033 10.444 18.4035 10.4437 18.4038 10.4435C18.6862 10.1616 18.6853 9.70355 18.4037 9.42259C18.4035 9.42237 18.4033 9.42212 18.4031 9.4219L14.6349 5.67191C14.3526 5.39099 13.896 5.39203 13.615 5.67436C13.334 5.95666 13.3351 6.41326 13.6174 6.69422L16.1474 9.2119H0.874836C0.476543 9.2119 0.153683 9.53476 0.153683 9.93306C0.153683 10.3313 0.476543 10.6542 0.874836 10.6542H16.1474L13.6175 13.1719C13.3352 13.4529 13.3341 13.9095 13.6151 14.1917C13.8961 14.4741 14.3527 14.4751 14.635 14.1942Z" fill="#8A8FB9" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_117_3039">
                                                <rect width="18.4615" height="18.4615" fill="white" transform="matrix(0 1 -1 0 18.6152 0.846069)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-5"></div>
                            <div className="row shadow-lg">
                                <div className="col-md-2 p-2">
                                    <img src={card1} className='img-fluid' alt="card1" />
                                </div>
                                <div className="col-md-9 p-3 ">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h4>Sapien ac</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <p>Jan 09 2020</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row shadow-lg mt-5">
                                <div className="col-md-2 p-2">
                                    <img src={card2} className='img-fluid' alt="card1" />
                                </div>
                                <div className="col-md-9 p-3 ">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h4>Sapien ac</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <p>Jan 09 2020</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-5">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name*" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Your Email*" />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div class="form-group mt-4">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Write your comment*' rows="10"></textarea>
                                    </div>
                                    <div class="form-check mt-3">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <p class="form-check-label" for="exampleCheck1">Save my name, email, and website in this browser for the next time I comment.</p>
                                    </div>
                                    <button className='btntheme w-100'>Continue Shipping</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h3>Search</h3>
                            <div class="mb-3">
                                <input type="email" class="form-control w-75" id="exampleFormControlInput1" placeholder="Search For Posts" />
                            </div>
                            <div className="row mt-5">
                                <h3>Categories</h3>
                                <div className="col-md-6 col-6">
                                    <button className='btntheme1 '>Hobbies (14)</button>
                                    <h6>Women (21)</h6>
                                    <h6>Women (21)</h6>
                                </div>
                                <div className="col-md-6 col-6">
                                    <h6>Women (21)</h6>
                                    <h6>Women (21)</h6>
                                    <h6>Women (21)</h6>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <h3>Recent Post</h3>
                                <div className="col-md-3">
                                    <img src={mini7} className='img-fluid' alt="mini7" />

                                </div>
                                <div className="col-md-8">
                                    <span>It is a long established fact</span>
                                    <p>Aug 09 2020</p>
                                </div>
                                <div className="col-md-3">
                                    <img src={mini8} className='img-fluid' alt="mini7" />

                                </div>
                                <div className="col-md-8">
                                    <span>It is a long established fact</span>
                                    <p>Aug 09 2020</p>
                                </div>
                                <div className="col-md-3">
                                    <img src={mini9} className='img-fluid' alt="mini7" />

                                </div>
                                <div className="col-md-8">
                                    <span>It is a long established fact</span>
                                    <p>Aug 09 2020</p>
                                </div>
                                <div className="col-md-3">
                                    <img src={mini10} className='img-fluid' alt="mini7" />

                                </div>
                                <div className="col-md-8">
                                    <span>It is a long established fact</span>
                                    <p>Aug 09 2020</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <h4>Sale Product</h4>
                                <div className="col-md-3">
                                    <img src={mini11} className='img-fluid' alt="mini7" />

                                </div>
                                <div className="col-md-8">
                                    <span>It is a long established fact</span>
                                    <p>Aug 09 2020</p>
                                </div>

                                <div className="col-md-3">
                                    <img src={mini12} className='img-fluid' alt="mini7" />

                                </div>
                                <div className="col-md-8">
                                    <span>It is a long established fact</span>
                                    <p>Aug 09 2020</p>
                                </div>
                                <div className="col-md-3">
                                    <img src={mini13} className='img-fluid' alt="mini7" />

                                </div>
                                <div className="col-md-8">
                                    <span>It is a long established fact</span>
                                    <p>Aug 09 2020</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <h4>Offer product</h4>
                                <div className="col-md-6 col-6">
                                    <img src={mini14} className='img-fluid' alt="mini14" />
                                    <h6>Duis lectus est.</h6>
                                    <p>$12.00 - $15.00</p>
                                </div>
                                <div className="col-md-6 col-6">
                                    <img src={mini15} className='img-fluid' alt="mini14" />
                                    <h6>Sed placerat.</h6>
                                    <p>$12.00 - $15.00</p>
                                </div>
                                <div className="col-md-6 col-6">
                                    <img src={mini16} className='img-fluid' alt="mini14" />
                                    <h6>Netus proin.</h6>
                                    <p>$12.00 - $15.00</p>
                                </div>
                                <div className="col-md-6 col-6">
                                    <img src={mini17} className='img-fluid' alt="mini14" />
                                    <h6>Platea in.</h6>
                                    <p>$12.00 - $15.00</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <h3>Follow</h3>
                                <div className="col-md-12">
                                    <img src={facebook} className='img-fluid mx-2' alt="facebook" />
                                    <img src={insta} className='img-fluid mx-2' alt="insta" />
                                    <img src={twitter} className='img-fluid mx-2' alt="twitter" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <h3>Tags</h3>
                                <div className="col-12">
                                    <div className="main-content my-4">
                                        <span className='mx-3 hov-1'>General</span>
                                        <span className='mx-3 hov-1'>Atsanil</span>
                                        <span className='mx-3 hov-1'>Insas.</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <span className='mx-3 hov-1'>Bibsaas</span>
                                    <span className='mx-3 hov-1'>Nulla.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={img55} className='img-fluid' alt="img55" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5"></div>
        </>
    )
}
export default App

