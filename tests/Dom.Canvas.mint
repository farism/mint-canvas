suite "Dom.Canvas.fromDomElement" {
  test "it returns Maybe::Just(Dom.Canvas) when the element is a <canvas>" {
    <canvas/>
    |> Test.Html.start
    |> (ctx : Test.Context(Dom.Element)) {
      let el =
        Dom.getElementBySelector("canvas")

      Dom.Canvas.fromDomElement(el) != Maybe::Nothing
    }
  }

  test "it returns Maybe::Nothing when the element is not a <canvas>" {
    <div/>
    |> Test.Html.start
    |> (ctx : Test.Context(Dom.Element)) {
      let el =
        Dom.getElementBySelector("div")

      Dom.Canvas.fromDomElement(el) == Maybe::Nothing
    }
  }
}
