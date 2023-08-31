module Dom.Canvas {
  fun fromDomElement (el : Maybe(Dom.Element)) : Maybe(Dom.Canvas) {
    case el {
      Maybe::Just(el) =>
        {
          let isCanvasElement =
            `(() => #{el} instanceof HTMLCanvasElement)()`

          if isCanvasElement {
            `#{Maybe::Just(el)}` as Maybe(Dom.Canvas)
          } else {
            Maybe::Nothing
          }
        }

      =>
        Maybe::Nothing
    }
  }

  fun toDomElement (el : Dom.Canvas) : Dom.Element {
    `#{el}` as Dom.Element
  }
}
