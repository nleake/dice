import "./Die.css";

function Die({face}) {

    
    return <div>
        <i className={`Die fas fa-dice-${face}`}></i>
    </div>
}

export default Die;