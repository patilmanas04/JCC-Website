import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const Reveal = (props) => {
    const { children } = props

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

    const variants = {
        hidden: {
            opacity: 0,
            y: 75,
        },
        visible:{
            opacity: 1,
            y: 0,
        }
    }

    const slideVariants = {
        hidden: {
            left: 0
        },
        visible: {
            left: '100%'
        }
    }

    return (
        <div ref={ref} style={{
            position: 'relative',
            overflow: 'hidden',
            width: 'fit-content',
        }}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div 
                variants={slideVariants}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#FF5233",
                    zIndex: 20,
                }}
            />
        </div>
    )
}

export default Reveal