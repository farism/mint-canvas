module ImageData {
  /* Returns a newly instantiated ImageData having the specified width and height. Defaults to transparent black. */
  fun create : ImageData {
    `new ImageData()` as ImageData
  }

  /*
  Returns a Uint8ClampedArray that contains the ImageData object's pixel data.

  Data is stored as a one-dimensional array in the RGBA order, with integer values between 0 and 255 (inclusive).
  */
  fun data (imageData : ImageData) : Uint8ClampedArray {
    `#{imageData}.data` as Uint8ClampedArray
  }

  /* Creates ImageData from a `Uint8ClampedArray` containing the underlying pixel representation of the image. */
  fun fromDataArray (
    dataArray : Uint8ClampedArray,
    width : Number,
    height : Number = 0
  ) : ImageData {
    if height > 0 {
      `new ImageData(#{dataArray}, #{width}, #{height})` as ImageData
    } else {
      `new ImageData(#{dataArray}, #{width})` as ImageData
    }
  }

  /* returns the `height` of the ImageData */
  fun height (imageData : ImageData) : Number {
    `#{imageData}.height` as Number
  }

  /* Set a single value in the underlying `data` array */
  fun set (imageData : ImageData, index : Number, value : Number) {
    `#{imageData}.data[#{index}] = #{value}`
  }

  /* returns the `width` of the ImageData */
  fun width (imageData : ImageData) : Number {
    `#{imageData}.width` as Number
  }
}
