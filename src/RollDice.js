    import { useState } from "react";
    import Die from "./Die";
    import './RollDice.css';

    function RollDice() {
        const [roll, setRoll] = useState({
            die1: 'one',
            die2: 'one',
            rolling: false,
        });


//TODO: FIX THE FACT THAT THE STATE ISNT STAYING UPDATED.....
        const newRoll = () => {
            //set sides of the die
            const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
            //pick new rolls
            const newDie1 = sides[Math.floor(Math.random() * sides.length)];
            const newDie2 = sides[Math.floor(Math.random() * sides.length)];
            //set state with new rolls
            setRoll({ die1: newDie1, die2: newDie2, rolling: true });
            //wait one second, then set rolling to false
            setTimeout(() => {
                setRoll({...roll, rolling: false})
            }, 1000)

        }

        return <div className="RollDice">
            <div className="dice">
                <Die face={roll.die1} rolling={roll.rolling}/>
                <Die face={roll.die2} rolling={roll.rolling}/>
            </div>
            <button onClick={newRoll} disabled={roll.rolling}>
                {roll.rolling ? 'Rolling...' : 'Roll Dice'}
            </button>
        </div>
    }

    export default RollDice;