module TextMetrics {
  fun actualBoundingBoxAscent (textMetrics : TextMetrics) : Number {
    `#{textMetrics}.actualBoundingBoxAscent` as Number
  }

  fun actualBoundingBoxDescent (textMetrics : TextMetrics) : Number {
    `#{textMetrics}.actualBoundingBoxDescent` as Number
  }

  fun actualBoundingBoxLeft (textMetrics : TextMetrics) : Number {
    `#{textMetrics}.actualBoundingBoxLeft` as Number
  }

  fun actualBoundingBoxRight (textMetrics : TextMetrics) : Number {
    `#{textMetrics}.actualBoundingBoxRight` as Number
  }

  fun fontBoundingBoxAscent (textMetrics : TextMetrics) : Number {
    `#{textMetrics}.fontBoundingBoxAscent` as Number
  }

  fun fontBoundingBoxDescent (textMetrics : TextMetrics) : Number {
    `#{textMetrics}.fontBoundingBoxDescent` as Number
  }

  fun width (textMetrics : TextMetrics) : Number {
    `#{textMetrics}.width` as Number
  }
}
