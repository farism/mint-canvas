routes {
  / {
    Window.navigate("/setDirection")
  }

  /:method (method : String) {
    App.setMethod(method)
  }
}
