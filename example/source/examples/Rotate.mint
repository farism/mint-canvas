component Rotate {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Point of transform origin
                  el
                  |> Canvas.arc(0, 0, 5, 0, 2 * `Math.PI`)
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.fill()

                  // Non-rotated rectangle
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
                  |> Canvas.fillRect(100, 0, 80, 20)

                  // Rotated rectangle
                  el
                  |> Canvas.rotate((45 * `Math.PI`) / 180)
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.fillRect(100, 0, 80, 20)

                  // Reset transformation matrix to the identity matrix
                  el
                  |> Canvas.setTransform(1, 0, 0, 1, 0, 0)

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
