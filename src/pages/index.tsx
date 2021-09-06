import type { NextPage } from 'next'
import styles from "../../styles/Home.module.css"
import { Container, PageContainer, Typography, Carousel, Slide } from "../components/index"

let data = [
  {
    "title": "Hello User!",
    "subtitle": "Hello User!",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin placerat posuere velit, ut iaculis augue sodales sit amet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas ultricies nec sapien non convallis [...]",
    "image": "./mainboard.jpg"
  }, {
    "title": "Hello User!",
    "subtitle": "Hello User!",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin placerat posuere velit, ut iaculis augue sodales sit amet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas ultricies nec sapien non convallis [...]",
    "image": "./header2.jpg"
  }, {
    "title": "Hello User!",
    "subtitle": "Hello User!",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin placerat posuere velit, ut iaculis augue sodales sit amet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas ultricies nec sapien non convallis [...]",
    "image": "./header.jpg"
  }, {
    "title": "Hello User!",
    "subtitle": "Hello User!",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin placerat posuere velit, ut iaculis augue sodales sit amet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas ultricies nec sapien non convallis [...]",
    "image": "./nzxt.jpg"
  }, {
    "title": "Hello User!",
    "subtitle": "Hello User!",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin placerat posuere velit, ut iaculis augue sodales sit amet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas ultricies nec sapien non convallis [...]",
    "image": "./corsair.jpg"
  }
]

const Home: NextPage = () => {
  return (
    <PageContainer vertical className={styles.container}>
      <main className={styles.main}>
        <Container colortype={['secondary', "light"]} style={{ padding: "1rem", borderRadius: "5px" }}>
          <Carousel>
            {data.map((slide, index) => {
              return(
                <Slide title={slide.title} subtitle={slide.subtitle} text={slide.text} key={index}/>
              )
            }) }
          </Carousel>
        </Container>
      </main>
    </PageContainer>
  )
}

export default Home
