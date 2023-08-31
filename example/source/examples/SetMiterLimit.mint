component SetMiterLimit {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  // Clear canvas
                  el
                  |> Canvas.clearRect(0, 0, 150, 150)

                  // Draw guides
                  el
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("#09f"))
                  |> Canvas.setLineWidth(2)
                  |> Canvas.strokeRect(-5, 50, 160, 50)

                  // Set line styles
                  el
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("#000"))
                  |> Canvas.setLineWidth(10)

                  // Draw lines
                  el
                  |> Canvas.beginPath
                  |> Canvas.moveTo(0, 100)

                  Array.range(0, 24)
                  |> Array.mapWithIndex(
                    (val : Number, i : Number) {
                      let dy =
                        if i % 2 == 0 {
                          25
                        } else {
                          -25
                        }

                      Canvas.lineTo(el, Math.pow(i, 1.5) * 2, 75 + dy)
                      val
                    })

                  el
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

        <canvas as canvas
          width="150"
          height="150"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
