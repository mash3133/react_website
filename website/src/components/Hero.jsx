import './Hero.css'
import image from '../assets/image.jpg'

function Hero(){
    return(
        <div>
            <img src={image}></img>
            <p>Greetings, welcome to my website</p>
        </div>
    )
}

export default Hero;