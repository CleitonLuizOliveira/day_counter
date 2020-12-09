import { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [answer, setAnswer] = useState(0);
    const [birthDay, setBirthDay] = useState(0);

    const today = new Date("2020-12-09");

    // function CalculateAnswer() {
    //     const newAnswer = Math.ceil(Math.abs(new Date() - birthDay) / (1000 * 60 * 60 * 24));
    //     setAnswer(newAnswer);
    // }

    useEffect(() => {
        const newAnswer = Math.ceil(Math.abs(today - birthDay) / (1000 * 60 * 60 * 24));
        setAnswer(newAnswer);
    }, [birthDay])

    return (
        <div className="App">
            <h2>How many days have you lived until today?</h2>
            <label htmlFor="">Select yout birthday below and you will know!</label>
            <input type="date" value={birthDay} onChange={event => setBirthDay(event.currentTarget.value) } />
            <legend>{birthDay}</legend>
            <legend>Up until today you have lived {answer} days!</legend>
        </div>
    );
}

export default App;
