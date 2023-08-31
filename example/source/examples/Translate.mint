component Translate {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Moved square
                  el
                  |> Canvas.translate(110, 30)
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.fillRect(0, 0, 80, 80)

                  // Reset current transformation matrix to the identity matrix
                  el
                  |> Canvas.setTransform(1, 0, 0, 1, 0, 0)

                  // Unmoved square
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
                  |> Canvas.fillRect(0, 0, 80, 80)

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
