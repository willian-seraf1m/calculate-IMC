import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {notNumber, calculateIMC} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const WeightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
  if(WeightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
  
  const resultIMC = calculateIMC(weight, height)
  DisplayResultMessage(resultIMC)
}

function DisplayResultMessage(result) {
  const message = `Seu IMC é ${result}`

  Modal.message.innerText = message
  Modal.open()
}