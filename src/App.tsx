
import { useState } from 'react';
import {rates} from './assets/rates'
import './App.css'

const App = () => {

  const [amount1, setAmount1] = useState(0)
  const [amount2, setAmount2] = useState(0)
  const [cur1, setCur1] = useState<keyof typeof rates>('EUR')
  const [cur2, setCur2] = useState<keyof typeof rates>('USD')

  const clicSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const clickDown = () => {
    const result = amount1 * (rates[cur2] / rates[cur1])
    setAmount2(parseFloat(result.toFixed(2)))
  }

  const clickUp = () => {
    const result =  amount2 * (rates[cur1] / rates[cur2])
    setAmount1(parseFloat(result.toFixed(2)))
  }

  const majAmount1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nombre = Number(event.target.value)
    if (!isNaN(nombre)) { setAmount1(Number(nombre))} // si valeur numérique, mettre à jour le state
    else { event.target.value = amount1.toString() } // sinon, réaffecter l'ancienne valeur du state à l'input
  }

  const majAmount2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nombre = Number(event.target.value)
    if (!isNaN(nombre)) { setAmount2(Number(nombre))} // si valeur numérique, mettre à jour le state
    else { event.target.value = amount2.toString() } // sinon, réaffecter l'ancienne valeur du state à l'input
  }

  const majCur1 = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setCur1(event.target.value as keyof typeof rates)
  }

  const majCur2 = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setCur2(event.target.value as keyof typeof rates)
  }

  return (
    <div className='app-cont0'>
      <div className='titre'>
        <img src="billets.png" alt="billets" />
        <h1>Converter</h1>
        <img src="billets.png" alt="billets" />
      </div>
      <form id="formulaire" onSubmit={clicSubmit}>
        <div className='app-cont1'>
          <input
            placeholder="Amount1"
            type="text"
            name="Amount1"
            value={amount1}
            onChange={majAmount1}
          />
          <select value={cur1} onChange={majCur1}>
            {Object.keys(rates).map(key=>(
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>
        <div className='app-cont2'>
          <button type='button' onClick={clickDown}><img src="fleche.png" alt="fleche down" /></button>
          <button type='button' onClick={clickUp}><img src="fleche.png" alt="fleche up" /></button>
        </div>
        <div className='app-cont1'>
          <input
            placeholder="Amount2"
            type="text"
            name="Amount2"
            value={amount2}
            onChange={majAmount2}
          />
          <select value={cur2} onChange={majCur2}>
            {Object.keys(rates).map(key=>(
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default App;