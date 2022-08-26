/* eslint-disable eqeqeq */
/**
 * Display
 * @author
 * @package indi.hyxfish27.component
 * @abstract
 * @class
 * @description 所組件的父組件，此為抽象類別不可直接實體化。
 */
export class Display {
  constructor (size) {
    this.width = size.width
  }

  _width = 0
  get width () {
    return this._width
  }

  set width (value) {
    this._width = value
  }

  _height = 0
  get height () {
    return this._height
  }

  set height (value) {
    this._height = this.height
  }

  show () {

  }

  clear () {

  }
}
