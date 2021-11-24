/* eslint no-eval: 0 */

import './styles/app.css';

export default function App() {

  const calculate = () => {
    var screen = document.querySelector('#screen')
    screen.value = eval(screen.value)
  }

  const sinValue = () => {
    var screen = document.querySelector('#screen')
    screen.value = Math.sin(screen.value)
  }

  const cosValue = () => {
    var screen = document.querySelector('#screen')
    screen.value = Math.cos(screen.value)
  }

  const tanValue = () => {
    var screen = document.querySelector('#screen')
    screen.value = Math.tan(screen.value)
  }

  const logValue = () => {
    var screen = document.querySelector('#screen')
    screen.value = Math.log(screen.value)
  }

  const powValue = () => {
    var screen = document.querySelector('#screen')
    screen.value = Math.pow(screen.value, 2)
  }

  const sqrtValue = () => {
    var screen = document.querySelector('#screen')
    screen.value = Math.sqrt(screen.value)
  }

  const piValue = () => {
    var screen = document.querySelector('#screen')
    if (screen.value !== '0') {
      screen.value += '3.1415926535'
    } else {
      screen.value = '3.1415926535'
    }
  }

  const eValue = () => {
    var screen = document.querySelector('#screen')
    if (screen.value !== '0') {
      screen.value += '2.7182818284'
    } else {
      screen.value = '2.7182818284'
    }
  }

  const factValue = () => {
    var screen = document.querySelector('#screen')
    var i = 1, num = screen.value, f = 1;

    for (i = 1; i <= parseInt(num, 10); i++) {
      f *= i;
    }

    screen.value = f
  }

  const bspValue = () => {
    var screen = document.querySelector('#screen')

    if (screen.value.length !== 1) {
      screen.value = screen.value.substr(0, screen.value.length - 1)
    } else {
      screen.value = '0'
    }
  }

  const clearValue = () => {
    var screen = document.querySelector('#screen')
    screen.value = '0'
  }

  const calcButton = (e) => {
    const screen = document.querySelector('#screen')
    let text = e.target.innerText 

    if (text === 'X') {
      text = '*'
    } else if (text === '÷') {
      text = '/'
    }
 
    if (screen.value !== '0') {
      screen.value += text;
    } else {
      screen.value = text
    }
  }

  return (
    <>

      <div
      className='header'>
        
        <h3><i className="fas fa-calculator"></i>SCIMORPH</h3>

      </div>

      <div
      className='container'>

        <div
        className='display'>

          <input id='screen' type='text' placeholder='0' readOnly/>

        </div>

        <div
        className='btns'>

          <div
          className='row'>

            <button id='ce' className='btn' onClick={bspValue}>CE</button>
            <button className='btn' onClick={factValue}>x!</button>
            <button className='btn' onClick={calcButton}>(</button>
            <button className='btn' onClick={calcButton}>)</button>
            <button className='btn' onClick={calcButton}>%</button>
            <button id='ac' className='btn' onClick={clearValue}>AC</button>

          </div>

          <div
          className='row'>

            <button className='btn' onClick={sinValue}>sin</button>
            <button className='btn' onClick={piValue}>π</button>
            <button className='btn' onClick={calcButton}>7</button>
            <button className='btn' onClick={calcButton}>8</button>
            <button className='btn' onClick={calcButton}>9</button>
            <button className='btn' onClick={calcButton}>÷</button>

          </div>

          <div
          className='row'>

            <button className='btn' onClick={cosValue}>cos</button>
            <button className='btn' onClick={logValue}>log</button>
            <button className='btn' onClick={calcButton}>4</button>
            <button className='btn' onClick={calcButton}>5</button>
            <button className='btn' onClick={calcButton}>6</button>
            <button className='btn' onClick={calcButton}>X</button>

          </div>

          <div
          className='row'>

            <button className='btn' onClick={tanValue}>tan</button>
            <button className='btn' onClick={sqrtValue}>√</button>
            <button className='btn' onClick={calcButton}>1</button>
            <button className='btn' onClick={calcButton}>2</button>
            <button className='btn' onClick={calcButton}>3</button>
            <button className='btn' onClick={calcButton}>-</button>

          </div>

          <div
          className='row'>

            <button className='btn' onClick={eValue}>e</button>
            <button className='btn' onClick={powValue}>x<span className='subscript'>2</span></button>
            <button className='btn' onClick={calcButton}>0</button>
            <button className='btn' onClick={calcButton}>.</button>
            <button id='eval' className='btn' onClick={calculate}>=</button>
            <button className='btn' onClick={calcButton}>+</button>

          </div>

        </div>

      </div>

      <div
      className='footer'>
        
        <h6>&copy; 2021 - Designed by <a href='https://www.hkgdev.com/'>HKGDev</a></h6>

      </div>
    
    </>
  );
}
