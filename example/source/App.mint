store App {
  state method = "arc"

  fun setMethod (m : String) {
    next { method: m }
  }
}
