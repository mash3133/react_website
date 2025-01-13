import './Button.jsx';
import Card from './Card.jsx';

function Button(){
    const handleClick = () => {
        return(<Card></Card>)

    }

    return(
        <button onClick={handleClick}>add new card</button>
    )
}

export default Button;