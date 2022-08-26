/**
 * Button
 * @author ocean.tsai
 * @package indi.hyxfish27.component
 * @class
 * @description
 */
export default class Button extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.button = document.createElement('button')
    this.button.textContent = this.textContent || ''
    this.shadow.appendChild(this.button)
    this.innerHTML = ''
  }
}
