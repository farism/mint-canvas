component CreateRadialGradient {
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
                    Canvas.createRadialGradient(el, 110, 90, 30, 100, 100, 70)
                    |> CanvasGradient.addColorStop(0, "pink")
                    |> CanvasGradient.addColorStop(0.9, "white")
                    |> CanvasGradient.addColorStop(1, "green")

                  // Set the fill style and draw a rectangle
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::Gradient(gradient))
                  |> Canvas.fillRect(20, 20, 160, 160)

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
