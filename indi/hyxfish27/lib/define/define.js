// Badge symbol
export const Symbol = Object.freeze({
  STAR: 'star',
  CIRCLE: 'circle',
  CROSS: 'cross'
})

export const Label = Object.freeze({
  STAR: '*',
  CIRCLE: 'o',
  CROSS: 'x'
})


/**
 * @author
 * @function
 * @param {object}  object
 * @description 定義列舉物件
 */
 export const defineEnum = object => {
  return new Proxy(object, {
    get (target, prop) {
      return Reflect.get(target, prop)
    },

    set (target, propKey, value, receiver) {
      throw new TypeError(`${propKey} is readonly!`)
    },

    deleteProperty (target, propKey, value, receiver) {
      throw new TypeError(`${propKey} not allow delete!`)
    }
  })
}

/**
 * immutable
 * @author
 * @function
 * @param {object} object
 * @description 定義不可變物件。
 */
export const immutable = defineEnum
