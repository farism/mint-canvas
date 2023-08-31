component IsPointInPath {
  fun render : Html {
    let {result, code} =
      @format {
        let circle =
          Path2D.create()
          |> Path2D.arc(150, 75, 50, 0, 2 * `Math.PI`)

        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  el
                  |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
                  |> Canvas.fillPath(circle)

                  ""
                }

              Maybe::Nothing =>
                ""
            }
          }

        // Listen for mouse moves
        let onMouseMove =
          (e : Html.Event) {
            case canvas {
              Maybe::Just(el) =>
                {
                  let dims =
                    Dom.getDimensions(el)

                  let x =
                    e.clientX - dims.left

                  let y =
                    e.clientY - dims.top

                  // Check whether point is inside circle
                  let isPointInPath =
                    el
                    |> Canvas.isPointInPath(x, y, CanvasFillRule::Nonzero, Maybe::Just(circle))

                  let color =
                    CanvasFillStyle::String(
                      if isPointInPath {
                        "green"
                      } else {
                        "red"
                      })

                  el
                  |> Canvas.setFillStyle(color)
                  |> Canvas.clearRect(0, 0, dims.width, dims.height)
                  |> Canvas.fillPath(circle)

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

        <canvas as canvas onMouseMove={onMouseMove}/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
