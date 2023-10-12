import { Link } from "react-router-dom"
import * as styles from './hero.css'
import { Container, } from "react-bootstrap"
import background from '../../assets/background.jpg'

const Hero = ({ title, content, link, linkTo }) => {
    return (
        <div className={styles.hero}>
            
            <img className={styles.image} src={background} alt="football" />
            <div className={styles.content}>
                <Container>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <button className={styles.heroButton}> 
                        <Link className={styles.link} to={linkTo}>{link}</Link>
                    </button>

                </Container>
            </div>
        </div>
    )
}
export default Hero;