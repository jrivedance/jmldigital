import React from 'react'
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';


const Front = () => {
    return (
        <div>
            <motion.div className="banner" transition={{duration: 2}} animate={{ opacity:1, y:0 }} initial={{ opacity:0, y:-100}}>
                <img src="images/JMLBanner.png" alt="Welcome to JML Digital" />
            </motion.div> 
            <div className="third">
                <h1>VIDEO<br/>PRODUCTION</h1>
            </div>
            <div className="third">
                <h1>GRAPHIC<br/>DESIGN</h1>
            </div>
            <div className="third">
                <h1>WEB<br/>DEVELOPMENT</h1>
            </div>

            <img src="images/JMLHex1.png" alt="Welcome to JML Digital" />

        <div className="space"></div>

                <h2>WEB DEVELOPMENT</h2>
                    
                <div className="third">
                <div className="padleft">
                    <a href="https://camilleabrown.org/" target="_blank" rel="noreferrer" >
                    <motion.div whileHover={{scale: 1.1}} className="imgcontainer">
                        <img src="images/CamilleSite.png" alt="Camille A. Brown Site" className="image"/>
                    <div className="middle">
                        <i className="material-icons">link</i> 
                    </div>
                    </motion.div>
                    </a>
                </div>
                </div>

                <div className="third">
                <div className="padcenter">
                    <a href="http://rennieharrisinc.com/" rel="noreferrer" target="_blank">
                    <motion.div whileHover={{scale: 1.1}} className="imgcontainer">
                        <img src="images/RennieSite.png" alt="Rennie Harris Site" className="image"/>
                    <div className="middle">
                        <i className="material-icons md-48">link</i> 
                    </div>
                    </motion.div>
                    </a>
                </div>
                </div> 
            
                <div className="third">
                <div className="padright">
                    <a href="https://www.everybodymove.world/" rel="noreferrer" target="_blank">
                    <motion.div whileHover={{scale: 1.1}} className="imgcontainer">
                        <img src="images/EBMSite.png" alt="Every Body Move Site" className="image"/>
                    <div className="middle">
                        <i className="material-icons">link</i> 
                    </div>
                    </motion.div>
                    </a>
                </div>
                </div>

            <div className="smspace"></div>

                <motion.h5 whileHover={{scale: 1.1}} >
                    <a href="/websites" target="_blank">
                        See All Sites
                    </a>
                </motion.h5>

            <div className="space"></div>

                <h2>VIDEO PRODUCTION</h2>

                <div className="third">
                <div className="padleft">
                <div className="youtube-video-container">
                    <ReactPlayer
                    url='https://www.youtube.com/watch?v=H3ITO6SkMdw' 
                    className='react-player'
                    width='100%'
                    height='100%'
                    />
                </div>
                </div>
                </div>

                <div className="third">
                <div className="padcenter">
                <div className="youtube-video-container">
                    <ReactPlayer
                    url='https://www.youtube.com/watch?v=P-vyovD1Nu8' 
                    className='react-player'
                    width='100%'
                    height='100%'
                    />
                </div>
                </div>
                </div>

                <div className="third">
                <div className="padright">
                <div className="youtube-video-container">
                    <ReactPlayer
                    url='https://www.youtube.com/watch?v=odTVXunPnGU' 
                    className='react-player'
                    width='100%'
                    height='100%'
                    allowFullScreen
                    />
                </div>
                </div>
                </div>

            <div className="smspace"></div>

                <motion.h5 whileHover={{scale: 1.1}} >
                    <a href="https://www.youtube.com/channel/UCaDK3YCbfM8KahzxzxsH6HQ" rel="noreferrer" target="_blank">
                        Watch More Videos
                    </a>
                </motion.h5>

            <div className="space"></div>

                <h2>GRAPHIC DESIGN</h2>

                <div className="sixth">
                <div className="padleft">
                    <img src="images/ColumbineAnimal.png" alt="Columbine Animal Hospital Advertisement"/>
                </div>
                </div>

                <div className="sixth">
                <div className="padcenter">
                    <img src="images/nobicycleparking.png" alt="No Bicycle Parking Coffee Table Book"/>
                </div>
                </div>

                <div className="sixth">
                <div className="padcenter">
                    <img src="images/20thSealGlow.png" alt="Rennie Harris Puremovement Logo"/>
                </div>
                </div>

                <div className="sixth">
                <div className="padcenter">
                    <img src="images/TonyaLogoR.png" alt="Elan Bird Logo"/>
                </div>
                </div>

                <div className="sixth">
                <div className="padcenter">
                    <img src="images/RHPMStylesheet.png" alt="Rennie Harris Puremovement Brand Stylesheets"/>
                </div>
                </div>

                <div className="sixth">
                <div className="padright">
                    <img src="images/Mr.TolPostcard.png" alt="Camille A. Brown Mr. Tol E. RancE Postard"/>
                </div>
                </div>

            <div className="space"></div>
            <div className="space"></div>

                <img src="images/JMLHex2.png" alt="JML Digital" />

            <div className="space"></div>

        </div>
)}

export default Front
