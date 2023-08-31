module CanvasGradient {
  fun addColorStop (
    gradient : CanvasGradient,
    offset : Number,
    color : String
  ) : CanvasGradient {
    `#{gradient}.addColorStop(#{offset}, #{color})`
    gradient
  }
}
