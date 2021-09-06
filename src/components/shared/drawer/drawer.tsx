import { UIComponent } from "../../types";
import { Container } from "../.."
import { useState } from "react";

import {MdMenu, MdClose} from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion";

import styles from "./drawer.module.css"

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    hidden: {
        x: -60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing}
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
			ease: easing
        }
    },
};

export const Drawer: UIComponent = ({children, className}) => {
	
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)
	
	return(
		<div className={className}>
			<motion.div
				onClick={handleOpen}
				className={styles.hamburger}
			>
				<MdMenu />
			</motion.div>
			
			<AnimatePresence exitBeforeEnter>
			{open && 
			
				<motion.div className={styles.container}
						variants={fadeInUp} 
						initial='hidden' 
						animate='visible'
						exit="hidden"
				>
				

				<Container vertical colortype={["secondary", "dark"]}>
					<motion.div
						onClick={handleOpen}
						className={styles.hamburger}

					>
						<MdClose />
					</motion.div>
					{children}
				</Container>
			</motion.div>
			}
			</AnimatePresence>
		</div>
	)
}