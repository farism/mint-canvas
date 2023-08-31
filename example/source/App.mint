store App {
  state method = "setDirection"

  fun setMethod (m : String) {
    next { method: m }
  }
}
