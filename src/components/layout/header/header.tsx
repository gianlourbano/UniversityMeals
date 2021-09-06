import { Box, Container, Drawer, Typography } from "../..";
import { UIComponent } from "../../types";
import Image from "next/image"
import logo from "../../../../public/pasta.png"
import styles from "./header.module.css"
import useMediaQuery from "../../../hooks/useMediaQuery";

const Logo: UIComponent = () => {
	return (
		<Container className={styles.logo} colortype={["secondary", "main"]}>
			<Image className={styles.logoImg} src={logo} alt="logo" />
		</Container>
	)
}

export const Header: UIComponent = ({ children }) => {

	const isDesktop = useMediaQuery("(min-width: 960px)")

	return (
		<>
			<header className={styles.header} >
				<Box colortype={["secondary", "main"]} className={styles.container}>
					{!isDesktop && <Drawer className={styles.drawer}>
						<Typography anim type="h2">Home</Typography>
						<Typography anim type="h2">Account</Typography>
						<Typography anim type="h2">About</Typography>
						<Typography anim type="h2">Contacts</Typography>

					</Drawer>}
					<section className={styles.left} >
						<Typography anim type="h2">Home</Typography>
						<Typography anim type="h2">Account</Typography>
					</section>

					<Logo />

					<section className={styles.right} >
						<Typography anim type="h2">About</Typography>
						<Typography anim type="h2">Contacts</Typography>
					</section>
				</Box>
			</header>
			{children}
		</>
	)
}