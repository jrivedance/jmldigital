import React from "react";
import { motion } from 'framer-motion';


const Websites = () => {
    return (
        <div>

            <a href="/">
            <motion.div className="banner" transition={{duration: 1}} animate={{ opacity:1, y:0 }} initial={{ opacity:0, y:-100}} whileHover={{scale: 1.03}}>
                <img src="/images/JMLTopSidePages.png" alt="Welcome to JML Digital's Websites" />
            </motion.div>
            </a>

            <h1>
                Web Development
            </h1>

        <div className="space"></div>

            <div className="third">
            <div className="padd-left-twenty">
                <a href="https://rennieharrisinc.com/" target="_blank" rel="noreferrer">
                <motion.div whileHover={{scale: 1.03}} className="imgcontainer">
                    <img src="/images/RennieSite.png" alt="Rennie Harris Site" className="image"/>
                <div className="middle">
                    <i className="material-icons">link</i> 
                </div>
                </motion.div>
                </a>
            </div>
            </div>

            <div className="twothird">
            <div className="padd-fifty">
                <h2>
                    Rennie Harris
                </h2>
                <p>
                    Dr. Rennie Harris is the world leading hip-hop choreographer. He teaches around the world at universities and festivals and holds his own festival called illadelph Legends festival. He has choreographed for companies such as Alvin Ailey.
                <motion.h5 whileHover={{scale: 1.03}} >
                <a href="https://rennieharrisinc.com/" target="_blank" rel="noreferrer">
                    rennieharrisinc.com
                </a>
                </motion.h5>
                </p>
            </div>
            </div>

        <div className="space"></div>

            <div className="third">
            <div className="padd-left-twenty">
                <a href="https://camilleabrown.org" target="_blank" rel="noreferrer">
                <motion.div whileHover={{scale: 1.03}}  class="imgcontainer">
                    <img src="/images/CamilleSite.png" alt="Camille A. Brown Site" class="image"/>
                <div class="middle">
                    <i class="material-icons">link</i> 
                </div>
                </motion.div>
                </a>
            </div>
            </div>

            <div className="twothird">
            <div className="padd-fifty">
                <h2>
                    Camille A. Brown
                </h2>
                <p>
                    Camille A. Brown is one of the leading choreographers in New York. She has received many awards and was nominated for a Tony Award. She has a dance company and has choreographed for productions such as Ma Rainy which is available on Netflix and Jesus Christ Superstar that aired live on NBC. She has a TED talk video that has over 10 million view.
                </p>
                <motion.h5 whileHover={{scale: 1.03}} >
                <a href="https://camilleabrown.org" target="_blank" rel="noreferrer" >
                    camilleabrown.org
                </a>
                </motion.h5>
            </div>
            </div>

        <div className="space"></div>
            <div className="third">
            <div class="padd-left-twenty">
                <a href="http://buildmomentumllc.com/" target="_blank" rel="noreferrer">
                <motion.div whileHover={{scale: 1.03}} className="imgcontainer">
                    <img src="/images/Momentum.png" alt="Momentum Development Site" className="image"/>
                <div className="middle">
                    <i class="material-icons">
                        link
                    </i> 
                </div>
                </motion.div>
                </a>
            </div>
            </div>

            <div className="twothird">
            <div className="padd-fifty">
                <h2>
                    Momentum Development
                </h2>
                <p>
                    Momentum Development is a development and construction company based out of Pennsylvania. They handle development project from design all the way through construction. From smaller house all the way up to multiunit developments.
                <br/><br/>
                <motion.h5 whileHover={{scale: 1.03}} >
                <a href="http://buildmomentumllc.com/" target="_blank" rel="noreferrer">
                    buildmomentumllc.com
                </a>
                </motion.h5>
                </p>
            </div>
            </div>

        <div className="space"></div>

            <div className="third">
            <div className="padd-left-twenty">
                <a href="https://everybodymove.world" target="_blank" rel="noreferrer">
                <motion.div whileHover={{scale: 1.03}} className="imgcontainer">
                    <img src="/images/EBMSite.png" alt="Every Body Move Site" className="image"/>
                <div className="middle">
                    <i className="material-icons">link</i> 
                </div>
                </motion.div>
                </a>
            </div>
            </div>

            <div className="twothird">
            <div className="padd-fifty">
                <h2>
                    Every Body Move
                </h2>
                <p>
                    Every Body Move is a community outreach program conceived by Camille A. Brown. The aim of the program is to “inspire and incite ambitious collective action fueled by the art of social dance.”
                <br/><br/>
                <motion.h5 whileHover={{scale: 1.03}} >
                <a href="https://everybodymove.world/" target="_blank" rel="noreferrer">
                    everybodymove.world
                </a>
                </motion.h5>
                </p>
            </div>
            </div>

        <div class="space"></div>

            <div className="third">
            <div className="padd-left-twenty">
                <a href="http://tuckerbuildersllc.com/" target="_blank" rel="noreferrer">
                <motion.div whileHover={{scale: 1.03}} className="imgcontainer">
                    <img src="/images/Tucker.png" alt="Tucker Builders Site" className="image"/>
                    <div className="middle">
                        <i className="material-icons">link</i> 
                    </div>
                </motion.div>
                </a>
            </div>
            </div>
            <div className="twothird">
            <div className="padd-fifty">
                <h2>
                    Tucker Builders
                </h2>
                <p>
                    Tucker Builders is a family owned construction company based out of Philadelphia. They provide services such as total home remodels, additions, HVAC, hardscaping and more.
                <br/><br/>
                <motion.h5 whileHover={{scale: 1.03}} >
                <a href="http://tuckerbuildersllc.com/" target="_blank" rel="noreferrer">
                    tuckerbuildersllc.com
                </a>
                </motion.h5>
                </p>
            </div>
            </div>

        <div className="space"></div>

        <img src="/images/JMLHex2.png" alt="Welcome to JML Digital" />

        <div className="space"></div>
     
        </div>
    )
}

export default Websites;

