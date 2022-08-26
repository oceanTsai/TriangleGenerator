import Button from './Button.js'
/**
 * Button
 * @author ocean.tsai
 * @package indi.hyxfish27.component
 * @class
 * @description
 */
export default class SymbolButton extends Button {
  constructor () {
    super()
    const style = document.createElement('style')
    style.textContent = `
    .symbol-button {
        width: 50px;
        height: 50px;
        text-align: center;
        font-size: 24px;
        border-radius: 5px;
        background-color: salmon;
        color: wheat;
        border: 1px solid #fff;
      }
    `
    this.shadow.appendChild(style)
    this.button.setAttribute('class', 'symbol-button')
  }
}
