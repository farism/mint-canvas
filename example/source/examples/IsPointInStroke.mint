component IsPointInStroke {
  fun render : Html {
    let {result, code} =
      @format {
        let draw =
          () {
            case canvas {
              Maybe::Just(el) =>
                {
                  let isInStroke =
                    el
                    |> Canvas.rect(10, 10, 100, 100)
                    |> Canvas.stroke()
                    |> Canvas.isPointInStroke(50, 10)

                  el
                  |> Canvas.fillText("(50, 10) is in stroke: #{Bool.toString(isInStroke)}", 150, 50)

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
