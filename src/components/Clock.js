import { useEffect, useState } from "react";

const Clock = (props) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log("Komponent zamontowany");

        const interval = setInterval(()=>{
            console.log("interwał się wykonuje")
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () =>{
            console.log('odmontowuje i czyszcze');
            clearInterval(interval);
        }
    }, []);


    return(
        <p>{time}{" "} <span className='clockControl' onClick={()=>props.setShowClock(false)}>x</span></p>
    )
}

export default Clock;