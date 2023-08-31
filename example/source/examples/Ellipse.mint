component Ellipse {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.ellipse(100, 100, 50, 75, 3.14 * 2, 0, 0)
                  |> Canvas.fill

                  el
                  |> Canvas.beginPath
                  |> Canvas.ellipse(100, 100, 50, 75, `Math.PI` / 4, 0, 2 * `Math.PI`)
                  |> Canvas.stroke

                  // Draw the ellipse's line of reflection
                  el
                  |> Canvas.beginPath
                  |> Canvas.setLineDash([5, 5])
                  |> Canvas.moveTo(0, 200)
                  |> Canvas.lineTo(200, 0)
                  |> Canvas.stroke

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

        <canvas as canvas
          width="200"
          height="200"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
