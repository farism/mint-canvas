component CreateConicGradient {
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
                    Canvas.createConicGradient(el, 0, 100, 100)
                    |> CanvasGradient.addColorStop(0, "red")
                    |> CanvasGradient.addColorStop(0.25, "orange")
                    |> CanvasGradient.addColorStop(0.5, "yellow")
                    |> CanvasGradient.addColorStop(0.75, "green")
                    |> CanvasGradient.addColorStop(1, "blue")

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

        <canvas as canvas
          width="240"
          height="240"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
