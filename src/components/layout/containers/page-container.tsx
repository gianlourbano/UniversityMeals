import { motion } from "framer-motion"
import { UIComponent } from "../../types";
import {Container, ContainerProps} from "./container"

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};

export const PageContainer: UIComponent<ContainerProps & {noPadding?: boolean}> = ({noPadding, vertical, center, className, style, children}) => {
    return(
        <motion.div variants={fadeInUp} 
                    initial='initial' 
                    animate='animate' 
                    exit={{opacity: 0}}
                    style={{
                        overflow: "hidden"
                    }}
            >
            <Container vertical={vertical}
                        center={center}
                        style={{ 
                            width: "100vw",
                            padding: noPadding ? "" : "2rem 10vw",
                            ...style }} 
                        className={className}
            >
                {children}
            </Container>
        </motion.div>
        
    )
}