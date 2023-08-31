routes {
  / {
    ""
  }

  /:method (method : String) {
    App.setMethod(method)
  }
}
