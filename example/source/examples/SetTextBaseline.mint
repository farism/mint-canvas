component SetTextBaseline {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  let baselines =
                    [
                      CanvasTextBaseline::Top,
                      CanvasTextBaseline::Hanging,
                      CanvasTextBaseline::Middle,
                      CanvasTextBaseline::Alphabetic,
                      CanvasTextBaseline::Ideographic,
                      CanvasTextBaseline::Bottom
                    ]

                  el
                  |> Canvas.setFont("36px serif")
                  |> Canvas.setStrokeStyle(CanvasFillStyle::String("red"))

                  Array.mapWithIndex(
                    baselines,
                    (baseline : CanvasTextBaseline, index : Number) {
                      let y =
                        75 + index * 75

                      el
                      |> Canvas.setTextBaseline(baseline)
                      |> Canvas.beginPath()
                      |> Canvas.moveTo(0, y + 0.5)
                      |> Canvas.lineTo(550, y + 0.5)
                      |> Canvas.stroke()
                      |> Canvas.fillText("Abcdefghijklmnop (#{Canvas.textBaselineToStr(baseline)})", 0, y)
                    })

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
          width="550"
          height="500"/>
      }

    <>
      <div class="demo">
        <{ result }>
      </div>

      <Hljs code={code}/>
    </>
  }
}
