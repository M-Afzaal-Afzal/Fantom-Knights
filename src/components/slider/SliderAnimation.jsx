import React, {useState} from "react";
import TextLoop from "react-text-loop";
import {
    FiTwitter,
} from "react-icons/fi";

import {FaDiscord, FaTwitter} from 'react-icons/fa';
import {RiVideoLine} from 'react-icons/ri';

const conctInfo = {
    phone: "+1-855-92-TOADS",
    email: "nofuntoads@gmail.com",
};

const sliderContent = {
    name: "Welcome Knights",
    designation: "Full-stack Developer",
    description: ` `,
    btnText: "Connect to metamask",
};

const Slider = () => {

    const [counter, setCounter] = useState(1);

    const counterHandler = (type) => {
        if (type === 'add' && counter < 10) {
            setCounter((prevCounter) => prevCounter + 1);
        } else if (type === 'sub' && counter > 1) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }

    return (
        <>
            {/*  Home Banner */}
            <section id="home" className="home-banner">
                <div className="hb-top-fixed d-flex">
                    <div className="hb-info">
                        <a href="tel:+1-855-92-TOADS">
                            <FaDiscord size={25}/>
                        </a>
                        <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
                            <FaTwitter size={25}/>
                        </a>
                    </div>
                    <div className="hb-lang">
                        {/*<ul className="nav">*/}
                        {/*  <li className="active">*/}
                        {/*    <a href="#">EN</a>*/}
                        {/*  </li>*/}
                        {/*  <li>*/}
                        {/*    <a href="#">FR</a>*/}
                        {/*  </li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
                {/* End hp-top-fixed */}

                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col-lg-7">
                            <div className="type-box">
                                <h6 data-aos="fade-up" data-aos-duration="1200">
                                   Say Hello to the
                                </h6>
                                <h1
                                    className="font-alt"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="100"
                                >
                                    Fantom Knights
                                    {/*{sliderContent.name}*/}
                                </h1>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <TextLoop interval={500} delay={1}>
                                        <p className="loop-text lead">Loyal</p>
                                        <p className="loop-text lead">Strong</p>
                                        <p className="loop-text lead">Royal</p>
                                        <p className="loop-text lead">Honorable</p>
                                        <p className="loop-text lead">Warrior</p>
                                        <p className="loop-text lead">Peace</p>
                                        <p className="loop-text lead">Noble</p>
                                        <p className="loop-text lead">Chivalrous</p>
                                        <p className="loop-text lead">Rich</p>
                                        <p className="loop-text lead">Monarch</p>
                                        <p className="loop-text lead">Cavalry</p>
                                        <p className="loop-text lead">Medieval</p>
                                        <p className="loop-text lead">Courage</p>
                                    </TextLoop>
                                </div>


                                <div
                                    className="my-4"
                                    // data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <button style={{
                                        background: '#c21921',
                                    }} onClick={counterHandler.bind(this, 'sub')} className={`px-btn px-btn-white`}>
                                        -
                                    </button>
                                    <button
                                        style={{
                                            background: '#FCA311',
                                        }}
                                        className="px-btn px-btn-white"
                                        // href="img/resume.png"
                                        // download
                                    >
                                        Connect ({counter})
                                    </button>
                                    <button style={{
                                        background: '#27CE0D',
                                    }} onClick={counterHandler.bind(this, 'add')} className={`px-btn px-btn-white`}>
                                        +
                                    </button>
                                </div>

                                {/*<div className="my-4"*/}
                                {/*    // data-aos="fade-up"*/}
                                {/*     data-aos-duration="1200"*/}
                                {/*     data-aos-delay="200"*/}
                                {/*>*/}
                                {/*    <button*/}
                                {/*        style={{*/}
                                {/*            background: 'rgb(32 159 255)',*/}
                                {/*        }}*/}
                                {/*        className="px-btn px-btn-white"*/}
                                {/*        // href="img/resume.png"*/}
                                {/*        // download*/}
                                {/*    >*/}
                                {/*        /!*Connect to metamask ({counter})*!/*/}
                                {/*        Mint Date October 5 12pm PST*/}
                                {/*    </button>*/}
                                {/*</div>*/}

                                {/*<p*/}
                                {/*    className="desc"*/}
                                {/*    // data-aos="fade-up"*/}
                                {/*    data-aos-duration="1200"*/}
                                {/*    data-aos-delay="300"*/}
                                {/*>*/}
                                {/*    /!*{sliderContent.description}*!/*/}
                                {/*    20% of sales donated toward #mentalhealth charities*/}
                                {/*</p>*/}

                                {/*<p*/}
                                {/*    className="desc"*/}
                                {/*    // data-aos="fade-up"*/}
                                {/*    data-aos-duration="1200"*/}
                                {/*    data-aos-delay="300"*/}
                                {/*>*/}
                                {/*    /!*{sliderContent.description}*!/*/}
                                {/*    20% of sales given as creator grants*/}
                                {/*</p>*/}

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Container*/}
                <div
                    className="hb-me"
                    style={{
                        backgroundImage: `url(${
                            process.env.PUBLIC_URL + "img/slider/home-banner.png"
                        })`,
                    }}
                />
            </section>

            {/* End Home Banner  */}
        </>
    );
};

export default Slider;
