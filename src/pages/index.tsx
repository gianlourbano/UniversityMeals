import type { NextPage } from 'next'
import styles from "../../styles/Home.module.css"
import { Container, PageContainer, Typography } from "../components/index"

const Home: NextPage = () => {
  return (
    <PageContainer vertical noPadding className={styles.container}>
      <main className={styles.main}>
        <Container colortype={['secondary', "main"]} style={{padding: "1rem", borderRadius: "5px"}}>
          <Typography type="h1">Hello there!</Typography>
        </Container>
      </main>
    </PageContainer>
  )
}

export default Home
