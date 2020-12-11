import { useState, useEffect } from 'react';
import If from './components/If';
import './App.css';

function App() {

    const [answer, setAnswer] = useState(0);
    const [birthDay, setBirthDay] = useState(0);
    const [isBrazil, setIsBrazil] = useState(true);

    const today = new Date();
    const realToday = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDay()}`

    useEffect(() => {
        const newAnswer = Math.ceil(Math.abs(new Date(realToday) - new Date(birthDay)) / (1000 * 60 * 60 * 24));
        setAnswer(newAnswer);
    }, [birthDay, realToday]);

    return (
        <div className="App">
            <div className="container">
                <If test={!isBrazil}>
                    <h2>How many days have you lived until today?</h2>
                    <label htmlFor="">Select yout birthday below and you will know!</label>
                    <input type="date" value={birthDay} onChange={event => setBirthDay(event.currentTarget.value) } />
                    <If test={birthDay !== 0}>
                        <h3>Up until today you have lived {answer} days!</h3>
                    </If>
                </If>
                <If test={isBrazil}>
                    <h2>Quantos dias você viveu até hoje?</h2>
                    <label htmlFor="">Selecione seu aniversário abaixo e você vai saber!</label>
                    <input type="date" value={birthDay} onChange={event => setBirthDay(event.currentTarget.value) } />
                    <If test={birthDay !== 0}>
                        <h3>Até hoje, você já viveu {answer} dias!</h3>
                    </If>
                </If>
                <button onClick={() => setIsBrazil(!isBrazil)}> {isBrazil ? "English" : "Português"} </button>
            </div>
        </div>
    );
}

export default App;