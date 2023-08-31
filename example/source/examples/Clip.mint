component Clip {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  let dims =
                    Dom.getDimensions(el)

                  // Create circular clipping region
                  el
                  |> Canvas.beginPath
                  |> Canvas.arc(100, 75, 50, 0, `Math.PI` * 2)
                  |> Canvas.clip

                  // Draw stuff that gets clipped
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.fillRect(0, 0, dims.width, dims.height)
                  |> Canvas.setFillStyle(CanvasFillStyle::String("orange"))
                  |> Canvas.fillRect(0, 0, 100, 100)

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
