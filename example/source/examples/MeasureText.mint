component MeasureText {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  let width =
                    el
                    |> Canvas.measureText("Hello world")
                    |> TextMetrics.width

                  el
                  |> Canvas.setFont("24px serif")
                  |> Canvas.fillText("width: #{width}", 0, 50)

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
