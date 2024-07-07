import './Counter.css';
import './components/Display'
import { useState } from 'react';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import Clock from './components/Clock';
import Step from './components/Step';

const Counter = (props) => {

    const [counter, setCounter] = useState(props.counterInitValue);
    const [showClock, setShowClock] = useState(false);
    const [step, setStep] = useState(0);

    const updateCounter = (action) => {
        if (action === "add") {
            setCounter(counter + step);
        }
        else if (action === "reset") {
            setCounter(props.counterInitValue);
        }
        else if (action === "set zero") {
            setCounter(0);
        }
    }

    const updateStepValue = (e) => {
        const value = Number(e.target.value);
        setStep(value);
    }


    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter} />
            <Step updateStepValue={updateStepValue}/>
            {showClock ? <Clock setShowClock={setShowClock} /> : <p className='clockControl' onClick={() => setShowClock(true)} > Pokaż zegar</p>}
        </div >
    );
}

export default Counter;