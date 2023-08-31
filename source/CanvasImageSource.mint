module CanvasImageSource {
  fun fromImage (el : Dom.Element) : CanvasImageSource {
    `#{el}` as CanvasImageSource
  }
}
