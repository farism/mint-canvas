component ArcTo {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Tangential lines
                  el
                  |> Canvas.beginPath
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("gray"))
                  |> Canvas.moveTo(200, 20)
                  |> Canvas.lineTo(200, 130)
                  |> Canvas.lineTo(50, 20)
                  |> Canvas.stroke

                  // Arc
                  el
                  |> Canvas.beginPath
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("black"))
                  |> Canvas.setLineWidth(5)
                  |> Canvas.moveTo(200, 20)
                  |> Canvas.arcTo(200, 130, 50, 20, 40)
                  |> Canvas.stroke

                  // Start point
                  el
                  |> Canvas.beginPath
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.arc(200, 20, 5, 0, 2 * `Math.PI`)
                  |> Canvas.fill

                  // Control points
                  el
                  |> Canvas.beginPath
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.arc(200, 130, 5, 0, 2 * `Math.PI`)
                  |> Canvas.arc(50, 20, 5, 0, 2 * `Math.PI`)
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
