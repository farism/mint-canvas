component BeginPath {
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
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.moveTo(20, 20)
                  |> Canvas.lineTo(200, 20)
                  |> Canvas.stroke

                  // Second path
                  el
                  |> Canvas.beginPath
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("green"))
                  |> Canvas.moveTo(20, 20)
                  |> Canvas.lineTo(120, 120)
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
