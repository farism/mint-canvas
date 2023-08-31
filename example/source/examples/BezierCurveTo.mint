component BezierCurveTo {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case Dom.Canvas.fromDomElement(canvas) {
              Maybe::Just(el) =>
                {
                  let start =
                    {50, 20}

                  let cp1 =
                    {230, 30}

                  let cp2 =
                    {150, 80}

                  let end =
                    {250, 100}

                  el
                  |> Canvas.beginPath
                  |> Canvas.moveTo(start[0], start[1])
                  |> Canvas.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], end[0], end[1])
                  |> Canvas.stroke

                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.beginPath
                  |> Canvas.arc(start[0], start[1], 5, 0, 2 * `Math.PI`)
                  |> Canvas.arc(end[0], end[1], 5, 0, 2 * `Math.PI`)
                  |> Canvas.fill

                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.beginPath
                  |> Canvas.arc(cp1[0], cp1[1], 5, 0, 2 * `Math.PI`)
                  |> Canvas.arc(cp2[0], cp2[1], 5, 0, 2 * `Math.PI`)
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
