import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const Success = ({ showSuccess, setShowSuccess }) => { 
    return (
        <AnimatePresence exitBeforeEnter>
            { showSuccess && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="thanks">
                        <h3>Thank you!</h3>
                        <h1>I will contact you as soon as possible.</h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Success
