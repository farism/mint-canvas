component FillPath {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  // Create path
                  let region =
                    Path2D.create()

                  region
                  |> Path2D.moveTo(30, 90)
                  |> Path2D.lineTo(110, 20)
                  |> Path2D.lineTo(240, 130)
                  |> Path2D.lineTo(60, 130)
                  |> Path2D.lineTo(190, 20)
                  |> Path2D.lineTo(270, 90)
                  |> Path2D.closePath()

                  // Fill path
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("green"))
                  |> Canvas.fillPath(region, CanvasFillRule::EvenOdd)

                  ""
                }

              Maybe::Nothing =>
                ""
            }
          }

        {
          await Timer.timeout(0)
          draw()
        }

        <canvas as canvas/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
