component ClipPath {
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

                  // Create clipping path
                  let region =
                    Path2D.create()
                    |> Path2D.rect(80, 10, 20, 130)
                    |> Path2D.rect(40, 50, 100, 50)

                  // Apply the clipping path
                  el
                  |> Canvas.clipPath(region, CanvasFillRule::EvenOdd)

                  // Draw stuff that gets clipped
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
                  |> Canvas.fillRect(0, 0, dims.width, dims.height)

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
