import { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [answer, setAnswer] = useState(0);
    const [birthDay, setBirthDay] = useState(0);

    const today = new Date();
    const realToday = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDay()}`

    useEffect(() => {
        const newAnswer = Math.ceil(Math.abs(new Date(realToday) - new Date(birthDay)) / (1000 * 60 * 60 * 24));
        setAnswer(newAnswer);
    }, [birthDay, realToday]);

    return (
        <div className="App">
            <div className="container">
                <h2>How many days have you lived until today?</h2>
                <label htmlFor="">Select yout birthday below and you will know!</label>
                <input type="date" value={birthDay} onChange={event => setBirthDay(event.currentTarget.value) } />
                {birthDay !== 0 ? <h3>Up until today you have lived {answer} days!</h3> : <div></div>}
            </div>
        </div>
    );
}

export default App;