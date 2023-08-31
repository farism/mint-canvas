module Uint8ClampedArray {
  fun fromArray (array : Array(Number)) : Uint8ClampedArray {
    `new Uint8ClampedArray(#{array})`
  }

  fun fromLength (length : Number) : Uint8ClampedArray {
    `new Uint8ClampedArray(#{length})`
  }
}
