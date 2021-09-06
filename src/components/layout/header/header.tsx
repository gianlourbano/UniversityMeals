import { Container, Typography } from "../..";
import { UIComponent } from "../../types";
import Image from "next/image"
import logo from "../../../../public/pasta.png"
import styles from "./header.module.css"

export const Header: UIComponent = ({children}) => {
	return(
		<>
			<header className={styles.header} >
				<Container center colortype={["secondary", "main"]}>
					<section className={styles.left} >
						<Typography type="h2">Home</Typography>
						<Typography type="h2">Account</Typography>
					</section>
					
					<Container className={styles.logo} colortype={["secondary", "main"]}>
						<Image className={styles.logoImg} src={logo} alt="logo" />
					</Container>

					<section className={styles.right} >
						<Typography type="h2">About</Typography>
						<Typography type="h2">Contacts</Typography>
					</section>
				</Container>
			</header>
			{children}
		</>
	)
}