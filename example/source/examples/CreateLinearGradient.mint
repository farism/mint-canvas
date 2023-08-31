component CreateLinearGradient {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Add five color stops
                  let gradient =
                    Canvas.createLinearGradient(el, 20, 0, 220, 0)
                    |> CanvasGradient.addColorStop(0, "green")
                    |> CanvasGradient.addColorStop(0.5, "cyan")
                    |> CanvasGradient.addColorStop(1, "green")

                  // Set the fill style and draw a rectangle
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::Gradient(gradient))
                  |> Canvas.fillRect(20, 20, 200, 200)

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
