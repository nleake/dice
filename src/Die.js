import "./Die.css";

function Die({face, rolling}) {

    
    return <div>
        <i className={`Die fas fa-dice-${face} ${rolling && 'wobble'}`}></i>
    </div>
}

export default Die;