import { Symbol, Label } from '../lib/define/define'
import TriangleStrategies from './strategy/TriangleStrategies'
import Badges from '../component/badge/Badge.js'
import Input  from '../component/input/Input.js'
import Button  from '../component/button/Button.js'
import SymbolButton  from '../component/button/SymbolButton.js'
// register
customElements.define('fish-button', Button)
customElements.define('fish-symbol-button', SymbolButton)


const x = Object.keys(Label).reduce((a, b)=>{
  return [
    ...a,
    Label[b]
  ]
}, [])
x.forEach(symbol=> {
  const x = document.querySelector('.btn-container')
  const b = document.createElement('fish-symbol-button')
  console.dir(b)
  console.log( b.shadow.querySelector('.symbol-button') )
  b.shadow.querySelector('.symbol-button').textContent = symbol
  x.appendChild(b)
})
  


// const badges = new Badges()
// const blockInput = new Input()

// badges.addBadge(Symbol.STAR, Label.STAR)
// badges.addBadge(Symbol.CIRCLE, Label.CIRCLE)
// badges.addBadge(Symbol.CROSS, Label.CROSS)

// const badgeBtns = document.querySelector('.badge-btns')

// const generateBadgeButtons = (badges) => {
//   badges.badges.forEach(badge => {
//     const btn = document.createElement('button')
//     btn.innerHTML = badge.label
//     btn.classList.add('badge-btn')
//     badgeBtns.appendChild(btn)
//     btn.addEventListener('click', function () {
//       blockInput.height = document.querySelector('#height').value
//       blockInput.size = document.querySelector('#size').value
//       blockInput.margin = document.querySelector('#margin').value
//       blockInput.symbol = badge.label
//       TriangleStrategies['isosceles-triangle'](blockInput)
//     })
//   })
// }

// generateBadgeButtons(badges)
//console.log(new Button())
//document.appendChild()