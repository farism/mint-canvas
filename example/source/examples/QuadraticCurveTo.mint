component QuadraticCurveTo {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  // Quadratic Bézier curve
                  el
                  |> Canvas.beginPath
                  |> Canvas.moveTo(50, 20)
                  |> Canvas.quadraticCurveTo(230, 30, 50, 100)
                  |> Canvas.stroke

                  // Start and end points
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.beginPath
                  |> Canvas.arc(50, 20, 5, 0, 2 * `Math.PI`)
                  |> Canvas.arc(50, 100, 5, 0, 2 * `Math.PI`)
                  |> Canvas.fill

                  // Control point
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.beginPath
                  |> Canvas.arc(230, 30, 5, 0, 2 * `Math.PI`)
                  |> Canvas.fill

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
