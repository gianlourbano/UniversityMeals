import {Children, useState} from "react"
import styles from "./carousel.module.css"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { wrap } from "popmotion"
import { UIComponent } from "../../types"

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 0,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 1,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        }
    }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

export const Carousel:UIComponent = ({ style, className, children}) => {
    const total = Children.toArray(children)
    
    const [[page, direction], setPage] = useState([0, 0])

    const imageIndex = wrap(0, total.length, page)

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    const Dot: React.FC<{i: number, state: number}> = ({i, state}) => {
    
        const classname = `${styles.dot} ${i == state && styles.active}`
    
        return(
            <motion.div 
                whileHover={{scale: 1.3}} 
                className={classname} 
                onClick={() => setPage([i, 1])}
            ></motion.div>
        )
    }

    return(
        <div className={`${styles.container} ${className}`} style={style}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                
                className={styles.content}>{total[imageIndex]}</motion.div>
            </AnimatePresence>
            <button className={styles.button} style={{ left: 0 }} onClick={() => paginate(-1)}>
                    <FaAngleDoubleLeft />
            </button>
            <button className={styles.button} style={{ right: 0 }} onClick={() => paginate(1)}>
                    <FaAngleDoubleRight />
            </button>
            <div className={styles.indicator}>
                {total.map((comp, index) => {
                    return (
                        <Dot key={index} i={index} state={imageIndex} />
                    )
                })}
            </div>
        </div>
    )
}