import styles from "./Slide.module.css"
import React from "react"
import {Container, Typography} from "../../.."
import { UIComponent } from "../../../types"

type img = {
    src: string,
    alt: string
}

interface SlideProps {
    title?: string,
    subtitle?: string,
    text?: string,
    img?: img
}

export const Slide: UIComponent<SlideProps> = ({title, subtitle, text, img}) => {

    return(
        <Container
		colortype={["secondary", "dark"]}
            className={styles.container}>
            {img && <img src={img.src} alt={img.alt} className={styles.img} />}
            <div className={styles.innerText}>
                <Typography type="h2">{title}</Typography>
                <Typography type="h4">{subtitle}</Typography>
                <Typography type="p">{text}</Typography>
            </div>
        </Container>
    )
}