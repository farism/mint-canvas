component ResetTransform {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Skewed rectangles
                  el
                  |> Canvas.transform(1, 0, 1.7, 1, 0, 0)
                  |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
                  |> Canvas.fillRect(40, 40, 50, 20)
                  |> Canvas.fillRect(40, 90, 50, 20)

                  // Non-skewed rectangles
                  el
                  |> Canvas.resetTransform()
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.fillRect(40, 40, 50, 20)
                  |> Canvas.fillRect(40, 90, 50, 20)

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
