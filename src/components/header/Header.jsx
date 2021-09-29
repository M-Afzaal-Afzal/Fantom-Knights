import React, {useEffect, useState} from "react";
import Scrollspy from "react-scrollspy";
import {Link} from "react-router-dom";
import ReactTooltip from "react-tooltip";
import {
    // FiUser,
    FiBriefcase,
    // FiFileText,
    // FiPhoneOutgoing,
    FiTwitter,
} from "react-icons/fi";

import {FaDiscord, FaQuestion} from 'react-icons/fa';
import {RiVideoLine} from 'react-icons/ri';

import Logo from '../../assets/logo.svg';

import {RiTeamLine} from 'react-icons/ri';
import {GiFrog, GiEyeball} from 'react-icons/gi';
import {motion} from "framer-motion";
import Sword from "../../assets/sword/sword.png";
import Sword1 from "../../assets/sword/sword1.png";

// import {
//   // FaHome,
//   FaBlog } from "react-icons/fa";


const variants = {
    open: {
        opacity: 1,
        zIndex: 1500,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: "100%",
        // x: 0,
        transition: {
            delay: 2,
            duration: 2,
            type: 'Tween',
        }
    },
    closed: {
        zIndex: -1,
        opacity: 0,
        // x: "-100%",
        transition: {
            duration: 5
        }
    },
}

const firstSwordVariants = {
    open: {
        // opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            type: 'Tween',
        }
    },
    closed: {
        // opacity: 0,
        x: "200%",
        transition: {
            duration: 2
        }
    },
}

const secondSwordVariants = {
    open: {
        // opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            type: 'Tween',
        }
    },
    closed: {
        // opacity: 0,
        x: "-200%",
        transition: {
            duration: 2
        }
    },
}

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        setIsOpen(false);
    }, [])

    return (
        <>
            {/* Header */}
            <motion.div initial={{
                zIndex: 5,
            }} animate={{
                zIndex: 0,
                transition: {
                    delay: 5,
                }
            }} className="mob-header">

                {/*   Sword With Animations   */}
                <div className={'animation-container-mobile'}>

                    <motion.div
                        variants={variants}
                        style={{
                            position: 'fixed',
                            content: '',
                            top: 0,
                            left: 0,
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gridTemplateRows: '1fr',
                            placeItems: 'center',
                            width: '100%',
                            height: '100%',
                            background: '#14213D',
                            opacity: 1,
                            visibility: 'visible',
                            zIndex: 1500,
                        }} animate={isOpen ? "open" : "closed"}>

                        <motion.div
                            variants={firstSwordVariants}
                            style={{

                                gridRow: '1/-1',
                                gridColumn: '1/-1',
                                opacity: 1,
                                visibility: 'visible',
                            }} animate={isOpen ? "open" : "closed"}>
                            <img src={Sword} alt="Sword"/>
                        </motion.div>

                        <motion.div
                            variants={secondSwordVariants}
                            style={{

                                gridRow: '1/-1',
                                gridColumn: '1/-1',
                                opacity: 1,
                                visibility: 'visible',
                            }} animate={isOpen ? "open" : "closed"}>
                            <img src={Sword1} alt="Sword"/>
                        </motion.div>

                    </motion.div>

                </div>
                {/* End of sword animation*/}


                <button className="toggler-menu" onClick={handleClick}>
                    <div className={click ? "active" : ""}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </motion.div>
            {/* End Header */}

            {/* nav bar */}
            <motion.div initial={{
                zIndex: 5,
            }} animate={{
                zIndex: 0,
                transition: {
                    delay: 5,
                }
            }} className={click ? "header-left menu-open" : "header-left "}>

                <div className="scroll-bar">

                    {/*   Sword With Animations   */}
                    <div className={'animation-container-desktop'}>

                        <motion.div
                            variants={variants}
                            style={{
                                position: 'fixed',
                                content: '',
                                top: 0,
                                left: 0,
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gridTemplateRows: '1fr',
                                placeItems: 'center',
                                width: '100%',
                                height: '100%',
                                background: '#14213D',
                                opacity: 1,
                                visibility: 'visible',
                                zIndex: 1500,
                            }} animate={isOpen ? "open" : "closed"}>

                            <motion.div
                                variants={firstSwordVariants}
                                style={{

                                    gridRow: '1/-1',
                                    gridColumn: '1/-1',
                                    opacity: 1,
                                    visibility: 'visible',
                                }} animate={isOpen ? "open" : "closed"}>
                                <img src={Sword} alt="Sword"/>
                            </motion.div>

                            <motion.div
                                variants={secondSwordVariants}
                                style={{

                                    gridRow: '1/-1',
                                    gridColumn: '1/-1',
                                    opacity: 1,
                                    visibility: 'visible',
                                }} animate={isOpen ? "open" : "closed"}>
                                <img src={Sword1} alt="Sword"/>
                            </motion.div>

                        </motion.div>

                    </div>
                    {/* End of sword animation*/}

                    <motion.div initial={{
                        opacity: 0,
                        zIndex: -5,
                        transition: {
                            // delay: 5,
                            // duration: 5,
                        }
                    }} animate={{
                        opacity: 1,
                        zIndex: 5,
                        transition: {
                            duration: 3,
                            delay: 1,
                        }
                    }} className="hl-top">
                        <div className="hl-logo">
                            <Link to="/">
                                <img src={Logo} alt="Logo"/>
                            </Link>
                        </div>
                    </motion.div>
                    {/* End htl-top */}

                    <Scrollspy
                        className="nav nav-menu"
                        items={["home"]}
                        currentClassName="active"
                        offset={-30}
                    >
                        <motion.li initial={{
                            opacity: 0,
                            zIndex: -5,
                            transition: {
                                // delay: 5,
                                // duration: 5,
                            }
                        }} animate={{
                            opacity: 1,
                            zIndex: 5,
                            transition: {
                                duration: 3,
                                delay: 1,
                            }
                        }}>
                            <a
                                className="nav-link "
                                href="#home"
                                data-tip
                                data-for="HOME"
                                onClick={handleClick}
                            >
                                <GiFrog/>
                                <ReactTooltip id="HOME" place="top" type="dark" effect="float">
                                    <span>Home</span>
                                </ReactTooltip>
                            </a>
                        </motion.li>

                        <motion.li initial={{
                            opacity: 0,
                            zIndex: -5,
                            transition: {
                                // delay: 5,
                                // duration: 5,
                            }
                        }} animate={{
                            opacity: 1,
                            zIndex: 5,
                            transition: {
                                duration: 3,
                                delay: 1,
                            }
                        }}>
                            <a
                                className="nav-link"
                                href="#faq"
                                data-tip
                                data-for="FAQ"
                                onClick={handleClick}
                            >
                                <GiEyeball/>
                                <ReactTooltip
                                    id="FAQ"
                                    place="top"
                                    type="dark"
                                    effect="float"
                                >
                                    <span>Faq</span>
                                </ReactTooltip>
                            </a>
                        </motion.li>

                        {/*<li>*/}
                        {/*  <a*/}
                        {/*      className="nav-link"*/}
                        {/*      href="#videos"*/}
                        {/*      data-tip*/}
                        {/*      data-for="VIDEOS"*/}
                        {/*      onClick={handleClick}*/}
                        {/*  >*/}
                        {/*    <RiVideoLine />*/}
                        {/*    <ReactTooltip id="VIDEOS" place="top" type="dark" effect="float">*/}
                        {/*      <span>Videos</span>*/}
                        {/*    </ReactTooltip>*/}
                        {/*  </a>*/}
                        {/*</li>*/}

                        {/*<li>*/}
                        {/*  <a*/}
                        {/*      className="nav-link"*/}
                        {/*      href="#team"*/}
                        {/*      data-tip*/}
                        {/*      data-for="TEAM"*/}
                        {/*      onClick={handleClick}*/}
                        {/*  >*/}
                        {/*    <RiTeamLine />*/}
                        {/*    <ReactTooltip id="TEAM" place="top" type="dark" effect="float">*/}
                        {/*      <span>Team</span>*/}
                        {/*    </ReactTooltip>*/}
                        {/*  </a>*/}
                        {/*</li>*/}


                        {/*<li>*/}
                        {/*  <a*/}
                        {/*    className="nav-link"*/}
                        {/*    href="https://twitter.com/NoFunToads"*/}
                        {/*    target={'_blank'}*/}
                        {/*    rel={'noreferrer'}*/}
                        {/*    data-tip*/}
                        {/*    // data-for="BLOG"*/}
                        {/*    // onClick={handleClick}*/}
                        {/*  >*/}
                        {/*    <FiTwitter />*/}
                        {/*    <ReactTooltip id="TWITTER" place="top" type="dark" effect="float">*/}
                        {/*      <span>Twitter</span>*/}
                        {/*    </ReactTooltip>*/}
                        {/*  </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*  <a*/}
                        {/*    className="nav-link"*/}
                        {/*    rel={'noreferrer'}*/}
                        {/*    href="https://t.co/3p0rxCcp8Q?amp=1"*/}
                        {/*    target={'_blank'}*/}
                        {/*    data-for="DISCORD"*/}
                        {/*    onClick={handleClick}*/}
                        {/*  >*/}
                        {/*    <FaDiscord />*/}
                        {/*    <ReactTooltip*/}
                        {/*      id="DISCORD"*/}
                        {/*      place="top"*/}
                        {/*      type="dark"*/}
                        {/*      effect="float"*/}
                        {/*    >*/}
                        {/*      <span>Discord</span>*/}
                        {/*    </ReactTooltip>*/}
                        {/*  </a>*/}
                        {/*</li>*/}
                    </Scrollspy>
                </div>
            </motion.div>
            {/* End Header */}
        </>
    );
};

export default Header;
