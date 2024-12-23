import { motion, useInView, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const ImageReveal = (props) => {
    const { children } = props

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
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
        </div>
    )
}

export default ImageReveal