import './Counter.css';
import './components/Display'
import { useState } from 'react';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import Clock from './components/Clock';

const Counter = (props) => {

    const [counter, setCounter] = useState(props.counterInitValue);
    const [showClock, setShowClock] = useState(false);

    const updateCounter = (action) => {
        if (action === "add") {
            setCounter(counter + 1);
        }
        else if (action === "reset") {
            setCounter(props.counterInitValue);
        }
        else if (action === "set zero") {
            setCounter(0);
        }
    }

    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter} />
            {showClock ? <Clock setShowClock={setShowClock} /> : <p className='clockControl' onClick={() => setShowClock(true)} > Pokaż zegar</p>}
        </div >
    );
}

export default Counter;