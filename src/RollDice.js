import { useState } from "react";
import Die from "./Die";
import './RollDice.css';

function RollDice() {
    const [roll, setRoll] = useState({
        die1: 'one',
        die2: 'one',
        rolling: false,
    });

    const newRoll = () => {
        const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];

        setRoll({ die1: newDie1, die2: newDie2 });
    }

    return <div className="RollDice">
        <div className="dice">
            <Die face={roll.die1} />
            <Die face={roll.die2} />
        </div>
        <button onClick={newRoll}>Roll Dice</button>
    </div>
}

export default RollDice;